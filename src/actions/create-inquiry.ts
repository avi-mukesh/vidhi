"use server";
import * as nodemailer from "nodemailer";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import prisma from "@/lib/db";

const InquirySchema = z.object({
  id: z.string(),
  name: z.string(),
  phoneOrEmail: z.string(),
  inquiry: z.string(),
});

const CreateInquiry = InquirySchema.omit({ id: true });

export async function createInquiry(formData: FormData) {
  const validatedFields = CreateInquiry.safeParse({
    name: formData.get("name"),
    phoneOrEmail: formData.get("phoneOrEmail"),
    inquiry: formData.get("inquiry"),
  });

  console.log(validatedFields);

  if (!validatedFields.success) {
    console.log(validatedFields.error.flatten().fieldErrors);
    return;
  }

  const { name, phoneOrEmail, inquiry } = validatedFields.data;

  try {
    await prisma.caseInquiry.create({
      data: { name, phoneOrEmail, inquiry },
    });

    const transport = nodemailer.createTransport({
      host: "live.smtp.mailtrap.io",
      port: 587,
      auth: {
        user: "api",
        pass: process.env.PASSWORD,
      },
    });

    const mailOptions = {
      from: "caseinquiries@vidhisaharaa.com",
      to: "anjaliijn11@gmail.com",
      subject: `Case Inquiry - ${name}`,
      text: `
          Name: ${name}
          Phone/email: ${phoneOrEmail}
          Inquiry: ${inquiry}
      `,
    };
    console.log("about to attempt to send the mail");

    // Send the email
    transport.sendMail(mailOptions, async (error, info) => {
      if (error) {
        console.log(error);
        return { message: "Failed to send email due to server error." };
      } else {
        console.log("Email sent: " + info.response);
        return { message: "Inquiry sent" };
      }
    });
  } catch (e) {
    console.error(e);
  }

  revalidatePath("/");
}
