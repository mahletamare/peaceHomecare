import React from "react";
import { useNavigate } from "react-router-dom"; 
import loggo from "./Loggo.jpg";

function Home() {
  const navigate = useNavigate(); 

  return (
    <section className="hero">
      <div className="hero-content">
       
        <img src={loggo} alt="Peace & Comfort Homecare Logo" className="logo" />

        <h1>Welcome to Peace & Comfort Homecare</h1>
        <p>
          At Peace & Comfort Homecare, we believe that everyone deserves to live with dignity and comfort in the place they call home.  
          Our dedicated caregivers provide compassionate and high-quality home care services tailored to the unique needs of each individual.
        </p>
        <p>
          We offer a range of services, including companionship, personal care, medication management, and mobility assistance.  
          Whether you or a loved one needs short-term support or long-term care, our personalized care plans prioritize safety, well-being, and independence.
        </p>
        
        
        <button className="cta-button" onClick={() => navigate("/aboutt")}>
          Learn More
        </button>
      </div>

      <style>
        {`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          .hero {
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            min-height: calc(100vh - 120px); /* Leaves space for header & footer */
            width: 100vw;
            background: linear-gradient(to right, #f9f9f9, #eef2f3);
            padding: 60px 20px;
          }

          .hero-content {
            width: 80%;
            max-width: 1000px;
            padding: 50px;
            background: white;
            border-radius: 12px;
            box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
          }

          .logo {
            width: 150px;
            height: auto;
            margin-bottom: 20px;
          }

          .hero h1 {
            font-size: 2.5rem;
            color: #2c3e50;
            margin-bottom: 20px;
          }

          .hero p {
            font-size: 1.2rem;
            line-height: 1.8;
            color: #555;
            margin-bottom: 20px;
          }

          .cta-button {
            display: inline-block;
            padding: 12px 24px;
            font-size: 18px;
            font-weight: bold;
            color: white;
            background: #0073e6;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            transition: background 0.3s ease-in-out;
          }

          .cta-button:hover {
            background: #005bb5;
          }

          @media (max-width: 768px) {
            .hero-content {
              width: 90%;
              padding: 40px;
            }

            .hero h1 {
              font-size: 2rem;
            }

            .hero p {
              font-size: 1.1rem;
            }

            .cta-button {
              font-size: 16px;
              padding: 10px 20px;
            }
          }
        `}
      </style>
    </section>
  );
}

export default Home;