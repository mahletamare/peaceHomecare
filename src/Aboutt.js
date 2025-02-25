import React from "react";

function About() {
  return (
    <section className="content">
      <div className="about-container">
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
          .about-container {
            text-align: left;
            margin: 40px auto;
            padding: 25px;
            max-width: 700px;
            line-height: 1.8;
            background-color: rgba(255, 255, 255, 0.95);
            border-radius: 10px;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
          }

          .about-container h2 {
            text-align: center;
            margin-bottom: 20px;
            color: #333;
          }

          .about-container p {
            margin-bottom: 15px;
            color: #555;
          }
        `}
      </style>
    </section>
  );
}

export default About;