// app/api/demo/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { name, email, company, service, message } = await req.json();

    if (!name || !email || !company || !service || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const contactRequest = await prisma.demoRequest.create({
      data: { name, email, company, service, message },
    });

    return NextResponse.json(
      { message: "Contact request submitted successfully", contactRequest },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating contact request:", error);
    return NextResponse.json({ error: "Failed to submit contact request" }, { status: 500 });
  }
}
