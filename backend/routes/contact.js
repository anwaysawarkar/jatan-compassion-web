import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

router.post('/send-message', async (req, res) => {
  const { name, email, message, type = 'message' } = req.body;

  // Validate input
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'All fields are required.' });
  }

  // Create transporter
  const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE || 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Determine subject based on form type
  const subject = type === 'volunteer'
      ? `New Volunteer Request from ${name}`
      : `New Contact Message from ${name}`;

  // Email content based on type
  let htmlContent = '';

  if (type === 'volunteer') {
    htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
        <h2 style="color: #ff6600; border-bottom: 2px solid #ff6600; padding-bottom: 10px;">New Volunteer Application</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message/Motivation:</strong></p>
        <p style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #ff6600;">${message}</p>
        <p style="margin-top: 20px; font-size: 12px; color: #666;">This is an automated message from your website contact form.</p>
      </div>
    `;
  } else {
    htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
        <h2 style="color: #ff6600; border-bottom: 2px solid #ff6600; padding-bottom: 10px;">New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #ff6600;">${message}</p>
        <p style="margin-top: 20px; font-size: 12px; color: #666;">This is an automated message from your website contact form.</p>
      </div>
    `;
  }

  // Email options
  const mailOptions = {
    to: process.env.EMAIL_USER,
    subject: subject,
    replyTo: email,
    html: htmlContent
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({
      success: true,
      message: type === 'volunteer'
          ? 'Thank you for your interest in volunteering! We will contact you soon.'
          : 'Your message has been sent successfully!'

    });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send message. Please try again later.' });
  }
});

export default router;