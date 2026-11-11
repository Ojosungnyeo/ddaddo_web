import Image from "next/image";

export default function InviteStatus() {
  return (
    <main className="flex min-h-dvh flex-col items-center bg-background px-6 pb-12 pt-[calc(20dvh+62px)] text-center text-foreground">
      <div className="relative aspect-[327/171] w-[min(327px,calc(100vw-48px))] shrink-0 overflow-hidden" aria-hidden="true">
        <div className="absolute left-0 top-0 aspect-square w-full rounded-full bg-key" />
        <div className="absolute left-[0.917%] top-[1.526%] aspect-square w-[98.139%] rounded-full bg-[#4a4a4a]" />
        <div className="absolute left-[7.645%] top-[12.281%] flex aspect-[275.946/165.918] w-[84.388%] items-center justify-center">
          <div className="relative aspect-[2/1] w-[94.221%] -rotate-[8.24deg]">
            <Image
              src="/invite/expired-ticket-transparent.png"
              alt=""
              fill
              sizes="260px"
              priority
              className="object-cover"
            />
          </div>
        </div>
        <div className="absolute left-[0.917%] top-[1.17%] aspect-square w-[98.139%] rounded-full bg-key/16" />
      </div>

      <section className="mt-4 flex w-full flex-col items-center gap-1" aria-live="polite">
        <h1 className="text-[24px] font-bold leading-normal text-key">초대 코드가 만료됐어요</h1>
        <p className="w-full max-w-[291px] text-[16px] font-semibold leading-6 text-[#f2f2f2]">
          72시간이 지나 초대 링크가 만료되었어요.
        </p>
      </section>
    </main>
  );
}
