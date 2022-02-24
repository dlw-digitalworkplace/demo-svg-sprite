import './App.css';
import Symbols from "./svg-symbols/Sybmols";

function App() {
  return (
    <div className="App">
      <svg>
        <use xlinkHref={`${Symbols.FilePath}${Symbols.Icon.IcoFolder}`} />
      </svg>
    </div>
  );
}

export default App;
