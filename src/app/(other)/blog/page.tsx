import { DiscussionCard } from "@/components/Discussions/DiscussionCard";
import { getDiscussions } from "@/lib/discussions/data";

export default async function DiscussionsPage() {
  const discussions = await getDiscussions();

  return (
    <main>
      <div className="flex flex-wrap">
        {discussions.map((discussion) => (
          <DiscussionCard key={discussion.id} discussion={discussion} />
        ))}
      </div>
    </main>
  );
}
