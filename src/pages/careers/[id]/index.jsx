import React,{useEffect,useState} from "react";
import { Fragment } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Button from "@/components/common/button";
import BaseUrl from "@/pages/api/BaseUrl";
import bullets from '@/styles/assets/170.svg'

const Index = () => {
  const router = useRouter();
  const { id } = router.query;

  const [careerForm,setCareerForm] = useState([])
  const handleClick = () =>{
    console.log(careerForm.jobDescription.summary)
  }

  useEffect(()=>{
    const careerApi = async() =>{
    try{
      const response = await BaseUrl.get('/jobs?type=web')
      // console.log(response.data.data.jobList.find(job=>job._id === id))
      setCareerForm(response.data.data.jobList.find(job=>job._id === id))
    }catch(error){
      console.log(error)
    }
  }
  careerApi()
  },[id])

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
            <Button onClick={handleClick} label="Apply now" />
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
      
      <div className="applynow_form">
          <div className="applynow_form_container">
            <h2>Apply Now</h2>
            <div className="applynow_Form">
              <input placeholder="Full Name"/><br/>
              <input placeholder="Email"/><br/>
              <input placeholder="Phone Number"/><br/>
              <input placeholder="Applying For"/><br/>
              <input placeholder="Experience"/><br/>
              <input placeholder="Address"/><br/>
              <input type="file" /><br/>
              <Button label='Apply'/>
            </div>
          </div>
      </div>


    </Fragment>
  );
};

export default Index;
