import React from "react";
import businessImage from "./Photo.jpg";

function Services() {
  return (
    <section className="content services-section" style={sectionStyles}>
      <div className="services-box">
        <h2>Our Services</h2>
        <ul>
          <li>
            <strong>Companionship Care:</strong> Our caregivers provide companionship and emotional support, helping to reduce feelings of loneliness and isolation. Whether it’s engaging in conversation, playing games, or accompanying clients on walks, we ensure that every individual feels valued and connected.
          </li>
          <li>
            <strong>Personal Care:</strong> We assist with daily living activities such as bathing, dressing, grooming, and toileting. Our caregivers are trained to provide personal care with dignity and respect, helping clients maintain their independence while ensuring their comfort and safety.
          </li>
          <li>
            <strong>Medication Management:</strong> Our team can help manage medication schedules, ensuring that clients take their medications as prescribed. We provide medication reminders and assistance with refills to promote adherence to treatment plans.
          </li>
          <li>
            <strong>Mobility Assistance:</strong> We provide support with mobility and transfer, helping clients move safely around their home. Whether it’s getting in and out of bed, using the bathroom, or navigating stairs, our caregivers are trained to assist with mobility challenges.
          </li>
        </ul>
      </div>

      <style>
        {`
         .services-box {
      background-color: rgba(255, 255, 255, 0.9);
      padding: 25px;
      border-radius: 12px;
      max-width: 600px;
      width: 90%; /* Adjusts width dynamically */
      text-align: left;
      line-height: 1.8;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    }

    .services-box h2 {
      text-align: center;
      margin-bottom: 15px;
      color: #333;
    }

    .services-box ul {
      list-style-type: none;
      padding: 0;
    }

    .services-box li {
      margin-bottom: 15px;
    }

    /* Responsive Adjustments */
    @media (max-width: 768px) {
      .services-box {
        max-width: 95%; /* Slightly wider for tablets */
        padding: 20px;
      }
    }

    @media (max-width: 480px) {
      .services-box {
        max-width: 100%; /* Full width for small screens */
        padding: 15px;
      }
    }
        `}
      </style>
    </section>
  );
}

const sectionStyles = {
  backgroundImage: `url(${businessImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "100vh", // Ensures full height
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
  color: "#333",
  //width: "100%", // Prevents overflow
};


export default Services;