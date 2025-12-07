import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  preferredDate: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input
    const validationResult = contactSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: validationResult.error.errors[0].message,
        },
        { status: 400 }
      );
    }

    const { name, email, phone, message, preferredDate } = validationResult.data;

    // Log the submission (in production, you would save to database)
    console.log("Contact form submission:", {
      name,
      email,
      phone,
      message,
      preferredDate,
      timestamp: new Date().toISOString(),
    });

    // =====================================================
    // EMAIL SENDING PLACEHOLDER
    // =====================================================
    // In production, uncomment and configure one of the following:
    //
    // Option 1: Using Nodemailer with SMTP
    // -----------------------------------------
    // import nodemailer from 'nodemailer';
    //
    // const transporter = nodemailer.createTransport({
    //   host: process.env.SMTP_HOST,
    //   port: parseInt(process.env.SMTP_PORT || '587'),
    //   secure: false,
    //   auth: {
    //     user: process.env.SMTP_USER,
    //     pass: process.env.SMTP_PASSWORD,
    //   },
    // });
    //
    // await transporter.sendMail({
    //   from: process.env.SMTP_FROM_EMAIL,
    //   to: 'appointments@asilhospital.com',
    //   subject: `New Appointment Request from ${name}`,
    //   html: `
    //     <h2>New Appointment Request</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Phone:</strong> ${phone}</p>
    //     <p><strong>Preferred Date:</strong> ${preferredDate || 'Not specified'}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${message}</p>
    //   `,
    // });
    //
    // Option 2: Using Resend
    // -----------------------------------------
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    //
    // await resend.emails.send({
    //   from: 'noreply@asilhospital.com',
    //   to: 'appointments@asilhospital.com',
    //   subject: `New Appointment Request from ${name}`,
    //   html: `...`,
    // });
    //
    // =====================================================

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: "Thank you for contacting us. We will get back to you soon!",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred. Please try again later.",
      },
      { status: 500 }
    );
  }
}
