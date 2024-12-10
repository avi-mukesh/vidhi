import prisma from "@/lib/db";

export async function getDiscussions() {
  return prisma.discussion.findMany();
}

export async function getDiscussionComments(discussionId: string) {
  return prisma.discussionComment.findMany({
    where: { discussionId },
    include: { replyToComment: true },
  });
}

export async function getDiscussionComment(commentId: string) {
  return prisma.discussionComment.findFirst({ where: { id: commentId } });
}
