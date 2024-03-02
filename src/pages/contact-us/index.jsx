import React, { Fragment, useState, useEffect } from 'react'
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Button from '@/components/common/button';
import One from '@/styles/assets/18.svg';
import Two from '@/styles/assets/19.svg';
import Three from '@/styles/assets/20.svg';
import Image from '@/components/common/image';
import { useRouter } from 'next/router';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { toast } from 'react-toastify';
import BaseUrl from '../api/BaseUrl';
import ContactMap from '@/components/common/ContactMap';

const Map = dynamic(() => import('../../components/common/map'), { ssr: false });

const Contact = ({ openChat }) => {

    let lastToastTime = 0;
    const debounceToast = (message) => { // debouncing toast
        const now = Date.now();
        if (now - lastToastTime > 2000) { 
            toast.error(message);
            lastToastTime = now;
        }
    }; 

    let router = useRouter();
    const [submitLoading, setSubmitLoading] = useState(false)
    const [open, setOpen] = useState(false);
    const [form,setForm] = useState('')
    const [salesForm , setSalesForm] = useState({
        name: '',
        email: '',
        mobileNo: '',

    })

    

    const onOpenModal = (formnum) =>{
        setOpen(true)
        setForm(formnum)
    } ;
    const onCloseModal = () => {
        setOpen(false)
        setSalesForm({
            name: '',
            email: '',
            mobileNo: '',
    })
        setPartnerForm({
            name: '',
            email: '',
            mobileNo: '',
            companyName: '',
            website: '',
        })
    };

    const [partnerForm, setPartnerForm] = useState({
        name: '',
        email: '',
        mobileNo: '',
        companyName: '',
        website: '',
    })

    const handlePartnerChange = (e) => {
        const { name, value } = e.target;
        let numericValue;
        if (name === "mobileNo") {
            // Replace all non-digit characters except the first '+' symbol
            numericValue = value.replace(/[^+\d]|(?!^)\+/g, "");
        } else {
            numericValue = value;
        }
        setPartnerForm({
            ...partnerForm,
            [name]: numericValue,
        });
      };

    // const handlePartnerChange = (e) =>{
    //     const {name,value} = e.target
    //     const numericValue = name === 'mobileNo' ? value.replace(/\D/g, '') : value;
    //     setPartnerForm({
    //         ...partnerForm,
    //         [name] : numericValue
    //     })
    // }

    const handlePartnerSubmit = async () =>{
        try{
        setSubmitLoading(true)
        const formNamePattern = /[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~0-9]/g;
        if (partnerForm.name.trim() !== "" && formNamePattern.test(partnerForm.name) === false){
            const formEmailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            const formEmailPatternTwo = / /g;
            if(formEmailPattern.test(partnerForm.email) === true &&
            formEmailPatternTwo.test(partnerForm.email) === false &&
            partnerForm.email.trim() !== ""){
                const phonePattern = /[0-9]/g;
                if(phonePattern.test(partnerForm.mobileNo) === true &&
                partnerForm.mobileNo.trim() !== "" &&
                partnerForm.mobileNo.length >= 10){
                    if(partnerForm.companyName.trim() !==""){
                        if(partnerForm.website.trim() !== ""){
                            const response = await BaseUrl.post('/enquiry/send',partnerForm)
                            // console.log(response.data)
                            setOpen(false)
                            setPartnerForm( {
                                name: '',
                                email: '',
                                mobileNo: '',
                                companyName: '',
                                website: '',
                            })
                            toast.success("Form submitted successfully!")
                        }else{
                            debounceToast("Enter your company website!")
                        }
                    }else{
                        debounceToast("Enter your company name!")
                    }
                }else{
                    debounceToast("Enter a valid phone number!")
                }
            }else{
                debounceToast("Enter a valid email!")
            }
            
        }else{
            debounceToast("Enter a valid name!")   
        }
        setSubmitLoading(false)
    }catch(error){
        console.log(error)
        debounceToast("Error on submitting form!")
        setSubmitLoading(false)
    }
    }

    const handleSalesChange = (e) => {
        const { name, value } = e.target;
        let numericValue;
        if (name === "mobileNo") {
            // Replace all non-digit characters except the first '+' symbol
            numericValue = value.replace(/[^+\d]|(?!^)\+/g, "");
        } else {
            numericValue = value;
        }
        setSalesForm({
            ...salesForm,
            [name]: numericValue,
        });
      };
      //
    // const handleSalesChange = (e) =>{
    //     const {name,value} = e.target
    //     const numericValue = name === 'mobileNo' ? value.replace(/\D/g, '') : value;
    //     setSalesForm({
    //         ...salesForm,
    //         [name]:numericValue
    //     })
    // }



    const handleSalesSubmit = async () =>{
        try{
        setSubmitLoading(true)
        const formNamePattern = /[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~0-9]/g;
        if (salesForm.name.trim() !== "" && formNamePattern.test(salesForm.name) === false){
            const formEmailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            const formEmailPatternTwo = / /g;
            if(formEmailPattern.test(salesForm.email) === true &&
            formEmailPatternTwo.test(salesForm.email) === false &&
            salesForm.email.trim() !== ""){
                const phonePattern = /[0-9]/g;
                if(phonePattern.test(salesForm.mobileNo) === true &&
                salesForm.mobileNo.trim() !== "" &&
                salesForm.mobileNo.length >= 10){

                    const response = await BaseUrl.post('/sales/send',salesForm)
                    // console.log(response.data)
                    toast.success("Form submitted successfully")
                    setOpen(false)
                    setSalesForm({
                        name: '',
                        email: '',
                        mobileNo: '',
                    })


                }else{
                    debounceToast("Enter a valid number!")
                }
            }else{
                debounceToast("Enter a valid email!")
            }
        }else{
            debounceToast("Enter a valid name!")
        }
        setSubmitLoading(false)
    }catch(error){
        console.log(error)
        debounceToast("Error on submitting form!")
        setSubmitLoading(false)
    }
    }

    useEffect(() => {
        if (router.query.page === 'scroll') {
            window.scrollTo({
                top: 400,
                behavior: 'smooth',
            });
        }
    }, [router])

    return (
        <Fragment>
            <Head>
                <title>Alo Info-Tech - Contact us </title>
                <meta name="theme-color" content="#4CAAED" />
                <meta name = "keywords" content = "Best it services and solutions in Nagercoil, IT company in Nagercoil, Top 10 software companies, custom software solutions, web development company in Nagercoil, mobile app development company in Nagercoil, software testing, AI development Company in Nagercoil, digital marketing company in Nagercoil, software companies near me, IT companies near me, blockchain development, IT staffing, IT solutions provider, software maintenance and support, software consulting near me, ittraining, nagercoil it companies, nagercoil software companies, Aloinfotech, Tech companies, tech companies in nagercoil, digital marketing solutions, top it companies in Nagercoil, Application Development, Software Service, WebDevelopment, Mobile App Development, Software testing,  UI/UX Designing Services, IT Company, Software Company, Digital Marketing Services,"/>
                <meta name = "keywords" content="IT profession services, IT services for business, Infotech solutions, Product development services, IT and busniess solutions, Business IT consulting services, info IT technologies" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Alo Info-Tech, a stellar software innovator in Nagercoil, excels in bespoke tech solutions. With a rich 3+ years legacy and 64+ successful projects, we redefine excellence in mobile app and website development, IT consulting, and avant-garde AI services. Elevate your tech endeavors with our comprehensive suite of products and trial offering" />
                <link rel="icon" href="/icon.svg" />
                <link rel="manifest" href="/manifest.json" />
                <meta property="instagram:title" content="Alo Infotech - Harmonizing Technology, Empowering Individual" />
                <meta property="instagram:description" content="Alo Info-Tech, a stellar software innovator in Nagercoil, excels in bespoke tech solutions. With a rich 3+ years legacy and 64+ successful projects, we redefine excellence in mobile app and website development, IT consulting, and avant-garde AI services. Elevate your tech endeavors with our comprehensive suite of products and trial offering" />
                <meta property="instagram:image" content="https://www.instagram.com/alo_info_tech/?igsh=ZGNjOWZkYTE3MQ%3D%3D" />
                <meta property="instagram:url" content="https://www.instagram.com/alo_info_tech/?igsh=ZGNjOWZkYTE3MQ%3D%3D" />
                <meta property="facebook:url" content="https://www.facebook.com/profile.php?id=100092521095313" />
            </Head>
            <div className="contact-banner">
                <div className="contact-content">
                    <h1>What can we help you with?</h1>
                    <p>Our team is here to assist you with any inquiries </p>
                </div>
            </div>
            <div className="parent-card">
                <div className="card-img">
                    <div className="one-card">
                        <Image src={One.src} alt={One.src} />
                        <h2>Partner Enquiry</h2>
                        <p>Interested in partnering? Explore partnership possibilities with us. Lets create synergies together for mutual success. </p>
                        <Button onClick={()=>onOpenModal('1')} label="Get In Touch" />
                    </div>
                    <div className="border"></div>
                    <div className="one-card">
                        <Image src={Two.src} alt={Two.src} />
                        <h2>Product Support</h2>
                        <p>Lost in the digital wilderness? Fear not! Our support wizards have GPS for your tech jungle. Get started and find your way to smooth sailing! </p>
                        <Button onClick={openChat} label="Get Started" />
                    </div>
                    <div className="border"></div>
                    <div className="one-card">
                        <Image src={Three.src} alt={Three.src} />
                        <h2>Sales Enquiry</h2>
                        <p>Curious about unleashing the sales magic? Lets turn questions into answers—Contact sales, let the wizardry begin! </p>
                        <Button onClick={()=>onOpenModal('3')} label="Contact Sales" />
                    </div>
                </div>
            </div>
            <div className="map-head">
                <h2>Lost? Dont worry, we&apos;re not hiding ! Find us here ! </h2>
            </div>
            {/* <Map /> */}
            <ContactMap/>

            {form === '1' ?
            <Modal open={open} onClose={onCloseModal} center>
                
                <div className='application_form_container'>
                    <div className='application_title'>
                        <h2 className='form_one_heading'>Become a partner</h2>
                        <h2 className='form_one_title'>Tell us a bit about yourself</h2>
                    </div>
                    <div className='contact_form_one'>
                        <div className='application_form_inputs'>
                            <label>Full name:</label>
                            <input value={partnerForm.name} type="text" required onChange={handlePartnerChange} name="name" id="" />
                        </div>
                        <div className='application_form_inputs'>
                            <label>Business Email:</label>
                            <input value={partnerForm.email} type="email" required onChange={handlePartnerChange} name="email" id="" />
                        </div> 
                        <div className='application_form_inputs'>
                            <label>Phone number:</label>
                            <input maxLength='12' value={partnerForm.mobileNo} type="text" required onChange={handlePartnerChange} name="mobileNo" id="" />
                        </div>
                        <div className='application_form_inputs'>
                            <label>Company name:</label>
                            <input value={partnerForm.companyName} type="text" required onChange={handlePartnerChange} name="companyName" id="" />
                        </div>
                        <div className='application_form_inputs'>
                            <label>Website:</label>
                            <input value={partnerForm.website} type="text" required onChange={handlePartnerChange} name="website" id="" />
                        </div>
                     </div>
                    <button disabled={submitLoading===true?'true':''} onClick={handlePartnerSubmit}>{submitLoading?"Loading...":"Submit"}</button>
                </div>   
            </Modal> : null
            }

            {form === '2'?
            <Modal open={open} onClose={onCloseModal} center>
                <h2>Simple centered modal two</h2>
            </Modal> : null
            }

            {form === '3'?
            <Modal open={open} onClose={onCloseModal} center>
                  
                  <div className='application_form_container'>
                    <div className='application_title'>
                        <h2 className='form_one_heading'>Sales enquiry</h2>
                        <h2 className='form_one_title'>Tell us a bit about yourself</h2>
                    </div>
                    <div className='contact_form_one'>
                        <div className='application_form_inputs'>
                            <label>Full name:</label>
                            <input value={salesForm.name} onChange={handleSalesChange} type="text" name="name" id="" />
                        </div>
                        <div className='application_form_inputs'>
                            <label>Business Email:</label>
                            <input value={salesForm.email} onChange={handleSalesChange} type="email" name="email" id="" />
                        </div> 
                        <div className='application_form_inputs'>
                            <label>Phone number:</label>
                            <input maxLength='12' value={salesForm.mobileNo} onChange={handleSalesChange} type="text"  name="mobileNo" id="" />
                        </div>
                     </div>
                     <button disabled={submitLoading===true?'true':''} onClick={handleSalesSubmit}>{submitLoading?"Loading...":"Submit"}</button>
                </div>   
            </Modal> : null
            }

            
        </Fragment>
    )
}
export default Contact