import React,{useEffect,useState,useRef} from "react";
import { Fragment } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Button from "@/components/common/button";
import BaseUrl from "@/pages/api/BaseUrl";
import bullets from '@/styles/assets/170.svg'
import resumeupload from '@/styles/assets/171.svg'
import { toast } from "react-toastify";

const Index = () => {
  const [submitLoad, setSubmitLoad] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNo: "",
    appliedRole:"",
    experience: "",
    address: "",
    resume: null,
  });

  let lastToastTime = 0;
  const debounceToast = (message) => { // debouncing toast
      const now = Date.now();
      if (now - lastToastTime > 2000) { 
          toast.error(message);
          lastToastTime = now;
      }
  }; 

  const handleSubmit = async () => {
    try {
      setSubmitLoad(true);
      const formNamePattern = /[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~0-9]/g;
      if (
        formData.name.trim() !== "" &&
        formNamePattern.test(formData.name) === false
      ) {
        const formEmailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const formEmailPatternTwo = / /g;
        if (
          formEmailPattern.test(formData.email) === true &&
          formEmailPatternTwo.test(formData.email) === false &&
          formData.email.trim() !== ""
        ) {
          const phonePattern = /^\+?[0-9]+$/;
          if (
            phonePattern.test(formData.mobileNo) === true &&
            formData.mobileNo.trim() !== "" &&
            formData.mobileNo.length >= 10
          ) {
            if (formData.appliedRole.trim() !== "") { // Validation for applied role field moved here
              if (formData.experience.trim() !== "") {
                if (formData.address.trim() !== "") {
                  if (formData.resume) {
                    const response = await BaseUrl.post('/career/send', formData);
                    toast.success("Form submitted successfully");
                    // console.log(formData)
                    setFormData({
                      ...formData,
                      name: "",
                      email: "",
                      mobileNo: "",
                      // appliedRole: "",
                      experience: "",
                      address: "",
                      resume: null,
                    });
                    fileInputRef.current.value = "";
                    setFileName('Choose or drag and drop your resume')
                  } else {
                    debounceToast("Upload a PDF file!");
                  }
                } else {
                  debounceToast("Enter your address!");
                }
              } else {
                debounceToast("Enter your experience!");
              }
            } else {
              debounceToast("Enter a role!");
            }
          } else {
            debounceToast("Enter a valid phone number!");
          }
        } else {
          debounceToast("Enter a valid email!");
        }
      } else {
        debounceToast("Enter a valid name!");
      }
      setSubmitLoad(false);
    } catch (error) {
      console.log(error);
      toast.error("Error on submitting form!");
      setSubmitLoad(false);
    }
  };
  

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    let numericValue;
    if (name === "mobileNo") {
        // Replace all non-digit characters except the first '+' symbol
        numericValue = value.replace(/[^+\d]|(?!^)\+/g, "");
    } else {
        numericValue = value;
    }
    setFormData({
        ...formData,
        [name]: numericValue,
    });
  };

  const router = useRouter();
  const { id } = router.query;
  const [fileName, setFileName] = useState('Choose or drag and drop your resume');
  const fileInputRef = useRef(null);

  const handleDragOver = (event) => {
    event.preventDefault(); // Prevent default behavior
  };

  const handleDrop = async(event) => {
    event.preventDefault(); // Prevent default behavior
    try {
      setSubmitLoad(true)
      const file = event.dataTransfer.files[0];
  
      if (file && file.type === 'application/pdf') {
        const fileName = file.name.length > 20 ? file.name.slice(0, 20) + '...' : file.name;
        setFileName(fileName)
        const formDataObject = new FormData();
        formDataObject.append('file', file);
  
        const response = await BaseUrl.post('/file/upload', formDataObject,{
          headers:{
            "Content-Type":"multipart/form-data"
          }
        });
        setFormData({
          ...formData,
          resume: response.data.data.Location,
        })  
      } else {
        setFileName('Choose or drag and drop your resume')
        e.target.value = "";
        setFormData({
          ...formData,
          resume:null,
        })
        toast.error('Invalid file type. Please upload a PDF file.');
      }
      setSubmitLoad(false)
    } catch (error) {
      console.log(error);
      setSubmitLoad(false)
    }
  };

  const handleFileChange = async (e) =>{
    try {
      setSubmitLoad(true)
      const file = e.target.files[0];
  
      if (file && file.type === 'application/pdf') {
        const fileName = file.name.length > 20 ? file.name.slice(0, 20) + '...' : file.name;
        setFileName(fileName)
        const formDataObject = new FormData();
        formDataObject.append('file', file);
  
        const response = await BaseUrl.post('/file/upload', formDataObject,{
          headers:{
            "Content-Type":"multipart/form-data"
          }
        });
        setFormData({
          ...formData,
          resume: response.data.data.Location,
        })  
      } else {
        setFileName('Choose or drag and drop your resume')
        e.target.value = "";
        setFormData({
          ...formData,
          resume:null,
        })
        toast.error('Invalid file type. Please upload a PDF file.');
      }
      setSubmitLoad(false)
    } catch (error) {
      console.log(error);
      setSubmitLoad(false)
    }
    
  }

  const [careerForm,setCareerForm] = useState([])
  

  useEffect(()=>{
    const careerApi = async() =>{
    try{
      const response = await BaseUrl.get('/jobs?type=web')
      const foundJob = response.data.data.jobList.find(job => job._id === id);
      setCareerForm(response.data.data.jobList.find(job=>job._id === id))
      setFormData({...formData,appliedRole:foundJob.jobRole})
      // console.log(foundJob)
      // console.log(formData)
    }catch(error){
      console.log(error)
    }
  }
  careerApi()
  },[id])

  const [finish, setFinish] = useState(false);

  useEffect(() => {
    if (router.query.page === "scroll" || finish){
      const scrollTarget = document.getElementById('applynow_form')
    if (scrollTarget) {
      scrollTarget.scrollIntoView({
        behavior: "smooth",
      });
      setFinish(false)
    }
  }
  }, [router, finish]);

  return (
    <Fragment>
      <Head>
        <title>Alo Info-Tech - Careers </title>
        <meta name="theme-color" content="#4CAAED" />
        <meta
          name="keywords"
          content="Best it services and solutions in Nagercoil, IT company in Nagercoil, Top 10 software companies, custom software solutions, web development company in Nagercoil, mobile app development company in Nagercoil, software testing, AI development Company in Nagercoil, digital marketing company in Nagercoil, software companies near me, IT companies near me, blockchain development, IT staffing, IT solutions provider, software maintenance and support, software consulting near me, ittraining, nagercoil it companies, nagercoil software companies, Aloinfotech, Tech companies, tech companies in nagercoil, digital marketing solutions, top it companies in Nagercoil, Application Development, Software Service, WebDevelopment, Mobile App Development, Software testing,  UI/UX Designing Services, IT Company, Software Company, Digital Marketing Services,"
        />
        <meta
          name="keywords"
          constent="IT jobs in nagercoil, IT jobs near me, IT company job vacancy for freshers, job vacancy nagercoil, IT company vacancy, Software company job vacancy, Job vacancies near me, IT jobs vacancies, IT jobs in tamilnadu, Best carrier opportunities, Best IT jobs, Best software jobs, Software development jobs, IT careers"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Alo Info-Tech, a stellar software innovator in Nagercoil, excels in bespoke tech solutions. With a rich 3+ years legacy and 64+ successful projects, we redefine excellence in mobile app and website development, IT consulting, and avant-garde AI services. Elevate your tech endeavors with our comprehensive suite of products and trial offering"
        />

        <link rel="icon" href="/icon.svg" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          property="instagram:title"
          content="Alo Infotech - Harmonizing Technology, Empowering Individual"
        />
        <meta
          property="instagram:description"
          content="Alo Info-Tech, a stellar software innovator in Nagercoil, excels in bespoke tech solutions. With a rich 3+ years legacy and 64+ successful projects, we redefine excellence in mobile app and website development, IT consulting, and avant-garde AI services. Elevate your tech endeavors with our comprehensive suite of products and trial offering"
        />
        <meta
          property="instagram:image"
          content="https://www.instagram.com/alo_info_tech/?igsh=ZGNjOWZkYTE3MQ%3D%3D"
        />
        <meta
          property="instagram:url"
          content="https://www.instagram.com/alo_info_tech/?igsh=ZGNjOWZkYTE3MQ%3D%3D"
        />
        <meta
          property="facebook:url"
          content="https://www.facebook.com/profile.php?id=100092521095313"
        />
      </Head>

      {/* banner */}
      <div className="applynow_banner">
        <div className="applynow_banner_container">
          <div className="applynow_banner_leftblock">
            <h1>Careers - Job role</h1>
            <h2>{careerForm ? careerForm.jobRole : "Loading..."}</h2>
            <Button onClick={() => setFinish(true)} label="Apply now" />
          </div>
          <div className="applynow_banner_rightblock">
            <div className="applynow_banner_exp">
              <div>
                <p>Experience</p>
                <h3>{careerForm ? careerForm.experience:"Loading..."}</h3>
              </div>
              <div>
                <p>Nature of job</p>
                <h3>{careerForm ? careerForm.jobType:"Loading..."}</h3>
              </div>
            </div>
            <div>
              <p>Job description</p>
              <h3>
              {careerForm && careerForm.jobDescription && careerForm.jobDescription.summary ? careerForm.jobDescription.summary : "Loading..."}
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="career_responsibilites">
        <div className="career_responsibilites_container">
          <h2>Your responsibilities as a {careerForm ? careerForm.jobRole : "Loading..."}</h2>
          <div>
            <ul>
            {careerForm && careerForm.jobDescription && careerForm.jobDescription.responsibilities ?
                careerForm.jobDescription.responsibilities.map((item, index) => (
                  <div key={index} className="career_responsibilities_bullets">
                    <img src={bullets.src} alt={bullets.src} />
                    <li key={index}>{item}</li>
                  </div>
                )) 
                : "Loading..."
              }
            </ul>
          </div>
        </div>
      </div>

      <div className="career_responsibilites">
        <div className="career_requirements_container">
          <h2>Requirements that we expect from you</h2>
          <div>
            <ul>
            {careerForm && careerForm.jobDescription && careerForm.jobDescription.requirements ?
                careerForm.jobDescription.requirements.map((item, index) => (
                  <div key={index} className="career_responsibilities_bullets">
                    <img src={bullets.src} alt={bullets.src} />
                    <li key={index}>{item}</li>
                  </div>
                )) 
                : "Loading..."
              }
            </ul>
          </div>
        </div>
      </div>
      
      <div className="applynow_form_bg"></div>
      <div className="applynow_form" id="applynow_form">
          <div className="applynow_form_container">
            <h2>Apply Now</h2>
            <div className="applynow_Form">
              <input style={{cursor:'none'}} onChange={handleChangeInput} value={formData.name} name="name" placeholder="Full Name"/><br/>
              <input style={{cursor:'none'}} onChange={handleChangeInput} value={formData.email} name="email" placeholder="Email"/><br/>
              <input style={{cursor:'none'}} onChange={handleChangeInput} value={formData.mobileNo} maxLength='15' name="mobileNo" placeholder="Phone Number"/><br/>
              <input style={{color:'grey',cursor:'none'}}  value={`Applying for - ${formData.appliedRole}`} disabled='true' name="appliedRole" placeholder="Applying For"/><br/>
              <input style={{cursor:'none'}} onChange={handleChangeInput} value={formData.experience} name="experience" placeholder="Experience"/><br/>
              <input style={{cursor:'none'}} onChange={handleChangeInput} value={formData.address} name="address" placeholder="Address"/><br/>
              <div className="resume_upload" onDragOver={handleDragOver} onDrop={handleDrop}>
                <label className="resume-input" for="resume-input">
                  <img src={resumeupload.src} alt={resumeupload.src}/>
                  <p>{fileName}</p>
                </label>
                <input ref={fileInputRef} accept=".pdf" onChange={handleFileChange} name="resume" type="file" id="resume-input" /><br/>
              </div>
              <button disabled={submitLoad === true ?'true':''} onClick={handleSubmit}>{submitLoad?'Loading...':'Apply'}</button>
            </div>
          </div>
      </div>


    </Fragment>
  );
};

export default Index;
