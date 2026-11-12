// =============================================================
// ALL TEXT, DATES, PHOTOS, AND MUSIC ARE CONFIGURED FROM THIS FILE ONLY.
// Change the values below to personalize the website.
// See README.md for the full guide.
// =============================================================

export type Photo = {
  /** Path to a photo file inside /public, e.g. "/photos/1.jpg". Leave "" if there's no photo yet. */
  src: string;
  alt: string;
  caption: string;
};

export type TimelineEvent = {
  date: string;
  description: string;
};

export const content = {
  // --- Identity ---
  partnerName: "Thiarra Mae",
  senderName: "Markyboi",
  age: "18",
  birthdayDate: "November 26",
  relationshipStartDate: "May 26, 2025",
  /**
   * The anniversary date in ISO format "YYYY-MM-DD", used to compute the
   * live "days together" counter automatically and in real time.
   * Leave "" if you don't want to show this counter.
   */
  relationshipStartDateISO: "2025-05-26" as string,
  nextMeetupDateISO: "" as string,
nextMeetupLocation: "",
nextMeetupWhenLabel: "",

  /**
   * Optional countdown to when you'll next see each other in person, shown
   * next to the days-together counter. Since you only know the month (not
   * the exact day), this counts down to the 1st of that month rather than
   * pretending to know a precise date. Leave nextMeetupDateISO as "" to
   * hide this countdown entirely.
   */
  
  /**
   * Optional PIN code (any number of digits). When set, visitors must enter
   * this code on a lock screen before the site unlocks — a nice way to make
   * sure only the right person opens it. Leave "" to skip the PIN screen
   * entirely.
   */
  accessPin: "112608" as string,
  /** Optional hint shown on the lock screen to help them guess the PIN. Leave "" to hide it. */
  pinHint: "Hint: The day first message 💛",

  // --- Love letter (each item becomes one short paragraph) ---
  loveLetterParagraphs: [
    "Happy Birthday Beng! Thank you so much for coming into my life. You brought so much happiness, warmth, and meaning into my everyday routine. Di na nako taason kay basin mo laong kaw gi Ai nako sanan disab ko kabayo mo himo love letter sanan basin mo tuyo imo luha kung taason ko pa. Thankyou for always there for me maskin lisod ang bida sabton, jaon gihapon kaw waya ako nimo gi pasagdan. I appreciate everything about you the way you listen, how easily you make me smile, and just having you by my side. You make life so much better, and I am endlessly lucky to have you. Stay who you are beng.",
    "I hope malipayon kaw saimo birthday kuman, pasensya na kung ini ra anay na effort ako mahatag saimo kuman but puhon kung kaloy an sa ginoo mahatag ko imo mga gusto. Di na nako pag taason pa kay basin mo hilak kaw arang mo raba ka emotional. I love you very very much Beng!",
  ] as string[],

  // --- Wishes & prayers ---
  wishesIntro: "A few things I keep hoping for you, Beng:",
  wishes: [
    "May you always be healthy and happy.",
    "May all your dreams come true, ang isa na tupad na and that's me HEHEHE.",
    "May you always be surrounded by people who love you.",
    "May we keep finding reasons to smile together.",
    "May 18 be the year everything you've worked quietly for starts falling into place.",
  ] as string[],

  // --- Photos ---
  heroPhoto: {
    src: "/photos/gwapa.jpg",
    alt: "Mark and Thiarra smiling together",
    caption: "",
  } as Photo,
  closingPhoto: {
    src: "/photos/beauty.jpg",
    alt: "A warm closing photo",
    caption: "",
  } as Photo,
  galleryPhotos: [
    {
      src: "/photos/1.jpg",
      alt: "",
      caption: "",
    },
    {
      src: "/photos/2.jpg",
      alt: "",
      caption: "u",
    },
    {
      src: "/photos/3.jpg",
      alt: "",
      caption: "",
    },
    {
      src: "/photos/4.jpg",
      alt: "",
      caption: "",
    },
    {
      src: "/photos/5.jpg",
      alt: "",
      caption: "",
    },
    {
      src: "/photos/6.jpg",
      alt: "",
      caption: "",
    },
    {
      src: "/photos/7.jpg",
      alt: "",
      caption: "",
    },
    {
      src: "/photos/8.jpg",
      alt: "",
      caption: "",
    },
    {
      src: "/photos/9.jpg",
      alt: "",
      caption: "",
    },
    {
      src: "/photos/10.jpg",
      alt: "",
      caption: "",
    },
    {
      src: "/photos/11.jpg",
      alt: "",
      caption: "",
    },
    {
      src: "/photos/12.jpg",
      alt: "",
      caption: "",
    },
  ] as Photo[],

  // --- Relationship timeline ---
  timeline: [
    { date: "May 26, 2025", description: "The start of our story" },
    {
      date: "Somewhere in between",
      description:
        "Countless small moments that made me fall for you more than the last",
    },
    {
      date: "Every day since",
      description:
        "Learning what it means to actually love someone, one ordinary day at a time",
    },
    {
      date: "Today",
      description: "Still so many stories left for us to write together",
    },
  ] as TimelineEvent[],

  // --- Reasons why (each item becomes one flip card) ---
  reasonsWhy: [
    "The way you shy at me when you caught me staring at you.",
    "How you check in on me even on your busiest, most tiring days.",
    "You remember tiny little things I mention once and never bring up again.",
    "You're kind to me even when sometimes its hard to understand my attitude.",
    "You make far away feel a little less far.",
    "You're just you, and somehow that's already more than enough.",
  ] as string[],

  // --- About the distance (each item becomes one short paragraph) ---
  distanceParagraphs: [
    "Ang pinaka nag lisod gajod kita HAHAHAHA ang ato setwasyon, kabayo nata duwa kung uman jaon na problema pero kabayo kaw kabyo ako na dili kita always inani ra, mo abot amg paahon na mahimo na nato ato mga gusto himuon ng di nata mag problema just hold ra lamang ajaw pag buhi tanan kayanon nato.",
    "Sometimes kabayo ko kapyan kaw saato setwasyon pero huyat ra lamang kita beng mas gana pa ang mo abot saato puhon.",
  ] as string[],

  // --- When we meet again (bucket list for the reunion) ---
  reunionBucketList: [
    "Hug you first before saying anything else.",
    "Find whatever food you've been wanting to try there.",
    "Walk around slowly, no rush, just us.",
    "Take way too many photos we'll never actually post.",
    "Just sit somewhere quiet together and not have to say goodbye at the end.",
  ] as string[],

  // --- Surprise interactions ---
  hugMessage:
    "Sending you a warm hug, Beng. Even from far away, it still feels close.",
  secretButtonLabel: "One more thing",
  secretMessage: "I love you, Beng, today and every day.",
  /** Tapping the generator button below shows a random line from this list. */
  sweetLines: [
    "You're my favorite notification.",
    "Distance is just a math problem, my feelings for you aren't.",
    "If missing you was a sport, I'd have a trophy by now.",
    "You make ordinary Tuesdays feel like something.",
    "I'd cross time zones just to hear you laugh.",
    "You're the best part of my day, every single day.",
    "Home isn't a place, it's wherever you are.",
    "Still not tired of you. Never will be.",
  ] as string[],

  // --- Background music ---
  // Put an audio file in public/music/ and fill in the path here, e.g. "/music/song.mp3"
  // A direct URL to an audio file also works — but it must point straight at
  // the audio file itself, not a YouTube/Spotify/Apple Music page. A page
  // link (like music.youtube.com/watch?v=...) will not play; the <audio>
  // tag can only stream an actual .mp3/.ogg/.wav file.
  songUrl: "/music/about-you.mp3" as string,
  songTitle: "About You by The 1975",
};

export type Content = typeof content;
