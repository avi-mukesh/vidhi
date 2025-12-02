import { getUser } from "@/lib/user/data";
import { Discussion } from "@prisma/client";
import React from "react";
// import { DiscussionCommentsContainer } from "./DiscussionCommentsContainer";
// import { getDiscussionComments } from "@/lib/discussions/data";

type PropsType = {
  discussion: Discussion;
};

export const DiscussionCard = async ({ discussion }: PropsType) => {
  const author = await getUser(discussion.authorId);
  const comments = await getDiscussionComments(discussion.id);

  return (
    <div className="p-2 bg-foreground text-background m-5 flex flex-col">
      <div className="w-full mb-4">
        <h2 className="text-lg font-bold">{discussion.topic}</h2>
        <p className="mb-2">{discussion.text}</p>
        <p className="text-sm italic">{author?.email}</p>
        <p className="text-sm italic">
          {discussion.datePosted.toLocaleDateString("en-GB", {
            weekday: "short",
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </p>
      </div>
      {/* <DiscussionCommentsContainer
        discussionId={discussion.id}
        comments={comments}
      /> */}
    </div>
  );
};
