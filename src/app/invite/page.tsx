import InviteLanding from "./[token]/invite-landing";
import { Suspense } from "react";

const mockInvitation = { expiresAt: null, code: "000000" };
type SearchParams = Promise<{ code?: string | string[]; endTime?: string | string[] }>;

async function InviteWithCode({ searchParams }: { searchParams: SearchParams }) {
  const { code, endTime } = await searchParams;
  const invitation = {
    ...mockInvitation,
    code: typeof code === "string" && /^\d{6}$/.test(code) ? code : mockInvitation.code,
    expiresAt: typeof endTime === "string" ? endTime : null,
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
