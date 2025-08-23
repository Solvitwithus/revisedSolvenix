// pages/api/demo.ts
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from '@/lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { name, email, company, service, message } = req.body;

    if (!name || !email || !company || !service || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const contactRequest = await prisma.demoRequest.create({
      data: { name, email, company, service, message },
    });

    res.status(201).json({ message: "Contact request submitted successfully", contactRequest });
  } catch (error) {
    console.error("Error creating contact request:", error);
    res.status(500).json({ error: "Failed to submit contact request" });
  } finally {
    await prisma.$disconnect();
  }
}
