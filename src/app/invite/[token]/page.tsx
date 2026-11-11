import InviteLanding from "./invite-landing";
import InviteStatus from "./invite-status";
import { isValidInviteEndTime } from "@/lib/invitations";
import { Suspense } from "react";

type Params = Promise<{ token: string }>;
type SearchParams = Promise<{ endTime?: string | string[] }>;

async function InviteWithToken({
  params,
  searchParams,
}: {
  params: Params;
  searchParams: SearchParams;
}) {
  const { token } = await params;
  const { endTime } = await searchParams;
  const expiresAt = typeof endTime === "string" ? endTime : undefined;

  if (!isValidInviteEndTime(expiresAt)) return <InviteStatus />;

  return <InviteLanding invitation={{ code: token, expiresAt }} />;
}

export default function InvitePage({
  params,
  searchParams,
}: {
  params: Params;
  searchParams: SearchParams;
}) {
  return (
    <Suspense fallback={null}>
      <InviteWithToken params={params} searchParams={searchParams} />
    </Suspense>
  );
}
