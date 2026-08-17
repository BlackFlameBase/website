/*
  BLACK FLAME — HOME CONTENT MODEL
  --------------------------------
  This object is deliberately separate from the HTML/CSS so the page can later
  be wired to a CMS without redesigning the template.
*/
window.BLACK_FLAME_CONTENT = {
  brand: {
    name: "BLACK FLAME"
  },

  navigation: [
    { label: "HOME", href: "index.html", current: true },
    { label: "BLACK FLAME", href: "black-flame.html" },
    { label: "BOOK", href: "book.html" },
    { label: "ARTCHIVE", href: "artchive.html" },
    { label: "SHOP", href: "shop.html" },
    { label: "ABOUT", href: "about.html" }
  ],

  hero: {
    eyebrow: "WELCOME TO",
    title: "BLACK FLAME",
    core: "A living system for creators.",
    orientation: "Black Flame is an institution and philosophy built around the creative principle, the creator, and the development of a sustained creative life.",
    primary: { label: "ENTER BLACK FLAME", href: "black-flame.html" },
    soundPrompt: "ENTER WITH SOUND",
    image: "assets/images/living-black-flame.png",
    imageAlt: "Abstract living black flame",
    system: {
      heading: "THE CREATOR SYSTEM",
      stages: ["FEEL", "TRANSMUTE", "TRANSFORM"],
      concept: "CHAOSIS",
      conceptSub: "INTO FORM",
      statements: ["A SYSTEM FOR CREATORS", "A PATH FOR LIFE", "A FIRE THAT REFINES"]
    }
  },

  gateways: [
    { label: "Creative Principle", target: "creative-principle" },
    { label: "The Complete System", target: "complete-system" },
    { label: "Creative Works", target: "creative-works" },
    { label: "Editions & Collectibles", target: "editions-collectibles" },
    { label: "The Origin", target: "the-origin" }
  ],

  teasers: [
    {
      id: "creative-principle",
      pageLabel: "BLACK FLAME",
      heading: "Creative Principle",
      body: "Black Flame is an institution and philosophy built around the study and practice of the Black Flame—the living creative principle through which experience becomes creation and creation participates in the formation of the creator.",
      body2: "The wider Creator System develops a structured way of understanding that relationship without reducing it to productivity alone.",
      cta: { label: "ENTER BLACK FLAME", href: "black-flame.html" },
      status: "",
      image: "",
      imageAlt: ""
    },
    {
      id: "complete-system",
      pageLabel: "THE BOOK",
      heading: "The Complete System",
      body: "The Black Flame book develops the philosophy into its complete framework: the creative principle, the creator who carries it, the conditions that shape its operation, and the practices through which a creative life is developed and sustained.",
      body2: "The book is currently in development.",
      cta: { label: "VIEW THE BOOK", href: "book.html" },
      status: "IN DEVELOPMENT",
      image: "",
      imageAlt: ""
    },
    {
      id: "creative-works",
      pageLabel: "ARTCHIVE",
      heading: "Creative Works",
      body: "The Artchive preserves the creative works produced through Black Flame: music, visual work, sonic worlds, environments, film, experiments, and other realized forms.",
      body2: "It is an archive of expression rather than a chronological feed.",
      cta: { label: "BLACK FLAME ARTCHIVE", href: "artchive.html" },
      status: "",
      image: "",
      imageAlt: ""
    },
    {
      id: "editions-collectibles",
      pageLabel: "SHOP",
      heading: "Editions & Collectibles",
      body: "Books, editions, objects, apparel, prints, digital works, and selected material from Black Flame.",
      body2: "The shop will open as material becomes available.",
      cta: { label: "BROWSE THE SHOP", href: "shop.html" },
      status: "COMING SOON",
      image: "",
      imageAlt: ""
    },
    {
      id: "the-origin",
      pageLabel: "ABOUT",
      heading: "The Origin",
      body: "Black Flame emerged from sustained creative practice, study, experimentation, and the effort to understand the creator as a system.",
      body2: "Its founders embody the work through their own creative practices, bodies of work, and continuing development.",
      cta: { label: "MEET THE FOUNDERS", href: "about.html" },
      status: "",
      image: "",
      imageAlt: ""
    }
  ],

  subscriber: {
    eyebrow: "SUBSCRIBER LAYER",
    title: "Enter Black Flame",
    body: "Receive selected writings, book-development material, and subscriber-only transmissions.",
    primerTitle: "BLACK FLAME: A PRIMER —",
    primerBody: "a free introductory document delivered to subscribers as the first entry into the system.",
    cta: "RECEIVE THE PRIMER",
    endpoint: "" // future newsletter / CMS integration endpoint
  },

  livingLayer: {
    eyebrow: "LIVING LAYER",
    title: "Black Flame in motion."
  },

  social: [
    { id: "substack", label: "Substack", href: "#", enabled: true, icon: "assets/icons/substack.svg" },
    { id: "youtube", label: "YouTube", href: "#", enabled: true, icon: "assets/icons/youtube.svg" },
    { id: "spotify", label: "Spotify", href: "#", enabled: true, icon: "assets/icons/spotify.svg" },
    { id: "instagram", label: "Instagram", href: "#", enabled: true, icon: "assets/icons/instagram.svg" },
    { id: "tiktok", label: "TikTok", href: "#", enabled: true, icon: "assets/icons/tiktok.svg" }
  ],

  footer: {
    statement: "BLACK FLAME IS A LIVING SYSTEM FOR CREATORS.",
    copyright: "© BLACK FLAME. ALL RIGHTS RESERVED.",
    links: [
      { label: "CONTACT", href: "mailto:" },
      { label: "INQUIRIES", href: "mailto:" },
      { label: "TERMS", href: "#" },
      { label: "PRIVACY", href: "#" }
    ]
  }
};
