"use client";

import React, { useReducer } from "react";
import { DiscussionComments } from "./DiscussionComments";
import { AddComment } from "./AddComment";
import {
  DiscussionCommentReplyContext,
  DiscussionCommentReplyDispatchContext,
  discussionCommentReplyReducer,
  initialState,
} from "@/context/DiscussionCommentReplyContext";
import { DiscussionCommentWithReply } from "@/lib/types";

type PropsType = {
  discussionId: string;
  comments: DiscussionCommentWithReply[];
};

export const DiscussionCommentsContainer = ({
  discussionId,
  comments,
}: PropsType) => {
  const [replyingTo, dispatch] = useReducer(
    discussionCommentReplyReducer,
    initialState
  );

  return (
    <DiscussionCommentReplyContext.Provider value={replyingTo}>
      <DiscussionCommentReplyDispatchContext.Provider value={dispatch}>
        <DiscussionComments comments={comments} />
        <AddComment discussionId={discussionId} />
      </DiscussionCommentReplyDispatchContext.Provider>
    </DiscussionCommentReplyContext.Provider>
  );
};
