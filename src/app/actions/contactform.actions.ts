// Path: src/app/actions/contactform.actions.ts
"use server";

import { z } from "zod";
import nodemailer from "nodemailer";
import { render } from "@react-email/render";
import { contactFormSchema } from "@/validation/contactFormSchema";
import ContactEmailTemplate from "@/EmailTemplates/ContactEmailTemplate";

// Create transporter for Zoho Mail
const transporter = nodemailer.createTransport({
  host: "smtp.zoho.in",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.MY_EMAIL,
    pass: process.env.APP_PASSWORD,
  },
});

// Define a type for the server action's response for better type safety
export type ServerActionState = {
  success: boolean;
  message: string;
  errors?: string | null;
};

export async function submitContactForm(
  prevState: ServerActionState,
  formData: FormData
): Promise<ServerActionState> {
  try {
    // Extract and properly convert form data
    const data = {
      name: formData.get("name") as string,
      institutionName: formData.get("institutionName") as string,
      email: formData.get("email") as string,
      mobileNumber: formData.get("mobileNumber") as string,
      message: formData.get("message") as string,
      // FIX: More robust boolean conversion for checkbox
      consent: (() => {
        const consentValue = formData.get("consent");
        return consentValue === "true" || consentValue === "on";
      })(),
    };

    // Validate the data using your Zod schema
    const validatedData = contactFormSchema.parse(data);

    // Await the render function to get the final HTML string
    const emailHtml = await render(
      ContactEmailTemplate({
        name: validatedData.name,
        institutionName: validatedData.institutionName,
        email: validatedData.email,
        mobileNumber: validatedData.mobileNumber,
        message: validatedData.message,
        submittedAt: new Date().toLocaleString(),
      })
    );

    // Send email to admin
    await transporter.sendMail({
      from: `Contact Form <${process.env.MY_EMAIL}>`,
      to: process.env.MY_EMAIL,
      subject: `ERP Request from ${validatedData.name}`,
      html: emailHtml,
      replyTo: validatedData.email,
    });

    return {
      success: true,
      message: "Thank you for reaching out! We will contact you shortly.",
      errors: null,
    };
  } catch (error) {
    console.error("Error submitting contact form:", error);

    if (error instanceof z.ZodError) {
      // Use error.issues to get validation error messages
      const errorMessages = error.issues
        .map((issue) => `${issue.path.join(".")}: ${issue.message}`)
        .join(", ");
      return {
        success: false,
        message: "Validation Error: Please check the form fields.",
        errors: errorMessages,
      };
    }

    // Handle other types of errors (e.g., email sending failure)
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
      errors: (error as Error).message,
    };
  }
}
