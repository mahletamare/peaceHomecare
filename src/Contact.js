import React from "react";

function Contact() {
  return (
    <div className="contact-container">
      <style>
        {`
          .contact-container {
            max-width: 600px;
            margin: 50px auto;
            padding: 30px;
            border-radius: 10px;
            background-color: #f9f9f9;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            text-align: center;
          }

          .contact-box {
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            border: 1px solid #ddd;
            margin-bottom: 20px;
          }

          .contact-box h2 {
            margin-bottom: 10px;
            color: #333;
          }

          .contact-form {
            display: flex;
            flex-direction: column;
            gap: 15px;
          }

          .form-group {
            text-align: left;
          }

          label {
            font-weight: bold;
            display: block;
            margin-bottom: 5px;
          }

          input, textarea {
            width: 100%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: 16px;
          }

          .submit-button {
            padding: 12px;
            border: none;
            border-radius: 5px;
            background-color: #4CAF50;
            color: white;
            font-size: 16px;
            cursor: pointer;
            transition: background 0.3s ease-in-out;
          }

          .submit-button:hover {
            background-color: #45a049;
          }
        `}
      </style>

      <div className="contact-box">
        <h2>Contact Us</h2>
        <p><strong>Email:</strong> bezadereseh@gmail.com</p>
        <p><strong>Phone:</strong> +1 (617)-899-0930</p>
        <p><strong>Address:</strong> 429 broadway Everett MA 02149 Unit 1</p>
      </div>

      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>
        </div>

        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;