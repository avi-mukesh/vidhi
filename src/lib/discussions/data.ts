import prisma from "@/lib/db";

export async function getDiscussions() {
  return prisma.discussion.findMany();
}

export async function getDiscussionComments(discussionId: string) {
  return prisma.discussionComment.findMany({ where: { discussionId } });
}
