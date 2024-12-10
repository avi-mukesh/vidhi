import { DiscussionComment } from "@prisma/client";

type ReplyType = {
  replyToComment: DiscussionComment | null;
};

export type DiscussionCommentWithReply = DiscussionComment & ReplyType;
