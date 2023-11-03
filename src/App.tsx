import "./App.css";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">test env : {import.meta.env.VITE_PUBLIC_BASE_URL}</h1>
    </>
  );
}

export default App;
