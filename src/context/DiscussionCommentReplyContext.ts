import { DiscussionComment } from "@prisma/client";
import { createContext, ReducerAction } from "react";

export const initialState = {
  replyingTo: undefined,
};

type StateType = {
  replyingTo: DiscussionComment | undefined;
};

type ReducerActionType = {
  type: "reply_to";
  payload?: DiscussionComment;
};

export function discussionCommentReplyReducer(
  replyingTo: StateType,
  action: ReducerActionType
): StateType {
  switch (action.type) {
    case "reply_to":
      return { replyingTo: action.payload };
    default:
      return { replyingTo: undefined };
  }
}

export const DiscussionCommentReplyContext = createContext<StateType>({
  replyingTo: undefined,
});

export const DiscussionCommentReplyDispatchContext = createContext<
  React.Dispatch<ReducerAction<typeof discussionCommentReplyReducer>>
>(() => {});
