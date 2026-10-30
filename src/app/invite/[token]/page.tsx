import InviteLanding from "./invite-landing";

type Invitation = {
  deadline: string;
  code: string;
};

export default function InvitePage() {
  // 초대 데이터 연동 전까지 모든 토큰에 동일한 목업을 표시합니다.
  const invitation: Invitation = {
    deadline: "10월 30일 밤 12시",
    code: "000000",
  };

  return <InviteLanding invitation={invitation} />;
}
