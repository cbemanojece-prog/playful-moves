import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AdBanner } from "@/components/AdBanner";
import { DAYS, T, getCompleted, getLang, getPlan, type Lang, type Plan } from "@/lib/kids-app";

export const Route = createFileRoute("/path")({
  head: () => ({
    meta: [
      { title: "Your Daily Path — Cloudhop Kids Exercises" },
      {
        name: "description",
        content: "Hop along a winding path of daily kids exercises and unlock a new video workout every day.",
      },
      { property: "og:title", content: "Your Daily Path — Cloudhop Kids Exercises" },
      { property: "og:description", content: "A new kids video workout unlocks every day along the Cloudhop path." },
    ],
  }),
  component: PathPage,
});

const nodeX = (i: number) => (i % 2 === 0 ? 90 : 210);
const nodeY = (i: number) => 40 + i * 88;

function trailPath() {
  const pts = DAYS.map((_, i) => ({ x: nodeX(i), y: nodeY(i) }));
  let d = `M${pts[0]!.x},${pts[0]!.y}`;
  for (let i = 1; i < pts.length; i++) {
    const p0 = pts[i - 1]!;
    const p1 = pts[i]!;
    const midY = (p0.y + p1.y) / 2;
    d += ` C${p0.x},${midY} ${p1.x},${midY} ${p1.x},${p1.y}`;
  }
  return d;
}

function PathPage() {
  const navigate = useNavigate();
  const [lang, setLangState] = useState<Lang>("en");
  const [plan, setPlanState] = useState<Plan>("ads");
  const [completed, setCompleted] = useState<number[]>([]);

  useEffect(() => {
    setLangState(getLang());
    setPlanState(getPlan());
    setCompleted(getCompleted());
  }, []);

  const currentIndex = Math.min(completed.length, DAYS.length - 1);
  const current = DAYS[currentIndex]!;
  const progress = Math.round((completed.length / DAYS.length) * 100);

  return (
    <div className="font-body text-ink">
      <div className="cloud-bg relative mx-auto min-h-screen w-full max-w-[430px] overflow-hidden pb-28">
        <div className="pointer-events-none absolute -left-16 -top-16 size-52 rounded-full bg-sun/25 blur-2xl" />
        <div className="pointer-events-none absolute -right-20 top-40 size-60 rounded-full bg-mint/25 blur-3xl" />
        <div className="pointer-events-none absolute bottom-24 left-1/2 size-72 -translate-x-1/2 rounded-full bg-coral/20 blur-3xl" />

        <header className="relative z-10 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-5 pb-2 pt-6">
          <div className="flex min-w-0 items-center gap-2 animate-[rise_.5s_var(--ease-spring)_both]">
            <div className="grid size-10 shrink-0 -rotate-6 place-items-center rounded-2xl bg-mint font-display text-lg font-extrabold text-white shadow-[0_5px_0_var(--color-mint-deep)]">
              C
            </div>
            <div className="min-w-0 leading-none">
              <p className="text-[11px] font-bold uppercase tracking-[.16em] text-sky-deep">
                {T.appName[lang]}
              </p>
              <h1 className="truncate font-display text-2xl font-extrabold leading-none">
                {T.hi[lang]}
              </h1>
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <div className="glass flex items-center gap-1 rounded-full px-3 py-1.5">
              <span className="text-base leading-none text-sun">◆</span>
              <span className="text-sm font-extrabold">{completed.length}</span>
            </div>
            <div className="glass flex items-center gap-1 rounded-full px-3 py-1.5">
              <span className="text-base leading-none text-coral">♥</span>
              <span className="text-sm font-extrabold">5</span>
            </div>
          </div>
        </header>

        <div className="glass relative z-10 mx-4 mt-1 rounded-[26px] p-4 animate-[rise_.5s_var(--ease-spring)_both]">
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold text-ink/80">{T.dailyQuest[lang]}</p>
            <p className="text-xs font-extrabold text-mint-deep">
              {progress}% {T.done[lang]}
            </p>
          </div>
          <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-white/60">
            <div
              className="h-full rounded-full bg-linear-to-r from-mint to-sun transition-all"
              style={{ width: `${Math.max(progress, 4)}%` }}
            />
          </div>
          <p className="mt-2 text-xs font-semibold text-ink/60">{T.questHint[lang]}</p>
        </div>

        <AdBanner lang={lang} show={plan === "ads"} />

        <section className="relative z-10 mx-auto mt-5 w-fit">
          <svg viewBox="0 0 300 660" className="-mt-1 w-[300px]" aria-hidden="true">
            <path
              d={trailPath()}
              fill="none"
              stroke="rgba(255,255,255,.75)"
              strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray="0 24"
            />
          </svg>

          {DAYS.map((d, i) => {
            const isDone = completed.includes(d.day);
            const isCurrent = !isDone && i === currentIndex;
            const isLocked = !isDone && !isCurrent;
            return (
              <div
                key={d.day}
                className="absolute -translate-x-1/2"
                style={{ left: nodeX(i), top: nodeY(i) - 32 }}
              >
                {isCurrent && (
                  <span className="absolute -top-4 left-1/2 z-10 -translate-x-1/2 glass rounded-full px-3 py-0.5 text-[10px] font-extrabold text-ink/80">
                    {T.today[lang]}
                  </span>
                )}
                <button
                  disabled={isLocked}
                  onClick={() => navigate({ to: "/lesson/$day", params: { day: String(d.day) } })}
                  className={
                    isDone
                      ? "spring grid size-16 place-items-center rounded-full bg-mint font-display text-xl font-extrabold text-white shadow-[0_6px_0_var(--color-mint-deep)] ring-4 ring-white/70"
                      : isCurrent
                        ? "spring grid size-[78px] animate-[bob_2.4s_ease-in-out_infinite] place-items-center rounded-full bg-sun font-display text-2xl font-extrabold shadow-[0_7px_0_var(--color-sun-deep)] ring-4 ring-white/80"
                        : "grid size-16 place-items-center rounded-full bg-white/55 text-base text-ink/35 shadow-[0_6px_0_rgba(29,53,87,.12)] ring-4 ring-white/40"
                  }
                >
                  {isDone ? d.day : isCurrent ? d.day : "🔒"}
                </button>
                <p
                  className={`mt-2 text-center text-[11px] font-extrabold ${
                    isLocked ? "text-ink/40" : "text-ink/70"
                  }`}
                >
                  {d.title[lang]}
                </p>
              </div>
            );
          })}
        </section>

        <div className="glass relative z-20 mx-4 mt-8 rounded-[28px] p-4 shadow-[0_18px_40px_-20px_rgba(29,53,87,.5)] animate-[pop_.45s_var(--ease-spring)_both]">
          <div className="flex items-center justify-between gap-3">
            <div className="min-w-0">
              <p className="text-[11px] font-bold uppercase tracking-[.14em] text-sky-deep">
                {T.day[lang]} {current.day} · {T.videoWorkout[lang]}
              </p>
              <h2 className="truncate font-display text-lg font-extrabold leading-tight">
                {current.title[lang]}
              </h2>
            </div>
            <span className="shrink-0 text-xs font-extrabold text-ink/60">{current.duration}</span>
          </div>
          <div className="relative mt-3">
            <img
              src={current.image}
              alt={current.title[lang]}
              width={1024}
              height={576}
              loading="lazy"
              className="aspect-video w-full rounded-2xl object-cover"
            />
            <Link
              to="/lesson/$day"
              params={{ day: String(current.day) }}
              className="spring absolute inset-0 m-auto grid size-16 place-items-center rounded-full bg-white/85"
              aria-label={current.title[lang]}
            >
              <span className="ml-1 font-display text-2xl leading-none text-mint-deep">▶</span>
            </Link>
          </div>
          <Link
            to="/lesson/$day"
            params={{ day: String(current.day) }}
            className="spring mt-4 grid h-14 w-full place-items-center rounded-2xl bg-mint font-display text-lg font-extrabold text-white shadow-[0_6px_0_var(--color-mint-deep)]"
          >
            {T.start[lang]}
          </Link>
        </div>

        <nav className="fixed bottom-0 left-1/2 z-30 w-full max-w-[430px] -translate-x-1/2">
          <div className="glass mx-3 mb-3 flex items-center justify-around rounded-3xl px-2 py-2">
            <span className="spring flex flex-col items-center gap-0.5 rounded-2xl px-4 py-1.5">
              <span className="text-xl leading-none">🏠</span>
              <span className="text-[10px] font-extrabold text-mint-deep">{T.path[lang]}</span>
            </span>
            <Link
              to="/lesson/$day"
              params={{ day: String(current.day) }}
              className="spring flex flex-col items-center gap-0.5 rounded-2xl px-4 py-1.5 text-ink/50"
            >
              <span className="text-xl leading-none">🎮</span>
              <span className="text-[10px] font-extrabold">{T.moves[lang]}</span>
            </Link>
            <Link
              to="/language"
              className="spring flex flex-col items-center gap-0.5 rounded-2xl px-4 py-1.5 text-ink/50"
            >
              <span className="text-xl leading-none">🐢</span>
              <span className="text-[10px] font-extrabold">{lang === "en" ? "EN" : "DE"}</span>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
