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
            padding: 5%;
            border-radius: 12px;
            max-width: 90%; /* Make it responsive */
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

          /* Responsive Design */
          @media (max-width: 768px) {
            .services-box {
              max-width: 100%; /* Full width on smaller screens */
              padding: 8%;
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
            padding: 5%;
            color: #333;
            width: 100%;
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
  minHeight: "100vh", // Changed from height to minHeight for better responsiveness
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "5%",
  color: "#333",
  width: "100%", // Ensures full width
};

export default Services;