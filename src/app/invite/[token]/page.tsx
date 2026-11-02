import InviteLanding from "./invite-landing";

type Invitation = {
  expiresAt: string | null;
  code: string;
};

export default function InvitePage() {
  // 초대 데이터 연동 전까지 모든 토큰에 동일한 목업을 표시합니다.
  const invitation: Invitation = {
    expiresAt: "2026-10-30T00:00:00+09:00",
    code: "000000",
  };

  return <InviteLanding invitation={invitation} />;
}
