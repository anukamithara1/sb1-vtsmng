import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Process the form data here
    const { name, email, message } = req.body;

    // Here you would typically send an email or save to a database
    console.log('Form submission:', { name, email, message });

    // Send a response
    res.status(200).json({ message: 'Form submitted successfully' });
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}