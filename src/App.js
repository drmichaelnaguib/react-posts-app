import MainHeader from "./components/layout/MainHeader";
import Post from "./components/Post";
import { useState } from "react";

function App() {
  const [isAppeared, setIsAppeared] = useState(true);
  const toggleHandler = () => {
    setIsAppeared(!isAppeared);
  };

  return (
    <div>
      <MainHeader />
      <Post title="Post 1" description="des 1" />
      <Post title="Post 2" description="des 2" />
      <Post title="Post 3" description="des 3" />
      <Post title="Post 4" description="des 4" />
      {isAppeared && (
        <div style={{ color: "white", marginTop: "50px" }}>toggle div</div>
      )}
      <button
        type="button"
        style={{ marginTop: "50px", cursor: "pointer" }}
        onClick={toggleHandler}
      >
        Toggle
      </button>
    </div>
  );
}

export default App;
