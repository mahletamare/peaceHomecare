import React from "react";

function About() {
  return (
    <section className="content about-section" style={sectionStyles}>
      <div className="about-box">
        <h2>About Us</h2>
        <p>
          At Peace & Comfort Homecare, we are dedicated to providing compassionate and professional home care services tailored to meet the unique needs of our clients.
        </p>
        <p>
          Our mission is to enhance the quality of life for individuals who require assistance with daily activities while maintaining their independence in the comfort of their own homes.
        </p>
        <p>
          With a team of highly trained and compassionate caregivers, we offer personalized care solutions, including companionship, personal care, medication reminders, meal preparation, and mobility assistance.
        </p>
        <p>
          We understand that every individual has different needs, which is why we work closely with families to develop customized care plans that ensure comfort, safety, and well-being.
        </p>
        <p>
          Our commitment to excellence and dignity drives us to deliver top-tier home care services that families can trust. Whether you or your loved one needs short-term support or long-term care, Always Homecare is here to provide reliable and professional assistance, helping you live life to the fullest.
        </p>
      </div>

      <style>
        {`
          .about-box {
            background-color: rgba(255, 255, 255, 0.9);
            padding: 30px;
            border-radius: 12px;
            max-width: 800px;
            width: 90%;
            text-align: left;
            line-height: 1.8;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
          }

          .about-box h2 {
            text-align: center;
            margin-bottom: 15px;
            color: #333;
          }

          .about-box p {
            margin-bottom: 10px;
            color: #555;
          }

          /* Responsive Adjustments */
          @media (max-width: 768px) {
            .about-box {
              max-width: 95%;
              padding: 25px;
            }
          }

          @media (max-width: 480px) {
            .about-box {
              max-width: 100%;
              padding: 20px;
            }
          }
        `}
      </style>
    </section>
  );
}

const sectionStyles = {
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "100vh", // Ensures full height
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
  color: "#333",
};

export default About;
