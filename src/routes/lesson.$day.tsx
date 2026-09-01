import { createFileRoute, useNavigate, useParams } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AdBanner } from "@/components/AdBanner";
import { DAYS, T, completeDay, getLang, getPlan, type Lang, type Plan } from "@/lib/kids-app";

export const Route = createFileRoute("/lesson/$day")({
  head: () => ({
    meta: [
      { title: "Today's Move — Cloudhop Kids Exercises" },
      {
        name: "description",
        content: "Watch the video, follow the simple steps, and finish today's kids exercise.",
      },
      { property: "og:title", content: "Today's Move — Cloudhop Kids Exercises" },
      { property: "og:description", content: "A short kids exercise video with easy step-by-step instructions." },
    ],
  }),
  component: LessonPage,
});

function LessonPage() {
  const { day } = useParams({ from: "/lesson/$day" });
  const navigate = useNavigate();
  const [lang, setLangState] = useState<Lang>("en");
  const [plan, setPlanState] = useState<Plan>("ads");

  useEffect(() => {
    setLangState(getLang());
    setPlanState(getPlan());
  }, []);

  const lesson = DAYS.find((d) => String(d.day) === day) ?? DAYS[0];

  return (
    <div className="font-body text-ink">
      <div className="cloud-bg relative mx-auto min-h-screen w-full max-w-[430px] overflow-hidden pb-10">
        <div className="pointer-events-none absolute -right-20 top-32 size-60 rounded-full bg-mint/25 blur-3xl" />
        <div className="pointer-events-none absolute -left-16 bottom-16 size-56 rounded-full bg-sun/25 blur-3xl" />

        <header className="relative z-10 flex items-center gap-3 px-5 pt-6">
          <button
            onClick={() => navigate({ to: "/path" })}
            className="spring glass grid size-11 place-items-center rounded-2xl text-lg"
            aria-label={T.back[lang]}
          >
            ←
          </button>
          <div className="min-w-0">
            <p className="text-[11px] font-bold uppercase tracking-[.16em] text-sky-deep">
              {T.day[lang]} {lesson.day} · {T.videoWorkout[lang]}
            </p>
            <h1 className="truncate font-display text-2xl font-extrabold leading-none">
              {lesson.emoji} {lesson.title[lang]}
            </h1>
          </div>
        </header>

        <div className="relative z-10 mx-4 mt-4 overflow-hidden rounded-[28px] animate-[pop_.45s_var(--ease-spring)_both]">
          <video
            key={lesson.day}
            controls
            playsInline
            poster={lesson.image}
            src={lesson.video}
            className="aspect-video w-full bg-sky object-cover"
          />
        </div>

        <p className="relative z-10 mx-5 mt-4 font-display text-lg font-extrabold leading-snug">
          {lesson.intro[lang]}
        </p>

        <div className="glass relative z-10 mx-4 mt-3 rounded-[26px] p-4">
          <p className="text-[11px] font-bold uppercase tracking-[.14em] text-sky-deep">
            {T.howTo[lang]}
          </p>
          <ol className="mt-3 flex flex-col gap-3">
            {lesson.steps[lang].map((s, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="grid size-7 shrink-0 place-items-center rounded-full bg-sun font-display text-sm font-extrabold shadow-[0_3px_0_var(--color-sun-deep)]">
                  {i + 1}
                </span>
                <span className="text-sm font-bold text-ink/75">{s}</span>
              </li>
            ))}
          </ol>
        </div>

        <AdBanner lang={lang} show={plan === "ads"} />

        <button
          onClick={() => {
            completeDay(lesson.day);
            navigate({ to: "/path" });
          }}
          className="spring relative z-10 mx-4 mt-5 grid h-14 w-[calc(100%-2rem)] place-items-center rounded-2xl bg-mint font-display text-lg font-extrabold text-white shadow-[0_6px_0_var(--color-mint-deep)]"
        >
          {T.finish[lang]}
        </button>
      </div>
    </div>
  );
}
