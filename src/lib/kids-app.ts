import exJump from "@/assets/ex-jump.jpg";
import exStretch from "@/assets/ex-stretch.jpg";
import exHop from "@/assets/ex-hop.jpg";

export type Lang = "en" | "de";
export type Plan = "ads" | "free";

export type Day = {
  day: number;
  emoji: string;
  image: string;
  video: string;
  duration: string;
  title: Record<Lang, string>;
  intro: Record<Lang, string>;
  steps: Record<Lang, string[]>;
};

export const DAYS: Day[] = [
  {
    day: 1,
    emoji: "🤸",
    image: exJump,
    video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    duration: "2:40",
    title: { en: "Jumping Jacks", de: "Hampelmänner" },
    intro: { en: "Warm up with big star jumps!", de: "Wärm dich mit großen Sternsprüngen auf!" },
    steps: {
      en: ["Stand tall with feet together", "Jump and open arms and legs", "Jump back together", "Do 10 in a row"],
      de: ["Stell dich gerade hin, Füße zusammen", "Spring und öffne Arme und Beine", "Spring wieder zusammen", "Mache 10 hintereinander"],
    },
  },
  {
    day: 2,
    emoji: "🦀",
    image: exStretch,
    video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    duration: "3:10",
    title: { en: "Crunchy Crab Walk", de: "Krabben-Gang" },
    intro: { en: "Walk sideways like a happy crab.", de: "Laufe seitwärts wie eine fröhliche Krabbe." },
    steps: {
      en: ["Sit down and put hands behind you", "Lift your bottom up", "Walk sideways 5 steps", "Walk back again"],
      de: ["Setz dich hin, Hände nach hinten", "Hebe deinen Po hoch", "Gehe 5 Schritte seitwärts", "Gehe wieder zurück"],
    },
  },
  {
    day: 3,
    emoji: "🐰",
    image: exHop,
    video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    duration: "2:55",
    title: { en: "Bunny Hops", de: "Hasen-Hüpfer" },
    intro: { en: "Hop, hop, hop like a bunny!", de: "Hüpf, hüpf, hüpf wie ein Hase!" },
    steps: {
      en: ["Squat down low", "Put hands like bunny ears", "Hop forward 8 times", "Hop back to start"],
      de: ["Geh tief in die Hocke", "Hände wie Hasenohren", "Hüpfe 8 Mal nach vorne", "Hüpfe zurück zum Start"],
    },
  },
  {
    day: 4,
    emoji: "⭐",
    image: exStretch,
    video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    duration: "3:20",
    title: { en: "Starfish Stretch", de: "Seestern-Dehnung" },
    intro: { en: "Stretch wide like a starfish.", de: "Streck dich weit wie ein Seestern." },
    steps: {
      en: ["Lie on your back", "Spread arms and legs wide", "Stretch and count to 10", "Curl up small, then stretch again"],
      de: ["Leg dich auf den Rücken", "Arme und Beine weit ausbreiten", "Dehnen und bis 10 zählen", "Klein zusammenrollen, dann wieder dehnen"],
    },
  },
  {
    day: 5,
    emoji: "🌟",
    image: exJump,
    video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    duration: "3:00",
    title: { en: "Star Jumps", de: "Sternensprünge" },
    intro: { en: "Shine bright with big jumps!", de: "Strahle hell mit großen Sprüngen!" },
    steps: {
      en: ["Squat like a tiny ball", "Explode up into a star", "Land softly", "Repeat 8 times"],
      de: ["Hocke dich wie ein kleiner Ball", "Spring hoch zum Stern", "Weich landen", "8 Mal wiederholen"],
    },
  },
  {
    day: 6,
    emoji: "🐢",
    image: exStretch,
    video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    duration: "2:30",
    title: { en: "Turtle Crawl", de: "Schildkröten-Krabbeln" },
    intro: { en: "Crawl slow and strong.", de: "Krabbel langsam und stark." },
    steps: {
      en: ["Go on hands and knees", "Lift knees just a little", "Crawl forward slowly", "Rest in a turtle shell"],
      de: ["Geh auf Hände und Knie", "Hebe die Knie ein wenig", "Krabbel langsam nach vorne", "Ruhe im Schildkrötenpanzer"],
    },
  },
  {
    day: 7,
    emoji: "🐸",
    image: exHop,
    video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    duration: "3:40",
    title: { en: "Frog Leap Finale", de: "Frosch-Sprung Finale" },
    intro: { en: "The big finish — leap like a frog!", de: "Das große Finale — spring wie ein Frosch!" },
    steps: {
      en: ["Crouch with hands on the floor", "Leap far forward", "Croak once", "Do 6 giant leaps"],
      de: ["Hocke dich mit Händen am Boden", "Spring weit nach vorne", "Quake einmal", "Mache 6 Riesensprünge"],
    },
  },
];

export const T = {
  appName: { en: "Cloudhop", de: "Cloudhop" },
  tagline: { en: "Move & play every day", de: "Jeden Tag bewegen & spielen" },
  entryTitle: { en: "How do you want to play?", de: "Wie möchtest du spielen?" },
  withAds: { en: "With Ads", de: "Mit Werbung" },
  withAdsSub: { en: "Free forever", de: "Für immer kostenlos" },
  adsFree: { en: "Ads Free", de: "Werbefrei" },
  adsFreeSub: { en: "One-time €4.99", de: "Einmalig 4,99 €" },
  chooseLang: { en: "Choose your language", de: "Wähle deine Sprache" },
  chooseLangSub: { en: "The whole course will use it.", de: "Der ganze Kurs nutzt sie." },
  continue: { en: "Continue", de: "Weiter" },
  hi: { en: "Hi, hopper!", de: "Hallo, Hüpfer!" },
  dailyQuest: { en: "Daily quest", de: "Tagesaufgabe" },
  done: { en: "done", de: "geschafft" },
  questHint: { en: "Finish today's move to earn a star!", de: "Schaffe die heutige Übung für einen Stern!" },
  today: { en: "Today", de: "Heute" },
  videoWorkout: { en: "Video workout", de: "Video-Workout" },
  start: { en: "Start hopping", de: "Los hüpfen" },
  day: { en: "Day", de: "Tag" },
  back: { en: "Back", de: "Zurück" },
  howTo: { en: "How to do it", de: "So geht's" },
  finish: { en: "I did it!", de: "Geschafft!" },
  locked: { en: "Finish the day before this one first.", de: "Schaffe zuerst den Tag davor." },
  path: { en: "Path", de: "Pfad" },
  moves: { en: "Moves", de: "Übungen" },
  adBanner: { en: "Ad · Your ad could be here", de: "Werbung · Hier könnte Werbung stehen" },
  chooseCoach: { en: "Who should teach you?", de: "Wer soll dir zeigen wie?" },
  coachTip: { en: "Tap a buddy to see their video.", de: "Tippe auf einen Freund für sein Video." },
  teaches: { en: "teaches", de: "zeigt" },
} satisfies Record<string, Record<Lang, string>>;

export type CharacterId = "monkey" | "tiger" | "spiderman";

export type Character = {
  id: CharacterId;
  emoji: string;
  name: Record<Lang, string>;
  videos: string[];
};

const V = (n: string) => `https://storage.googleapis.com/gtv-videos-bucket/sample/${n}.mp4`;

export const CHARACTERS: Character[] = [
  {
    id: "monkey",
    emoji: "🐒",
    name: { en: "Monkey", de: "Affe" },
    videos: [V("ForBiggerFun"), V("ForBiggerJoyrides"), V("ForBiggerEscapes")],
  },
  {
    id: "tiger",
    emoji: "🐯",
    name: { en: "Tiger", de: "Tiger" },
    videos: [V("ForBiggerBlazes"), V("ForBiggerMeltdowns"), V("ElephantsDream")],
  },
  {
    id: "spiderman",
    emoji: "🕷️",
    name: { en: "Spiderman", de: "Spiderman" },
    videos: [V("SubaruOutbackOnStreetAndDirt"), V("VolkswagenGTIReview"), V("WeAreGoingOnBullrun")],
  },
];

export function getCharacterVideo(characterId: CharacterId, day: number): string {
  const c = CHARACTERS.find((x) => x.id === characterId) ?? CHARACTERS[0]!;
  return c.videos[(day - 1) % c.videos.length]!;
}

const LANG_KEY = "cloudhop.lang";
const PLAN_KEY = "cloudhop.plan";
const PROGRESS_KEY = "cloudhop.progress";
const CHAR_KEY = "cloudhop.character";

export function getCharacter(): CharacterId | null {
  if (typeof window === "undefined") return null;
  const v = localStorage.getItem(CHAR_KEY) as CharacterId | null;
  return v && CHARACTERS.some((c) => c.id === v) ? v : null;
}
export function setCharacter(c: CharacterId) {
  localStorage.setItem(CHAR_KEY, c);
}


export function getLang(): Lang {
  if (typeof window === "undefined") return "en";
  return (localStorage.getItem(LANG_KEY) as Lang) || "en";
}
export function setLang(l: Lang) {
  localStorage.setItem(LANG_KEY, l);
}
export function getPlan(): Plan {
  if (typeof window === "undefined") return "ads";
  return (localStorage.getItem(PLAN_KEY) as Plan) || "ads";
}
export function setPlan(p: Plan) {
  localStorage.setItem(PLAN_KEY, p);
}
export function getCompleted(): number[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(PROGRESS_KEY) || "[]") as number[];
  } catch {
    return [];
  }
}
export function completeDay(day: number) {
  const next = Array.from(new Set([...getCompleted(), day])).sort((a, b) => a - b);
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(next));
}
