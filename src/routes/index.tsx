import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { T, setPlan, type Lang, type Plan } from "@/lib/kids-app";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cloudhop — Daily Exercise Adventures for Kids" },
      {
        name: "description",
        content:
          "A playful kids exercise app: pick with ads or ads free, choose English or German, and hop along a daily path of video workouts.",
      },
      { property: "og:title", content: "Cloudhop — Daily Exercise Adventures for Kids" },
      {
        property: "og:description",
        content: "Hop through a daily path of fun kids video workouts in English or German.",
      },
    ],
  }),
  component: EntryPage,
});

function EntryPage() {
  const navigate = useNavigate();
  const [lang] = useState<Lang>("en");

  const choose = (plan: Plan) => {
    setPlan(plan);
    navigate({ to: "/language" });
  };

  return (
    <div className="font-body text-ink">
      <div className="cloud-bg relative mx-auto flex min-h-screen w-full max-w-[430px] flex-col overflow-hidden px-6 pb-10 pt-14">
        <div className="pointer-events-none absolute -left-16 -top-16 size-52 rounded-full bg-sun/25 blur-2xl" />
        <div className="pointer-events-none absolute -right-20 top-52 size-60 rounded-full bg-mint/25 blur-3xl" />
        <div className="pointer-events-none absolute bottom-10 left-1/2 size-72 -translate-x-1/2 rounded-full bg-coral/20 blur-3xl" />

        <div className="relative z-10 flex flex-col items-center text-center animate-[rise_.5s_var(--ease-spring)_both]">
          <div className="grid size-16 -rotate-6 place-items-center rounded-3xl bg-mint font-display text-3xl font-extrabold text-white shadow-[0_7px_0_var(--color-mint-deep)]">
            C
          </div>
          <p className="mt-4 text-[11px] font-bold uppercase tracking-[.2em] text-sky-deep">
            {T.appName[lang]}
          </p>
          <h1 className="font-display text-4xl font-extrabold leading-tight">{T.tagline[lang]}</h1>
          <p className="mt-2 text-sm font-semibold text-ink/60">{T.entryTitle[lang]}</p>
        </div>

        <div className="relative z-10 mt-auto flex flex-col gap-4 pt-12">
          <button
            onClick={() => choose("ads")}
            className="spring flex items-center justify-between rounded-3xl bg-sun px-6 py-5 text-left shadow-[0_7px_0_var(--color-sun-deep)]"
          >
            <span className="flex flex-col">
              <span className="font-display text-xl font-extrabold">{T.withAds[lang]}</span>
              <span className="text-xs font-bold text-ink/60">{T.withAdsSub[lang]}</span>
            </span>
            <span className="grid size-9 place-items-center rounded-full bg-white/80 text-lg">→</span>
          </button>

          <button
            onClick={() => choose("free")}
            className="spring flex items-center justify-between rounded-3xl bg-mint px-6 py-5 text-left text-white shadow-[0_7px_0_var(--color-mint-deep)]"
          >
            <span className="flex flex-col">
              <span className="font-display text-xl font-extrabold">{T.adsFree[lang]}</span>
              <span className="text-xs font-bold text-white/80">{T.adsFreeSub[lang]}</span>
            </span>
            <span className="grid size-9 place-items-center rounded-full bg-white/85 text-lg text-mint-deep">
              →
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
