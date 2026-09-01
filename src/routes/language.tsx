import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { T, setLang, type Lang } from "@/lib/kids-app";

export const Route = createFileRoute("/language")({
  head: () => ({
    meta: [
      { title: "Choose Language — Cloudhop Kids Exercises" },
      {
        name: "description",
        content: "Pick English or German for your Cloudhop kids exercise adventure.",
      },
      { property: "og:title", content: "Choose Language — Cloudhop Kids Exercises" },
      { property: "og:description", content: "Pick English or German for the whole kids workout course." },
    ],
  }),
  component: LanguagePage,
});

const OPTIONS: { code: Lang; label: string; flag: string }[] = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
];

function LanguagePage() {
  const navigate = useNavigate();
  const [picked, setPicked] = useState<Lang>("en");

  return (
    <div className="font-body text-ink">
      <div className="cloud-bg relative mx-auto flex min-h-screen w-full max-w-[430px] flex-col overflow-hidden px-6 pb-10 pt-12">
        <div className="pointer-events-none absolute -right-20 top-24 size-60 rounded-full bg-mint/25 blur-3xl" />
        <div className="pointer-events-none absolute -left-16 bottom-24 size-56 rounded-full bg-coral/20 blur-3xl" />

        <div className="relative z-10 animate-[rise_.5s_var(--ease-spring)_both]">
          <h1 className="font-display text-3xl font-extrabold leading-tight">{T.chooseLang[picked]}</h1>
          <p className="mt-1 text-sm font-semibold text-ink/60">{T.chooseLangSub[picked]}</p>
        </div>

        <div className="relative z-10 mt-8 flex flex-col gap-4">
          {OPTIONS.map((o) => {
            const active = picked === o.code;
            return (
              <button
                key={o.code}
                onClick={() => setPicked(o.code)}
                className={`spring glass flex items-center justify-between rounded-3xl px-5 py-5 ${
                  active ? "ring-4 ring-mint/60" : ""
                }`}
              >
                <span className="flex items-center gap-4">
                  <span className="grid size-12 place-items-center rounded-2xl bg-white/80 text-2xl">
                    {o.flag}
                  </span>
                  <span className="font-display text-xl font-extrabold">{o.label}</span>
                </span>
                <span
                  className={`size-6 rounded-full border-4 ${
                    active ? "border-mint bg-mint" : "border-white/80 bg-white/40"
                  }`}
                />
              </button>
            );
          })}
        </div>

        <button
          onClick={() => {
            setLang(picked);
            navigate({ to: "/path" });
          }}
          className="spring relative z-10 mt-auto h-14 w-full rounded-2xl bg-mint font-display text-lg font-extrabold text-white shadow-[0_6px_0_var(--color-mint-deep)]"
        >
          {T.continue[picked]}
        </button>
      </div>
    </div>
  );
}
