import React, { Fragment } from "react";
import Blog2img1 from "@/styles/assets/71.svg";
import Blog2img2 from "@/styles/assets/65.svg";
import Blog2img3 from "@/styles/assets/66.svg";
import Blog2img4 from "@/styles/assets/67.svg";
import Blog2img5 from "@/styles/assets/68.svg";
import Blog2img6 from "@/styles/assets/69.svg";
import Blog2img7 from "@/styles/assets/70.svg";
import Star from "@/styles/assets/58.svg";

const BlogTwo = () => {
  return (
    <Fragment>

    <div className="blog1_reponsive_page">
      <div className="blog1_potential_impact">
        <div className="blog1_potential_impact_container">
          <div className="blog1_potential_impact_rightblock">
            <h2>Seamless Ordering with QR Code Technology:</h2>
            <div className="potential_impact_points">
              <img src={Star.src} alt={Star.src} />
              <p>
              Alo Invoice seamlessly integrates with the dining experience through QR code technology.
              </p>
            </div>
            <div className="potential_impact_points">
              <img src={Star.src} alt={Star.src} />
              <p>
              Alo Info-Tech envisions a future where these capabilities empower developers to create immersive experiences, seamlessly integrating emerging technologies.
              </p>
            </div>
            <div className="potential_impact_points">
              <img src={Star.src} alt={Star.src} />
              <p>
              Eliminating the need for physical menus, Alo Invoice provides a contactless and efficient way for customers to explore diverse menu offerings.
              </p>
            </div>
          </div>
          <div className="blog1_potential_impact_leftblock">
            <img src={Blog2img2.src} alt={Blog2img2.src} />
          </div>
        </div>
      </div>

      <div className="blog1_app_development">
        <div className="blog1_potential_impact_container">
          <div className="blog1_potential_impact_rightblock">
            <h2>Customized Orders for Personalized Dining:</h2>
            <div className="potential_impact_points">
              <img src={Star.src} alt={Star.src} />
              <p>
              Alo Invoice empowers customers to customize their orders, fostering a personalized dining experience.
              </p>
            </div>
            <div className="potential_impact_points">
              <img src={Star.src} alt={Star.src} />
              <p>
              Patrons can browse the menu, make modifications based on their preferences, and submit orders directly through the app.
              </p>
            </div>
            <div className="potential_impact_points">
              <img src={Star.src} alt={Star.src} />
              <p>
              This customization feature not only boosts customer satisfaction but also streamlines the ordering process, reducing wait times and enhancing overall operational efficiency.
              </p>
            </div>
          </div>
          <div className="blog1_potential_impact_leftblock">
            <img src={Blog2img3.src} alt={Blog2img3.src} />
          </div>
        </div>
      </div>

      <div className="blog1_challenges">
        <div className="blog1_potential_impact_container">
          <div className="blog1_potential_impact_rightblock">
            <h2>Streamlined Communication for Waitstaff:</h2>
            <div className="potential_impact_points">
              <img src={Star.src} alt={Star.src} />
              <p>
              Alo Invoice extends its functionality to the waitstaff, providing them with a dedicated app to view incoming orders promptly.
              </p>
            </div>
            <div className="potential_impact_points">
              <img src={Star.src} alt={Star.src} />
              <p>
              Once an order is placed, it is instantly relayed to the waiter&apos;s device, ensuring swift and accurate communication between customers and staff. This seamless integration enhances coordination and minimizes errors, contributing to a smoother workflow.
              </p>
            </div>
          </div>
          <div className="blog1_potential_impact_leftblock">
            <img src={Blog2img4.src} alt={Blog2img4.src} />
          </div>
        </div>
      </div>

      <div className="blog1_solutions">
        <div className="blog1_potential_impact_container">
          <div className="blog1_potential_impact_rightblock">
            <h2>Efficient Order Assignment:</h2>
            <div className="potential_impact_points">
              <img src={Star.src} alt={Star.src} />
              <p>
              To further optimize restaurant operations, Alo Invoice allows waiters to assign orders seamlessly to their colleagues.
              </p>
            </div>
            <div className="potential_impact_points">
              <img src={Star.src} alt={Star.src} />
              <p>
              This ensures that each order is managed efficiently, reducing the burden on individual waitstaff members and enhancing the overall dining experience for customers.
              </p>
            </div>
          </div>
          <div className="blog1_potential_impact_leftblock">
            <img src={Blog2img5.src} alt={Blog2img5.src} />
          </div>
        </div>
      </div>

      <div className="blog1_impact">
        <div className="blog1_potential_impact_container">
          <div className="blog1_potential_impact_rightblock">
            <h2>Instant Digital Invoices for a Hassle-Free Checkout:</h2>
            <div className="potential_impact_points">
              <img src={Star.src} alt={Star.src} />
              <p>
              Say goodbye to the hassle of waiting for a physical bill. Alo Invoice ensures a prompt and efficient checkout process by instantly sharing the digital invoice to the customer&apos;s email address.
              </p>
            </div>
            <div className="potential_impact_points">
              <img src={Star.src} alt={Star.src} />
              <p>
              This not only saves time but also reduces the rush during peak hours, contributing to a more relaxed and enjoyable dining environment.
              </p>
            </div>
          </div>
          <div className="blog1_potential_impact_leftblock">
            <img src={Blog2img6.src} alt={Blog2img6.src} />
          </div>
        </div>
      </div>

      <div className="blog1_realworld">
        <div className="blog1_potential_impact_container">
          <div className="blog1_potential_impact_rightblock">
            <h2>Transforming Dining Experiences:</h2>
            <div className="potential_impact_points">
              <img src={Star.src} alt={Star.src} />
              <p>
              Alo Invoice, as a flagship product of Alo Infotech, stands as a testament to our commitment to innovation and simplicity. By leveraging technology to enhance the dining experience, we aim to create a win-win situation for both patrons and restaurants. Embrace the future of dining with Alo Invoice and discover a new level of convenience, efficiency, and satisfaction.
              </p>
            </div>
            <div className="potential_impact_points">
              <img src={Star.src} alt={Star.src} />
              <p>
              In a world where time is of the essence, Alo Infotech&apos;s Alo Invoice is the key to reducing rush and making dining as simple as it should be. Elevate your restaurant experience today!
              </p>
            </div>
          </div>
          <div className="blog1_potential_impact_leftblock">
            <img src={Blog2img7.src} alt={Blog2img7.src} />
          </div>
        </div>
      </div>
    </div>
    </Fragment>
  );
};

export default BlogTwo;
