import { T, type Lang } from "@/lib/kids-app";

export function AdBanner({ lang, show }: { lang: Lang; show: boolean }) {
  if (!show) return null;
  return (
    <div className="glass mx-4 mt-3 flex items-center justify-center rounded-2xl border-dashed py-3 text-[11px] font-extrabold uppercase tracking-[.14em] text-ink/45">
      {T.adBanner[lang]}
    </div>
  );
}
