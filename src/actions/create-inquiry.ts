"use server";
import * as nodemailer from "nodemailer";
import { revalidatePath } from "next/cache";
import { z } from "zod";

type ContactFormState = {
  errors?: {
    name?: string[];
    phoneOrEmail?: string[];
    inquiry?: string[];
  };
  message?: string | null;
};

const ContactMessageSchema = z.object({
  id: z.string(),
  name: z.string(),
  phoneOrEmail: z.string(),
  inquiry: z.string(),
});

const CreateContactMessage = ContactMessageSchema.omit({ id: true });

export async function test() {
  console.log("hey");
}

export async function createInquiry(
  formState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = CreateContactMessage.safeParse({
    name: formData.get("name"),
    email: formData.get("phoneOrEmail"),
    inquiry: formData.get("inquiry"),
  });

  console.log(validatedFields);

  if (!validatedFields.success) {
    console.log(validatedFields.error.flatten().fieldErrors);
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Invalid data. Failed to send message.",
    };
  }

  const { name, phoneOrEmail, inquiry } = validatedFields.data;

  const transport = nodemailer.createTransport({
    host: "live.smtp.mailtrap.io",
    port: 587,
    auth: {
      user: "api",
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions = {
    from: "enquiries@mukeshacademy.com",
    to: "avimukesh10@gmail.com",
    subject: `Tutoring Enquiry ${name}`,
    text: `
        Name: ${name}
        Phone/email: ${phoneOrEmail}
        Inquiry: ${inquiry}
    `,
  };

  // Send the email
  transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error:", error);
      return { message: "Failed to send email due to server error." };
    } else {
      console.log("Email sent: " + info.response);
      return { message: "Inquiry sent" };
    }
  });

  revalidatePath("/case-inquiries");
  return { message: "Inquiry sent successfully" };
}
