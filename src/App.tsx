import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">Base React Project</h1>
        <p className="text-gray-600 mb-8">Vite + React + TS + Tailwind + Redux Toolkit</p>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
          onClick={() => setCount((c) => c + 1)}
        >
          Count is {count}
        </button>
      </div>
    </div>
  );
}

export default App;
