"use server";
import * as nodemailer from "nodemailer";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import prisma from "@/lib/db";

const CommentSchema = z.object({
  id: z.string(),
  comment: z.string(),
});

const CreateComment = CommentSchema.omit({ id: true });

export async function createComment(formData: FormData) {
  const validatedFields = CreateComment.safeParse({
    comment: formData.get("comment"),
  });

  console.log(validatedFields);

  if (!validatedFields.success) {
    console.log(validatedFields.error.flatten().fieldErrors);
    return;
  }

  const { comment } = validatedFields.data;

  try {
    await prisma.studentComment.create({
      data: { text: comment },
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
      from: "studentcomments@vidhisaharaa.com",
      to: "anjaliijn11@gmail.com",
      subject: `Student Comment`,
      text: comment,
    };

    console.log("about to attempt to send the mail");
    // Send the email
    transport.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        return { message: "Failed to send email due to server error." };
      } else {
        console.log("Email sent: " + info.response);
        return { message: "Comment sent" };
      }
    });
  } catch (e) {
    console.error(e);
  }

  revalidatePath("/");
}
