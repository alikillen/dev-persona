//static questions data

//traits:
//chaos
//bravery
//patience
//ambition
//practicality

export const questions = [
  {
    id: 1,
    question: "Would you rather debug...",
    answers: [
      {
        text: "Production outage at 2am",
        traits: { chaos: 2, bravery: 1 }
      },
      {
        text: "CSS centering issue for 8 hours",
        traits: { patience: 2 }
      }
    ]
  },

  {
    id: 2,
    question: "You'd rather be paid in...",
    answers: [
      {
        text: "Bitcoin",
        traits: { ambition: 2, chaos: 1 }
      },
      {
        text: "Pizza",
        traits: { practicality: 2 }
      }
    ]
  },

  {
    id: 3,
    question: "You discover the production issue was caused by your code. You:",
    answers: [
      {
        text: "Fix it quietly and hope nobody notices",
        traits: { chaos: 2, speed: 1 }
      },
      {
        text: "Immediately post a detailed incident report",
        traits: { discipline: 2 }
      },
      {
        text: "Blame caching",
        traits: { chaos: 3 }
      }
    ]
  },

  {
    id: 4,
    question: "Your ideal code review comment is:",
    answers: [
      {
        text: "LGTM",
        traits: { speed: 2 }
      },
      {
        text: "One tiny suggestion...",
        traits: { patience: 2 }
      },
      {
        text: "Have you considered rewriting this entire architecture?",
        traits: { overengineering: 3 }
      }
    ]
  },

  {
    id: 5,
    question: "How many browser tabs do you currently have open?",
    answers: [
      {
        text: "Less than 10",
        traits: { discipline: 2 }
      },
      {
        text: "20+",
        traits: { chaos: 2 }
      },
      {
        text: "idk, my browser crashed",
        traits: { chaos: 4 }
      }
    ]
  },

  {
    id: 6,
    question: "You need to center a div. You:",
    answers: [
      {
        text: "Use flex confidently",
        traits: { discipline: 2 }
      },
      {
        text: "Google it again",
        traits: { practicality: 2 }
      },
      {
        text: "Accept defeat",
        traits: { chaos: 1 }
      }
    ]
  },

  {
    id: 7,
    question: "Your relationship with documentation is:",
    answers: [
      {
        text: "I read the official docs",
        traits: { discipline: 2 }
      },
      {
        text: "I watch a random YouTube tutorial",
        traits: { curiosity: 2 }
      },
      {
        text: "I copy Stack Overflow snippets and pray",
        traits: { chaos: 3 }
      }
    ]
  },

  {
    id: 8,
    question: "What best describes your deployment strategy?",
    answers: [
      {
        text: "CI/CD pipelines",
        traits: { discipline: 3 }
      },
      {
        text: "Drag files onto the server manually",
        traits: { chaos: 2 }
      },
      {
        text: "Deploy Friday at 4:55pm",
        traits: { chaos: 5 }
      }
    ]
  }
]