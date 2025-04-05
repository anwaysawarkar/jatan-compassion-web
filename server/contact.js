// In server/contact.js
const express = require('express')
const router = express.Router()

router.post('/contact', (req, res) => {
  const { name, email, subject, message } = req.body

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ success: false, message: 'All fields are required' })
  }

  console.log('📩 New Contact Message Received:')
  console.log({ name, email, subject, message })

  // Here, you can add logic to:
  // - store it in DB
  // - send email with nodemailer

  return res.status(200).json({ success: true, message: 'Message received!' })
})

module.exports = router
