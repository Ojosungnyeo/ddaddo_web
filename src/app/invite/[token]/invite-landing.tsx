"use client";

import Image from "next/image";
import { useState } from "react";

type Invitation = {
  deadline: string;
  code: string;
};

export default function InviteLanding({ invitation }: { invitation: Invitation }) {
  const [copied, setCopied] = useState(false);

  async function copyCode() {
    try {
      await navigator.clipboard.writeText(invitation.code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <main className="flex min-h-dvh flex-col items-center bg-background px-4 pb-12 pt-[clamp(72px,16vh,148px)] text-center text-foreground">
      <div className="relative h-[171px] w-[327px] max-w-full shrink-0">
        <div className="absolute inset-x-0 top-0 h-[171px] overflow-hidden rounded-t-[164px]">
          <Image src="/invite/circle-outline.svg" alt="" width={327} height={327} className="absolute left-0 top-0" />
          <Image src="/invite/circle-fill.svg" alt="" width={321} height={321} className="absolute left-[3px] top-[3px]" />
          <div className="absolute left-[29px] top-[31px] h-[156px] w-[259px] overflow-hidden">
            <Image
              src="/invite/character.png"
              alt="여행 초대를 기다리는 따또 캐릭터"
              width={1671}
              height={941}
              priority
              className="absolute left-0 top-[-255.09%] h-[355.09%] w-[378.05%] max-w-none"
            />
          </div>
          <Image src="/invite/character-overlay.svg" alt="" width={321} height={321} className="absolute left-[3px] top-[3px]" />
          <Image src="/invite/ear-accent.svg" alt="" width={37} height={26} className="absolute left-[253px] top-[50px] rotate-[47deg]" />
        </div>
        <div className="absolute right-[-10px] top-[105px] flex h-[42px] w-[91px] items-center justify-center rounded-full bg-white text-[14px] font-semibold leading-5 text-[#303030]">
          <Image src="/invite/speech-tail.svg" alt="" width={17} height={15} className="absolute -left-[5px] top-[2px] -rotate-45" />
          얼른 와...
        </div>
      </div>

      <section className="mt-[20px] flex flex-col items-center gap-1 font-semibold" aria-label="초대 마감일">
        <h1 className="text-[24px] leading-[34px] text-key">{invitation.deadline}</h1>
        <p className="text-[16px] leading-6">까지 가고 싶은 장소를 저장해야 한따!</p>
      </section>

      <section className="mt-[45px] flex flex-col items-center" aria-label="초대 코드">
        <button
          type="button"
          onClick={copyCode}
          className="flex h-[56px] items-center gap-1 rounded-[20px] bg-key px-4 text-[#303030] transition-transform active:scale-[0.97]"
          aria-label={`초대 코드 ${invitation.code} 복사`}
        >
          <span className="text-[24px] font-semibold leading-[30px] underline underline-offset-2">{invitation.code}</span>
          <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-5 w-5">
            <rect x="6" y="5" width="10" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
            <path d="M12.5 5V3.5A1.5 1.5 0 0 0 11 2H4.5A1.5 1.5 0 0 0 3 3.5V13a1.5 1.5 0 0 0 1.5 1.5H6" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
        <p className="mt-3 text-[16px] font-semibold leading-6">따또가 당신을 기다리게따.</p>
        <span className="sr-only" role="status" aria-live="polite">{copied ? "초대 코드가 복사되었습니다." : ""}</span>
      </section>

      {/* 앱의 App Store 주소가 정해지면 이 버튼에 연결합니다. */}
      <button type="button" className="mt-[34px] rounded-[10px]" aria-label="App Store에서 다운로드하기">
        <Image src="/invite/app-store.png" alt="App Store에서 다운로드하기" width={189} height={60} className="h-[60px] w-[189px]" />
      </button>
    </main>
  );
}
