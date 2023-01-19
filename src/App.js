import "./App.css";
import { TopBar } from "./components";
import Single from "./components/pages/single/Single";
import Write from "./components/pages/write/Write";

function App() {
  return (
    <div>
      <TopBar />

      {/* <Single /> */}
      <Write />
    </div>
  );
}

export default App;
