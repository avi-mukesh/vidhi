"use server";
import * as nodemailer from "nodemailer";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const CommentSchema = z.object({
  id: z.string(),
  comment: z.string(),
});

const CreateComment = CommentSchema.omit({ id: true });

export async function createComment(formData: FormData) {
  const validatedFields = CreateComment.safeParse({
    comment: formData.get("comment"),
  });

  if (!validatedFields.success) {
    console.log(validatedFields.error.flatten().fieldErrors);
    return;
  }

  const { comment } = validatedFields.data;

  const transport = nodemailer.createTransport({
    host: "live.smtp.mailtrap.io",
    port: 587,
    auth: {
      user: "api",
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions = {
    from: "studentcomments@vidhisaharaa.com",
    to: "anjaliijn11@gmail.com",
    subject: `Student Comment`,
    text: comment,
  };

  // Send the email
  transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error:", error);
      return { message: "Failed to send email due to server error." };
    } else {
      console.log("Email sent: " + info.response);
      return { message: "Comment sent" };
    }
  });

  revalidatePath("/");
}
