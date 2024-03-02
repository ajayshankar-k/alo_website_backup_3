import React, { Fragment,useState } from 'react'
import Head from 'next/head'

const TermsCondition = () => {
    const [select , setSelected] = useState(null)

    const toggle = (index) =>{
        if (select===index){
            return setSelected(null)
        }
        setSelected(index)
    }
    const data = [
        {
            title: '1. ACCEPTANCE OF TERMS',
            description: '   By accessing, using, or browsing the services provided by Alo Infotech, including but not limited to mobile app development, website development, blockchain development, IT consulting, and AI services, you agree to comply with and be bound by the following terms and conditions. If you do not agree to these Terms, please refrain from using our services.'
        },
        {
            title: '2. SERVICES',
            description: ' Alo Infotech provides a range of IT solutions, including mobile app development, website development, blockchain development, IT consulting, and AI services. The details of the services offered, along with any applicable trial periods and products, are available on our website.'
        },
        {
            title: '3. PAYMENT TERMS',
            description: 'Payment terms for our services will be outlined in the respective agreements or invoices provided to the client. Failure to adhere to the agreed-upon payment terms may result in the suspension of services.'
        },
        {
            title: '4. INTELLECTUAL PROPERTY',
            description: ' All intellectual property rights related to the services provided by Alo Infotech, including but not limited to software, designs, and content, are owned by the Company. Clients may not reproduce, distribute, or use any intellectual property without explicit written consent from Alo Infotech.'
        },
        {
            title: '5. PRIVACY AND DATA SECURITY',
            description: ' Alo Infotech is committed to protecting your privacy and maintaining the security of your data. Our Privacy Policy outlines the collection, use, and protection of your personal information. By using our services, you agree to the terms outlined in our Privacy Policy.'
        },
        {
            title: '6. DISCLAIMER OF WARRANTIES',
            description: 'While we strive to provide high-quality services, Alo Infotech makes no warranties or representations regarding the accuracy, completeness, or suitability of the information and materials provided. The use of our services is at your own risk.'
        },
        {
            title: '7. LIMITATION OF LIABILITY',
            description: 'Alo Infotech shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our services, even if we have been advised of the possibility of such damages.'
        },
        {
            title: '8. MODIFICATIONS TO TERMS & CONDITIONS',
            description: ' Alo Infotech reserves the right to modify these Terms at any time without prior notice. It is your responsibility to review these Terms regularly. Continued use of our services after any such changes shall constitute your consent to such changes.'
        },
        {
            title: '9. CONTACT INFORMATION',
            description: 'If you have any questions about these Terms, the practices of this site, or your dealings with us, please contact us at contact@alogroups.com'
        },
   
    ]
    return (
        <Fragment>
            <Head>
                <title>Alo Info-Tech - Terms & Condition </title>
                <meta name="theme-color" content="#4CAAED" />
                <meta name = "keywords" content = "Best it services and solutions in Nagercoil, IT company in Nagercoil, Top 10 software companies, custom software solutions, web development company in Nagercoil, mobile app development company in Nagercoil, software testing, AI development Company in Nagercoil, digital marketing company in Nagercoil, software companies near me, IT companies near me, blockchain development, IT staffing, IT solutions provider, software maintenance and support, software consulting near me, ittraining, nagercoil it companies, nagercoil software companies, Aloinfotech, Tech companies, tech companies in nagercoil, digital marketing solutions, top it companies in Nagercoil, Application Development, Software Service, WebDevelopment, Mobile App Development, Software testing,  UI/UX Designing Services, IT Company, Software Company, Digital Marketing Services,"/>
                <meta name="keywords" content ="Info tech solutions, tech solutions, product development services, advance technology"/>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Alo Info-Tech, a stellar software innovator in Nagercoil, excels in bespoke tech solutions. With a rich 3+ years legacy and 64+ successful projects, we redefine excellence in mobile app and website development, IT consulting, and avant-garde AI services. Elevate your tech endeavors with our comprehensive suite of products and trial offering" />
                <link rel="icon" href="/icon.svg" />
                <link rel="manifest" href="/manifest.json" />
                <meta property="instagram:title" content="Alo Infotech - Harmonizing Technology, Empowering Individual" />
                <meta property="instagram:description" content="Alo Info-Tech, a stellar software innovator in Nagercoil, excels in bespoke tech solutions. With a rich 3+ years legacy and 64+ successful projects, we redefine excellence in mobile app and website development, IT consulting, and avant-garde AI services. Elevate your tech endeavors with our comprehensive suite of products and trial offering" />
                <meta property="instagram:image" content="https://www.instagram.com/alo_info_tech/?igsh=ZGNjOWZkYTE3MQ%3D%3D" />
                <meta property="instagram:url" content="https://www.instagram.com/alo_info_tech/?igsh=ZGNjOWZkYTE3MQ%3D%3D" />
                <meta property="facebook:url" content="https://www.facebook.com/profile.php?id=100092521095313" />
            </Head>
            <div className="condition">
            <h1>TERMS & CONDITIONS:</h1>
            <p>
                Welcome to Alo Infotech! We appreciate your interest in our
                comprehensive suite of IT solutions, including mobile app development,
                website development, blockchain development, IT consulting, and
                cutting-edge AI services. By engaging with our services, you agree to
                adhere to the following terms and conditions:
            </p>

            {data.map((items,index)=>(

                <div onClick={()=>toggle(index)} key={index} className='faq_card'>
                    <div  className='faq_title'>
                        <h2 >
                            {items.title}
                        </h2>
                        <span>{select === index ? '-':'+'}</span>
                    </div>
                    <h3 className={select === index ? 'faq_description_show' : 'faq_description'}>
                        {items.description}
                    </h3>
                </div>

            ))}    

               
                <p>
                    By using Alo Infotech services, you acknowledge that you have read,
                    understood, and agreed to these Terms and Conditions.
                </p>
            </div>
        </Fragment>
    )
}

export default TermsCondition