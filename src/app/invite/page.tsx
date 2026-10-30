import InviteLanding from "./[token]/invite-landing";
import { Suspense } from "react";

const mockInvitation = { deadline: "10월 30일 밤 12시", code: "000000" };
type SearchParams = Promise<{ code?: string | string[] }>;

async function InviteWithCode({ searchParams }: { searchParams: SearchParams }) {
  const { code } = await searchParams;
  const invitation = {
    ...mockInvitation,
    code: typeof code === "string" && /^\d{6}$/.test(code) ? code : mockInvitation.code,
  };

  return <InviteLanding invitation={invitation} />;
}

export default function InviteIndexPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  return (
    <Suspense fallback={<InviteLanding invitation={mockInvitation} />}>
      <InviteWithCode searchParams={searchParams} />
    </Suspense>
  );
}
