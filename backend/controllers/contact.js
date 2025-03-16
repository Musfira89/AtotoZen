import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const sendEmail = async (req, res) => {
  const { email, name, phone, company, employees } = req.body;

  if (!email || !name || !phone || !company || !employees) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, //
      },
    });

    let mailOptions = {
      from: process.env.EMAIL_USER,
      to: "musfiraansari05@gmail.com",
      subject: "New Chat Schedule Request",
      text: `You have a new chat schedule request from:
      - Name: ${name}
      - Email: ${email}
      - Phone: ${phone}
      - Company: ${company}
      - Number of Employees: ${employees}
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email sending error:", error);
    res.status(500).json({ message: "Failed to send email" });
  }
};
