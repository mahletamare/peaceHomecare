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
            max-width: 600px; /* Keeps original laptop size */
            text-align: left;
            line-height: 1.8;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
            width: 100%; /* Ensures responsiveness */
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

          /* Responsive Design */
          @media (max-width: 768px) {
            .services-box {
              max-width: 90%; /* Adjusts width for smaller screens */
              padding: 20px;
            }
          }

          @media (max-width: 480px) {
            .services-box {
              max-width: 95%; /* Even smaller for very small screens */
              padding: 15px;
            }
          }

          .services-section {
            background-size: cover;
            background-position: center;
            min-height: 100vh; /* Prevents content cutoff */
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 20px;
            color: #333;
            width: 100%;
            overflow: hidden; /* Prevents content from going out of bounds */
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
  minHeight: "100vh", // Ensures full height without cutting content
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
  color: "#333",
  width: "100%",
  overflow: "hidden", // Prevents image and content from overflowing
};

export default Services;