const nodemailer = require('nodemailer');
require('dotenv').config({ path: '.env.local' });

async function testEmail() {
  console.log('🧪 Testing email configuration...\n');

  console.log('Configuration:');
  console.log('- SMTP Host:', process.env.SMTP_HOST);
  console.log('- SMTP Port:', process.env.SMTP_PORT);
  console.log('- SMTP User:', process.env.SMTP_USER);
  console.log('- Password length:', process.env.SMTP_PASSWORD?.length || 0);
  console.log('');

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
    debug: true,
  });

  try {
    console.log('🔍 Verifying SMTP connection...');
    await transporter.verify();
    console.log('✅ SMTP connection verified!\n');

    console.log('📤 Sending test email...');
    const info = await transporter.sendMail({
      from: `"Edigitify Test" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECIPIENT || 'info@edigitify.in',
      subject: 'Test Email - Contact Form Setup',
      text: 'This is a test email to verify the contact form backend is working correctly.',
      html: '<p>This is a test email to verify the contact form backend is working correctly.</p>',
    });

    console.log('✅ Email sent successfully!');
    console.log('Message ID:', info.messageId);
    console.log('Response:', info.response);

  } catch (error) {
    console.error('❌ Error:', error.message);
    if (error.code) {
      console.error('Error code:', error.code);
    }
    if (error.command) {
      console.error('Failed command:', error.command);
    }
  }
}

testEmail();
