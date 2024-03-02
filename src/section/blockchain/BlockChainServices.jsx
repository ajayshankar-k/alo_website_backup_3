import React, { useState } from "react";
import arrow from "@/styles/assets/113.svg";

const BlockChainServices = () => {
  const [service, setService] = useState(1);

  const serviceName = [
    { id: 1, service: "Blockchain development consulting" },
    { id: 2, service: "dApps Development" },
    { id: 3, service: "Custom Blockchain Development" },
    { id: 4, service: "Smart Contracts Development" },
    { id: 5, service: "Blockchain Dedicated Team" },
  ];
  const serviceDes = [
    {
      id: 1,
      service:
        "Our dedicated team of seasoned blockchain experts conducts a thorough examination of your current business operations, ensuring a meticulous assessment process. From this analysis, we pinpoint bespoke requirements tailored to seamlessly integrate blockchain solutions into your workflow. Leveraging our extensive expertise, we devise custom strategies precisely aligned with your unique needs, guaranteeing peak functionality and efficiency. Our holistic approach transcends mere implementation, prioritizing the delivery of tangible value to your organization. Through strategic collaboration and consultation, we elucidate the potential impact of blockchain applications on your company's growth trajectory. Our primary objective is to empower you with actionable insights, facilitating informed decision-making and unlocking the transformative power of blockchain technology within your business ecosystem. Join forces with us to fully harness the boundless potential of blockchain innovation and drive enduring success in today's ever-evolving marketplace.",
    },
    { id: 2, service: "Our comprehensive blockchain development services cover the entire spectrum, from strategic planning to flawless execution and deployment. Leveraging the expertise of our seasoned blockchain specialists, we craft cutting-edge decentralized applications (dApps) tailored to your enterprise needs. With a keen focus on efficiency and innovation, our dApps solutions streamline processes, slashing time-to-market and boosting ROI for our clients. Whether you're venturing into the world of blockchain for the first time or seeking to enhance your existing ecosystem, our team ensures seamless integration and optimization of decentralized technologies. Trust us to harness the power of blockchain, revolutionizing your business operations and paving the way for unparalleled success in today's dynamic market landscape." },
    { id: 3, service: "Seeking a trusted partner for bespoke blockchain solutions? Our seasoned blockchain development firm specializes in crafting tailored blockchain applications to suit your unique needs, whether they're private, public, or permission. With a rich history of pioneering advancements in blockchain technology, we excel in crafting a diverse range of projects, including cryptocurrencies, NFTs, crypto coin exchanges, cryptocurrency wallets, and various web and mobile applications leveraging blockchain capabilities. Equipped with a proficient team of blockchain developers, we offer flexible engagement models to seamlessly integrate with your existing development efforts or spearhead projects independently, ensuring comprehensive support from inception to deployment. Elevate your blockchain journey with our expertise and unlock the full potential of decentralized solutions." },
    { id: 4, service: "In search of incorruptible contracts and agreements, securely stored on the blockchain via Ethereum or EOS? Smart contracts offer the unique advantage of automatically executing terms and conditions upon invocation. Their validity is ensured by the consensus of the entire blockchain network, rendering them impervious to tampering. Alo Infotech offers comprehensive assistance in the realm of digital smart contract architecture, encompassing design, development, optimization, and seamless integration with decentralized applications. Empower your business with foolproof contractual solutions, fortified by the immutability and transparency of blockchain technology. Let us guide you through the intricacies of smart contract implementation, ensuring robust and reliable execution every step of the way." },
    { id: 5, service: "Seeking a dedicated blockchain team composed of diligent and skilled developers? Look no further. Our adept team specializes in a spectrum of blockchain services, spanning from bitcoin app development to crypto wallet deployment, and encompassing Ethereum and stellar development. Whether you're a blockchain development agency seeking complete project outsourcing or aiming to enhance your current IT team, we offer customizable blockchain development solutions to suit your requirements seamlessly. Our developers are versatile, capable of collaborating both on-site and remotely. Entrust your blockchain endeavors to our proficient team for unparalleled expertise and tailored support. With us, your blockchain projects are in capable hands." },
   
  ];
  return (
    <div className="blockchain_services">
      <div className="blockchain_services_container">
        <div>
          <h2>Our Blockchain development services</h2>
          <p>
            Our team of blockchain consultants is adept at grasping the unique
            requirements of your project, aiding you in selecting the optimal
            blockchain protocol tailored to your business objectives. Over 25
            startups and enterprises have thrived under our guidance, utilizing
            our training workshops, prototype design services, and blockchain
            proof of concepts to achieve success.
          </p>
        </div>
        <div className="blockchain_services_name">
          <div className="blockchain_service_leftblock">
            {serviceName.map((items) => (
              <h3
                className={
                  service === items.id  
                    ? "blockchain_services_active"
                    : "services_heading"
                }
                onClick={() => setService(items.id)}
                key={items.id}
              >
                {items.service}
              </h3>
            ))}
          </div>
          <div className="blockchain_service_rightblock">
            {serviceDes.map((items) =>
              service === items.id ? <p key={items.id}>{items.service}</p> : ""
            )}
          </div>
        </div>

        <div className="blockchain_services_responsive">
          {serviceName.map((items) => (
            <div key={items.id}>
              <div className="blockchain_dropdown">
                <h3
                  className={
                    service === items.id
                      ? "blockchain_services_active"
                      : "services_heading"
                  }
                  onClick={() => setService(items.id)}
                  key={items.id}
                >
                  {items.service}
                </h3>
                {service !== items.id ? (
                  <img src={arrow.src} alt={arrow.src} />
                ) : (
                  ""
                )}
              </div>
              {service === items.id ? (
                <div>
                  {serviceDes.map((items) =>
                    service === items.id ? (
                      <p key={items.id}>{items.service}</p>
                    ) : (
                      ""
                    )
                  )}{" "}
                </div>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlockChainServices;
