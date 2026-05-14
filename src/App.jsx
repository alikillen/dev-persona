//npm run dev

import { useState } from 'react';
import { questions } from './data/questions';
import Results from './components/Results';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({});

  // CHECK IF QUIZ IS FINISHED
  if (currentQuestion >= questions.length) {
    return <Results scores={scores} />;
  }

  // ONLY GET QUESTION IF QUIZ NOT FINISHED
  const question = questions[currentQuestion];

  const handleAnswer = (traits) => {
    const updatedScores = { ...scores };

    for (const trait in traits) {
      updatedScores[trait] = (updatedScores[trait] || 0) + traits[trait];
    }

    setScores(updatedScores);

    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-indigo-950 via-zinc-950 to-fuchsia-950 text-white flex items-center justify-center p-6 overflow-hidden'>
      <div className='absolute w-96 h-96 bg-blue-500/20 blur-3xl rounded-full top-10 left-10'></div>
      <div className='absolute w-96 h-96 bg-pink-500/20 blur-3xl rounded-full bottom-10 right-10'></div>

      <div className='relative w-full max-w-2xl backdrop-blur-xl bg-white/10 border border-white/10 rounded-[32px] shadow-2xl p-10 text-white'>
        <div className='mb-8'>
          <div className='flex justify-between items-center text-sm text-zinc-300 mb-3'>
            <span>
              Question {currentQuestion + 1} / {questions.length}
            </span>

            <span className='font-semibold tracking-wide'>DEV PERSONA</span>
          </div>

          <div className='w-full bg-white/10 rounded-full h-3 overflow-hidden'>
            <div
              className='bg-gradient-to-r from-cyan-400 to-blue-500 h-3 rounded-full transition-all duration-500'
              style={{
                width: `${((currentQuestion + 1) / questions.length) * 100}%`,
              }}
            />
          </div>
        </div>

        <h1 className='text-4xl font-black leading-tight mb-10 text-white'>
          {question.question}
        </h1>

        <div className='flex flex-col gap-4'>
          {question.answers.map((answer) => (
            <button
              key={answer.text}
              onClick={() => handleAnswer(answer.traits)}
              className='
              group
              relative
              overflow-hidden
              bg-white/5
              hover:bg-white/15
              border border-white/10
              hover:border-cyan-400/40
              p-5
              rounded-2xl
              text-left
              transition-all
              duration-300
              hover:scale-[1.02]
              hover:shadow-xl
            '
            >
              <span className='relative z-10 text-lg font-medium'>
                {answer.text}
              </span>

              <div
                className='
              absolute inset-0
              opacity-0
              group-hover:opacity-100
              transition-opacity
              duration-300
              bg-gradient-to-r
              from-cyan-500/10
              to-blue-500/10
            '
              ></div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
