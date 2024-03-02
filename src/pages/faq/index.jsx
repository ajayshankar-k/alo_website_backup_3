import React, { Fragment,useState } from 'react';
import Head from 'next/head';



const Faq = () => {
    const [select , setSelected] = useState(null)

    const toggle = (index) =>{
        if (select===index){
            return setSelected(null)
        }
        setSelected(index)
    }
    const data = [
        {
            title: '1. What is Alo Infotech?',
            description: ' Alo Infotech is a dynamic software company specializing in mobile app development, website development, blockchain development, IT consulting, and AI services. We also offer meticulously crafted digital products.'
        },
        {
            title: '2. How can mobile app development from Alo Infotech benefit my business?',
            description: ' Our mobile app development delivers top-tier services, providing unparalleled digital experiences to enhance user engagement.'
        },
        {
            title: '3. What makes website development at Alo Infotech stand out?',
            description: 'We offer superlative website development services, epitomizing digital sophistication and precision to elevate your online presence.'
        },
        {
            title: '4. How does Alo Infotech contribute to technological advancement through blockchain development?',
            description: 'Alo Infotech provides premier blockchain development solutions for unparalleled technological advancement, utilizing cutting-edge technology.'
        },
        {
            title: '5. What are the key features of IT consulting at Alo Infotech?',
            description: 'Our elite IT consulting services act as your business compass, guiding you strategically toward optimization and efficient technology utilization.'
        },
        {
            title: '6. What do All Products & Trials at Alo Infotech include?',
            description: 'Discover crafted digital products, experience exclusive trials, and witness transformative solutions firsthand to meet your digital needs.'
        },
        {
            title: '7. How can businesses benefit from AI services at Alo Infotech?',
            description: 'We deliver state-of-the-art AI services, advancing businesses with unparalleled cognitive solutions for growth and efficiency.'
        },
        {
            title: '8. Tell me about the Alo Invoice. What does it offer?',
            description: 'Alo Invoice ensures swift invoicing, making your ordering process seamless and allowing you to savor every moment without waiting.'
        },
        {
            title: '9. What services does FastX provide, and how does it work?',
            description: 'FastX ensures everything reaches your doorstep, from delicious meals to daily essentials and urgent documents, with just a tap on our delivery app.'
        },
        {
            title: '10. How does Alo Foodie personalize my dining experience?',
            description: '    Alo Foodie gets to know your taste buds, curating a personalized menu with dishes you ll love. Simply tap, order, eat, and repeat!'
        },
        {
            title: '11. Can I customize the products offered by Alo Infotech to suit my specific needs?',
            description: ' Yes, we offer customization options to ensure our products align perfectly with your unique requirement'
        },
        {
            title: '12. Is there a trial period for your products, and how can I experience them?',
            description: 'Yes, we offer exclusive trials for our products. Contact us through the Contact Us page to explore these transformative solutions firsthand.'
        },
        {
            title: '13. How secure are the solutions provided by Alo Infotech?',
            description: ' We prioritize security, implementing robust measures to protect your data and applications, and adhering to industry standards.'
        },
        {
            title: '14. Is Alo Infotech open to collaborations and partnerships?',
            description: '  Yes, we welcome collaborations and partnerships. We are committed to staying at the forefront of technology. Our team undergoes regular training and actively engages in continuous learning to ensure expertise in the latest trends and innovations.each out to us through the Contact Us page, and lets explore potential opportunities together.'
        },
        {
            title: '15. How does Alo Infotech stay updated with the latest technology',
            description: 'We are committed to staying at the forefront of technology. Our team undergoes regular training and actively engages in continuous learning to ensure expertise in the latest trends and innovations.'
        },
    ]
   
    return (
        <Fragment>
            <Head>
                <title>Alo Info-Tech - Faq </title>
                <meta name="theme-color" content="#4CAAED" />
                <meta name = "keywords" content = "Best it services and solutions in Nagercoil, IT company in Nagercoil, Top 10 software companies, custom software solutions, web development company in Nagercoil, mobile app development company in Nagercoil, software testing, AI development Company in Nagercoil, digital marketing company in Nagercoil, software companies near me, IT companies near me, blockchain development, IT staffing, IT solutions provider, software maintenance and support, software consulting near me, ittraining, nagercoil it companies, nagercoil software companies, Aloinfotech, Tech companies, tech companies in nagercoil, digital marketing solutions, top it companies in Nagercoil, Application Development, Software Service, WebDevelopment, Mobile App Development, Software testing,  UI/UX Designing Services, IT Company, Software Company, Digital Marketing Services,"/>
                <meta name="keywords" content= "Frequently asked questions, IT consulting business, tech solutions, Technology solutions for business, Latest technology trends, current technology trends, mobile app development" />
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
    
                <h1>FAQ:</h1>

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
            </div>
        </Fragment>
    )
}

export default Faq