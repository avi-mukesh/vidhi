import prisma from "@/lib/db";

export function getUser(id: string) {
  // return prisma.user_profiles.findFirst({ where: { user_id: id } });
  return prisma.users.findFirst({ where: { id } });
}
