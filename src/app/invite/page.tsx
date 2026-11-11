import InviteLanding from "./[token]/invite-landing";
import InviteStatus from "./[token]/invite-status";
import { isValidInviteEndTime } from "@/lib/invitations";
import { Suspense } from "react";

type SearchParams = Promise<{ code?: string | string[]; endTime?: string | string[] }>;

async function InviteWithCode({ searchParams }: { searchParams: SearchParams }) {
  const { code, endTime } = await searchParams;
  const expiresAt = typeof endTime === "string" ? endTime : undefined;

  if (!isValidInviteEndTime(expiresAt)) return <InviteStatus />;

  const invitation = {
    code: typeof code === "string" && /^\d{6}$/.test(code) ? code : "000000",
    expiresAt,
  };

  return <InviteLanding invitation={invitation} />;
}

export default function InviteIndexPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  return (
    <Suspense fallback={null}>
      <InviteWithCode searchParams={searchParams} />
    </Suspense>
  );
}
