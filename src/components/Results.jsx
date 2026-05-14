import { getPersona } from '../utils/scoring';

function Results({ scores }) {
  const persona = getPersona(scores);

  return (
    <div className='min-h-screen bg-gradient-to-br from-indigo-950 via-zinc-950 to-fuchsia-950 text-white flex items-center justify-center p-6'>
      <div className='absolute w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full top-20 left-20'></div>
      <div className='absolute w-96 h-96 bg-pink-500/20 blur-3xl rounded-full bottom-20 right-20'></div>

      <div className='relative max-w-2xl w-full backdrop-blur-xl bg-white/10 border border-white/10 rounded-[32px] p-10 shadow-2xl text-center'>
        <div className='text-8xl mb-6 animate-bounce'>{persona.emoji}</div>

        <p className='uppercase tracking-[0.3em] text-cyan-300 text-sm mb-3'>
          Your Engineering Archetype
        </p>

        <h1 className='text-5xl font-black mb-6 text-white'>{persona.title}</h1>

        <p className='text-white text-xl leading-relaxed mb-10'>
          {persona.description}
        </p>

        <div className='bg-white/5 border border-white/10 rounded-3xl p-6 text-left'>
          <h2 className='text-xl font-bold mb-6'>Personality Stats</h2>

          {Object.entries(scores).map(([trait, value]) => (
            <div key={trait} className='mb-5'>
              <div className='flex justify-between mb-2'>
                <span className='capitalize text-zinc-300'>{trait}</span>

                <span className='font-bold'>{value}</span>
              </div>

              <div className='w-full bg-white/10 rounded-full h-3 overflow-hidden'>
                <div
                  className='bg-gradient-to-r from-cyan-400 to-blue-500 h-3 rounded-full'
                  style={{ width: `${value * 10}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Results;
