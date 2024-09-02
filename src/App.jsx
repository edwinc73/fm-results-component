import "./App.scss";
import Results from "./components/Results";
import Summary from "./components/Summary";

function App() {
  return (
    <main className="flex flex-col md:flex-row justify-start md:justify-between w-full max-w-2xl mx-auto md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:shadow-2xl md:rounded-[2rem] overflow-clip">
      <Results />
      <Summary />
    </main>
  );
}

export default App;
