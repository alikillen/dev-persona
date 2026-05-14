//business logic - scoring system

export const getPersona = (scores) => {
  const chaos = scores.chaos || 0;
  const bravery = scores.bravery || 0;
  const patience = scores.patience || 0;
  const ambition = scores.ambition || 0;
  const practicality = scores.practicality || 0;

  // CHAOS GREMLIN
  if (chaos >= 8) {
    return {
      title: "The Chaos Gremlin",
      emoji: "🔥",
      description:
        "Deploys on Friday afternoons and considers production a testing environment.",
    };
  }

  // STARTUP HUSTLER
  if (ambition >= 7 && bravery >= 4) {
    return {
      title: "The Startup Hustler",
      emoji: "🚀",
      description:
        "Ships MVPs at terrifying speed and believes sleep is optional.",
    };
  }

  // LEGACY WHISPERER
  if (patience >= 7 && practicality >= 5) {
    return {
      title: "The Legacy Whisperer",
      emoji: "🧙",
      description:
        "Can debug a 14-year-old enterprise app nobody else dares touch.",
    };
  }

  // ENTERPRISE KNIGHT
  if (practicality >= 8) {
    return {
      title: "The Enterprise Knight",
      emoji: "🛡️",
      description:
        "Writes documentation voluntarily and respects change management processes.",
    };
  }

  // BUG HUNTER
  if (bravery >= 7) {
    return {
      title: "The Bug Hunter",
      emoji: "🐛",
      description:
        "Fearlessly dives into stack traces that would make others quit tech entirely.",
    };
  }

  // OVERTHINKER
  if (patience >= 6 && ambition <= 3) {
    return {
      title: "The Overthinker",
      emoji: "🧠",
      description:
        "Spent 6 hours researching the perfect framework for a calculator app.",
    };
  }

  // DEFAULT PERSONA
  return {
    title: "The Vibe Coder",
    emoji: "😎",
    description:
      "Builds first, refactors later, somehow still gets things working.",
  };
};