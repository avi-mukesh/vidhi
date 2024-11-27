"use server";
import * as nodemailer from "nodemailer";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const InquiryScehem = z.object({
  id: z.string(),
  name: z.string(),
  phoneOrEmail: z.string(),
  inquiry: z.string(),
});

const CreateInquiry = InquiryScehem.omit({ id: true });

export async function test() {
  console.log("hey");
}

export async function createInquiry(formData: FormData) {
  const validatedFields = CreateInquiry.safeParse({
    name: formData.get("name"),
    phoneOrEmail: formData.get("phoneOrEmail"),
    inquiry: formData.get("inquiry"),
  });

  console.log(validatedFields);

  if (!validatedFields.success) {
    console.log(validatedFields.error.flatten().fieldErrors);
    // return {
    //   errors: validatedFields.error.flatten().fieldErrors,
    //   message: "Invalid data. Failed to send message.",
    // };
    return;
  }

  const { name, phoneOrEmail, inquiry } = validatedFields.data;

  const transport = nodemailer.createTransport({
    host: "live.smtp.mailtrap.io",
    port: 587,
    secure: true,
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

  revalidatePath("/");
}
