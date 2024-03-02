import React from "react";
import Image from "@/components/common/image";
import NavLink from "@/components/common/navLink";
import Button from "@/components/common/button";
import Logo from "@/styles/assets/logo.svg";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { useState } from "react";
import { formatRevalidate } from "next/dist/server/lib/revalidate";
import { toast } from "react-toastify";
import BaseUrl from "@/pages/api/BaseUrl";
import Link from "next/link";
import { useRouter } from "next/router";
import dropDownArrow from "@/styles/assets/113.svg";
import { useModal } from "@/components/common/ModelContext";
import sideArrow from "@/styles/assets/128.svg"
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';


const WebHeader = () => {
  const { modalOpen, openModal, closeModal } = useModal()

  const [serviceDrawer,setServiceDrawer] = useState(false)
  const [aboutDrawer,setAboutDrawer] = useState(false)

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const countryCodes = require("country-codes-list");

  let lastToastTime = 0;
  const debounceToast = (message) => { // debouncing toast
      const now = Date.now();
      if (now - lastToastTime > 2000) { 
          toast.error(message);
          lastToastTime = now;
      }
  }; 

  const myCountryCodesObject = countryCodes.customList(
    "countryCode",
    "{countryNameEn}: +{countryCallingCode}"
  );
  const myCountryCodesArray = Object.values(myCountryCodesObject);
  myCountryCodesArray.sort((a, b) => {
    const countryA = a.split(': ')[0];
    const countryB = b.split(': ')[0];
    return countryA.localeCompare(countryB);
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: null,
    mobileNo: "",
    projectType: "",
    budget: "",
    companyName: "",
    maxTime: "",
    requirements: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // const numericValue = name === "mobileNo" ? value.replace(/\D/g, "") : value;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleMobileNo = (val) =>{
    setFormData({
      ...formData,
      mobileNo: val
    })
  }

  const handlSubmit = async () => {
    try {
      setLoading(true);
      const formNamePattern = /[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~0-9]/g;
      if (
        formData.name.trim() !== "" &&
        formNamePattern.test(formData.name) === false
      ) {
        const formEmailPattern =
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const formEmailPatternTwo = / /g;
        if (
          formEmailPattern.test(formData.email) === true &&
          formEmailPatternTwo.test(formData.email) === false &&
          formData.email.trim() !== ""
        ) {
          // if (formData.countryCode.trim() !== "" && formData.countryCode !== "-- Select your country code --") {
            // const phonePattern = /[0-9]/g;
          // const phonePattern = /^[0-9]{10,}$/; 
            if (
              formData.mobileNo.trim() !== "" &&
              formData.mobileNo.trim().length >= 10 
            ) {
              if (formData.projectType.trim() !== "") {
                if (formData.budget.trim() !== "" && formData.budget !== "-- Select a Budget --") {
                  if (formData.companyName.trim() !== "") {
                    if (formData.maxTime.trim() !== "") {
                      if (formData.requirements.trim() !== "") {
                        const response = await BaseUrl.post(
                          "/quote/send",
                          formData
                        );
                        toast.success("Form submitted successfully");
                        setOpen(false);
                        closeModal()
                        // console.log(formData);
                        setFormData({
                          name: "",
                          email: "",
                          countryCode: "",
                          mobileNo: "",
                          projectType: "",
                          budget: "",
                          companyName: "",
                          maxTime: "",
                          requirements: "",
                        });
                        setLoading(false);
                      } else {
                        debounceToast("Enter your project requirement!");
                      }
                    } else {
                      debounceToast("Enter max time!");
                    }
                  } else {
                    debounceToast("Enter your company name!");
                  }
                } else {
                  debounceToast("Select your budget!");
                }
              } else {
                debounceToast("Enter your project type!");
              }
            } else {
              debounceToast("Enter a valid Phone number!");
            }
          // } else {
          //   debounceToast("Select a country code!");
          // }
        } else {
          debounceToast("Enter a valid email!");
        }
      } else {
        debounceToast("Enter a valid name!");
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      debounceToast("Error on submitting form!");
      setLoading(false);
    }
  };

  const [open, setOpen] = React.useState(false);

  const onOpenModal = () => {
    setOpen(true);
  };
  const onCloseModal = () => {
    setOpen(false);
    setFormData({
      name: "",
      email: "",
      countryCode: "",
      phoneNumber: "",
      projectType: "",
      budget: "",
      companyName: "",
      projectTime: "",
      requirements: "",
    });
    closeModal()
  };

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const toggleDrawers = () => {
    setIsOpen(false);
    setAboutDrawer(false)
    setServiceDrawer(false)
  };

  const handleDropDown = (e) => {
    const page = e.target.value;
    if (page) {
      router.push(page);
    }
  };

  return (
    <header>
      <div className="alo">
        <div className="alo-logo">
          <Link href="/">
            <Image src={Logo?.src} alt={Logo.src} />
          </Link>
        </div>
        <div className="alo-hyper">
          <ul>
            <li>
              <NavLink href="/" text="Home" />
            </li>
            <li>
              <div className="about-us-title">
                <span>About Us</span>{" "}
                <img src={dropDownArrow.src} alt={dropDownArrow.src} />
              </div>
              <div  className="nav_drop_about" >
                    <p><Link href="/about-us" >Our Story</Link></p>
                    <p className="about_drop_products">Products <img src={sideArrow.src} alt={sideArrow.src} /></p>
                    <div className="subdrop">
                      <p>Alo Invoice</p>
                      <p>Fast X</p>
                      <p>Alo Foodie</p>
                    </div>
                    <p ><Link href="/events">Events</Link></p>
                    {/* <p ><Link href="/">Our Clients</Link></p> */}
                </div>
            </li>
            <li>
       
                  <div className="service-title">
                    <span>Services</span>{" "}
                    <img src={dropDownArrow.src} alt={dropDownArrow.src} />
                  </div>
                  <div  className="nav_drop_service" >
                    <p><Link href="/AI-services">AI Service</Link></p>
                    <p><Link href="/mobile-app-development">Mobile App Development</Link></p>
                    <p><Link href="/website-development">Website Development</Link></p>
                    <p><Link href="/blockchain-development">Blockchain Development</Link></p>
                    <p><Link href="/Products-and-trials">All Products & Trials</Link></p>
                    <p><Link href="/IT-Consulting">IT Consulting</Link></p>
                  </div>
                
            </li>
            
            <li>
              <NavLink href="/careers" text="Careers" />
            </li>
            <li>
              <NavLink href="/contact-us" text="Contact us" />
            </li>
            <li>
              <NavLink
                onClick={openModal}
                href=""
                text={<Button label="Get Quote" />}
              />
            </li>
          </ul>
          <div className="responsive_nav">
            <button onClick={openModal} className="get_quote_button">
              Get Quote
            </button>
            <button
              id="combo"
              aria-label="Aria Name"
              className="hide_open"
              onClick={toggleDrawer}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="#000"
              >
                <path
                  d="M8.59375 38.2812H41.4062M8.59375 25.7812H41.4062M8.59375 13.2812H41.4062"
                  stroke="black"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        size="100%"
        lockBackgroundScroll={true}
        className="custom-drawer"
      >
        <div className="new-hide">
          <button
            id="combos"
            aria-label="Aria Names"
            className="hide"
            onClick={toggleDrawers}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="#000"
            >
              <path
                d="M27.125 0.895811C26.9322 0.702679 26.7033 0.549455 26.4513 0.44491C26.1992 0.340365 25.9291 0.286552 25.6562 0.286552C25.3834 0.286552 25.1132 0.340365 24.8612 0.44491C24.6091 0.549455 24.3802 0.702679 24.1875 0.895811L14 11.0625L3.81248 0.874977C3.6196 0.682098 3.39062 0.529098 3.13861 0.424713C2.8866 0.320327 2.6165 0.266602 2.34373 0.266602C2.07096 0.266602 1.80085 0.320327 1.54885 0.424713C1.29684 0.529098 1.06786 0.682098 0.874977 0.874977C0.682098 1.06786 0.529098 1.29684 0.424713 1.54885C0.320327 1.80085 0.266602 2.07096 0.266602 2.34373C0.266602 2.6165 0.320327 2.8866 0.424713 3.13861C0.529098 3.39062 0.682098 3.6196 0.874977 3.81248L11.0625 14L0.874977 24.1875C0.682098 24.3804 0.529098 24.6093 0.424713 24.8613C0.320327 25.1134 0.266602 25.3835 0.266602 25.6562C0.266602 25.929 0.320327 26.1991 0.424713 26.4511C0.529098 26.7031 0.682098 26.9321 0.874977 27.125C1.06786 27.3179 1.29684 27.4709 1.54885 27.5752C1.80085 27.6796 2.07096 27.7334 2.34373 27.7334C2.6165 27.7334 2.8866 27.6796 3.13861 27.5752C3.39062 27.4709 3.6196 27.3179 3.81248 27.125L14 16.9375L24.1875 27.125C24.3804 27.3179 24.6093 27.4709 24.8613 27.5752C25.1134 27.6796 25.3835 27.7334 25.6562 27.7334C25.929 27.7334 26.1991 27.6796 26.4511 27.5752C26.7031 27.4709 26.9321 27.3179 27.125 27.125C27.3179 26.9321 27.4709 26.7031 27.5752 26.4511C27.6796 26.1991 27.7334 25.929 27.7334 25.6562C27.7334 25.3835 27.6796 25.1134 27.5752 24.8613C27.4709 24.6093 27.3179 24.3804 27.125 24.1875L16.9375 14L27.125 3.81248C27.9166 3.02081 27.9166 1.68748 27.125 0.895811Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
        <div className="alo-mobile">
          <ul>
            <li>
              <NavLink onClick={toggleDrawers} href="/" text="Home" />
            </li>
            <li>
              <a onClick={()=>setAboutDrawer(!aboutDrawer)}>About Us <img width='10px' height='10px' src={dropDownArrow.src} alt={dropDownArrow.src} /></a>
              <div style={{display:aboutDrawer?'block':'none'}} className="drawer_service_drop">
                <div>
                <NavLink
                  onClick={toggleDrawers}
                  href="/about-us"
                  text="Our Story"
                />
                </div>
                <div>
                <NavLink
                  onClick={toggleDrawers}
                  href="/events"
                  text="Events"
                />
                </div>
                {/* <div>
                <NavLink
                  onClick={toggleDrawers}
                  href="/"
                  text="Our Clients"
                />
                </div> */}
              </div>
            </li>
            
            
            <li>
              <a onClick={()=>setServiceDrawer(!serviceDrawer)}>Services <img width='10px' height='10px' src={dropDownArrow.src} alt={dropDownArrow.src} /></a>
              <div style={{display:serviceDrawer?'block':'none'}} className="drawer_service_drop">
                <div>
                <NavLink
                  onClick={toggleDrawers}
                  href="/AI-services"
                  text="AI Services"
                />
                </div>
                <div>
                <NavLink
                  onClick={toggleDrawers}
                  href="/mobile-app-development"
                  text="Mobile App Development"
                />
                </div>
                <div>
                <NavLink
                  onClick={toggleDrawers}
                  href="/website-development"
                  text="Website Development"
                />
                </div>
                <div>
                <NavLink
                  onClick={toggleDrawers}
                  href="/blockchain-development"
                  text="Block Chain Development"
                />
                </div>
                <div>
                <NavLink
                  onClick={toggleDrawers}
                  href="/Products-and-trials"
                  text="All Products & Trials"
                />
                </div>
                <div>
                <NavLink
                  onClick={toggleDrawers}
                  href="/IT-Consulting"
                  text="IT Consulting"
                />
                </div>
              </div>
            </li>
            <li>
              <NavLink onClick={toggleDrawers} href="/careers" text="Careers" />
            </li>
            <li>
              <NavLink
                onClick={toggleDrawers}
                href="/Products"
                text="Products"
              />
            </li>
            <li>
              <NavLink
                onClick={toggleDrawers}
                href="/contact-us"
                text="Contact us"
              />
            </li>
          </ul>
        </div>
      </Drawer>
   
      <Modal open={modalOpen} onClose={onCloseModal} center>
        <div className="application_form_container">
          <div className="application_title">
            <h2>Get a Quote</h2>
          </div>
          <div className="application_form_one">
            <div className="application_form_inputs">
              <label>Full Name:</label>
              <input
                value={formData.name}
                onChange={handleChange}
                type="text"
                name="name"
                id=""
              />
            </div>
            <div className="application_form_inputs">
              <label>Email:</label>
              <input
                value={formData.email}
                onChange={handleChange}
                type="email"
                name="email"
                id=""
              />
            </div>

            <div className="form_phone_new">
              <label>Phone No:</label>
              <div className="form_phone_new_input">
              <PhoneInput 
              country={'in'}
              onChange={handleMobileNo}
              value={formData.mobileNo}
              />
              </div>
            </div>

            {/* <div className="application_form_inputs">
              <label>Country Code:</label>
              <select
                value={formData.countryCode}
                onChange={handleChange}
                name="countryCode"
              >
                <option value={null}>-- Select your country code --</option>
                {myCountryCodesArray.map((countryCode, index) => (
                  <option key={index}>{countryCode}</option>
                ))}
              </select>
            </div>
            <div className="application_form_inputs">
              <label>Phone Number:</label>
              <input
                value={formData.mobileNo}
                maxLength={"12"}
                onChange={handleChange}
                type="text"
                name="mobileNo"
                id=""
              />
            </div> */}
            <div className="application_form_inputs">
              <label>Project Type:</label>
              <br />
              <input
                value={formData.projectType}
                onChange={handleChange}
                type="text"
                name="projectType"
              />
            </div>

            <div className="application_form_inputs">
              <label>Budget:</label>
              <select
                value={formData.budget}
                onChange={handleChange}
                type="text"
                name="budget"
              >
                <option value={null}>-- Select a Budget --</option>
                <option>Less than $10,000</option>
                <option>$10,000 to $20,000</option>
                <option>$20,000 to $30,000</option>
                <option>$30,000 +</option>
              </select>
            </div>

            <div className="application_form_inputs">
              <label>Company Name:</label>
              <input
                value={formData.companyName}
                onChange={handleChange}
                type="text"
                name="companyName"
                id=""
              />
            </div>
            <div className="application_form_inputs">
              <label>Maximum Time For Project:</label>
              <input
                value={formData.maxTime}
                onChange={handleChange}
                type="text"
                name="maxTime"
                id=""
              />
            </div>
          </div>
          <div className="application_form_inputs">
            <label className="quote_textarea_label">Your Requirements:</label>
            <br />
            <textarea
              value={formData.requirements}
              onChange={handleChange}
              name="requirements"
              id=""
              cols="20"
              rows="8"
            ></textarea>
          </div>
          <button disabled={loading ? "true" : ""} onClick={handlSubmit}>
            {loading ? "Loading..." : "Submit"}
          </button>
        </div>
      </Modal>
    
    </header>
  );
};
export default WebHeader;
