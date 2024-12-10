"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function postComment(formData: FormData) {
  let name = formData.get("name") as string | undefined;
  const text = formData.get("text") as string;
  const discussionId = formData.get("discussionId") as string;
  let replyingTo = formData.get("replyingTo") as string | undefined;

  console.log(replyingTo);

  if (name?.length === 0) name = undefined;
  if (replyingTo?.length === 0) replyingTo = undefined;

  await prisma.discussionComment.create({
    data: {
      name,
      text,
      discussionId,
      replyToCommentId: replyingTo,
    },
  });

  revalidatePath("/discussions");
}
