// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Extract data from the request body
      const { name, email, subject, message } = req.body;
      console.log(name, email, subject, message);
      res.status(200).json({
        message: 'Email sent successfully',
        details: {
          name,
          email,
          subject,
          message,
        },
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}