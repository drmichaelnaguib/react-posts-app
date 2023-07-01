import PostsList from "./components/PostsList";
import MainHeader from "./components/layout/MainHeader";
import { useState } from "react";

function App() {
  const [isPostsListVisible, setIsPostsListVisible] = useState(true);
  const [counter, setCounter] = useState(0);

  function buttonClickHandler() {
    setIsPostsListVisible(!isPostsListVisible);
  }
  function incrementHandler() {
    setCounter(counter + 1);
  }
  // function renderPostsList() {
  //   if (isPostsListVisible) return <PostsList />;
  //   return null;
  // }
  // const renderPostsList = () => (isPostsListVisible ? <PostsList /> : null);
  return (
    <div>
      <MainHeader />
      {/* {renderPostsList()} */}
      {/* {isPostsListVisible ? <PostsList /> : null} */}
      {isPostsListVisible && <PostsList />}
      <button onClick={buttonClickHandler}>Click me!</button>
      <p style={{ color: "white" }}>{counter}</p>
      <button onClick={incrementHandler}> increment by 1</button>
    </div>
  );
}

export default App;
