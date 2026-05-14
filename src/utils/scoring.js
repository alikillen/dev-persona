//business logic - scoring system

// Determines final developer archetype
// based on accumulated personality traits

export const getPersona = (scores) => {
  // Default to 0 if a trait was never assigned during the quiz
  const chaos = scores.chaos || 0;
  const bravery = scores.bravery || 0;
  const patience = scores.patience || 0;
  const ambition = scores.ambition || 0;
  const practicality = scores.practicality || 0;

  // CHAOS GREMLIN
  if (chaos >= 12) {
    return {
      title: "The Chaos Gremlin",
      emoji: "🔥",
      description:
        "Deploys on Friday afternoons and considers production a testing environment.",
    };
  }

  // STARTUP HUSTLER
  if (chaos >= 9 && ambition >= 7) {
    return {
      title: "The Startup Hustler",
      emoji: "🚀",
      description:
        "Ships MVPs at terrifying speed and believes sleep is optional.",
    };
  }

  // LEGACY WHISPERER
  if (patience >= 10) {
    return {
      title: "The Legacy Whisperer",
      emoji: "🧙",
      description:
        "Can debug a 14-year-old enterprise app nobody else dares touch.",
    };
  }

  // ENTERPRISE KNIGHT
  if (practicality >= 9 && patience >= 7) {
    return {
      title: "The Enterprise Knight",
      emoji: "🛡️",
      description:
        "Writes documentation voluntarily and respects change management processes.",
    };
  }

  // BUG HUNTER
  if (bravery >= 9) {
    return {
      title: "The Bug Hunter",
      emoji: "🐛",
      description:
        "Fearlessly dives into stack traces that would make others quit tech entirely.",
    };
  }

  // HIGH AMBITION
  if (ambition >= 9) {
    return {
      title: "Tech Influencer",
      emoji: "📈",
      description:
        "Already planning a LinkedIn post about scaling your side project to 10 million users."
    };
  }

  // BALANCED / SAFE
  if (
    practicality >= 6 &&
    patience >= 6 &&
    chaos <= 6
  ) {
    return {
      title: "Balanced Engineer",
      emoji: "⚖️",
      description:
        "Avoids unnecessary chaos and occasionally remembers to write tests."
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


