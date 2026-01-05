import { ThemeProvider } from './ThemeContext';
import ThemeBtn from './ThemeBtn';

function App() {
  return (
    <ThemeProvider>
      <div className="flex flex-wrap min-h-screen h-screen bg-blue-500 dark:bg-violet-500 items-center transition-colors duration-300">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto shadow-md rounded-lg border border-gray-100 p-8 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
             <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Context API Theme Switcher
             </h1>
             <p className="mt-4 text-gray-600 dark:text-gray-400">
                This card changes color because it is inside the ThemeProvider!
             </p>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;