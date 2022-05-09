import Home from "./Home";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "The English Dictionary";
  }, []);
  return <Home />;
}

export default App;
