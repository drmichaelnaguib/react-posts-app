import PostsList from "./components/PostsList";
import MainHeader from "./components/layout/MainHeader"
import { useState } from "react";
import PostsList from "./components/PostsList";

const postsItems = [
  { title: "post one", content: "desc one" },
  { title: "post two", content: "desc two" },
  { title: "post three", content: "desc three" },
  { title: "post four", content: "desc four" },
  { title: "post five", content: "desc five" },
  { title: "post six", content: "desc six" },
  { title: "post seven", content: "desc seven" },
  { title: "post eight", content: "desc eight" },
]

function App() {

  // lazem nesta5dem ay hook gwa el functional component
  // const [isAppeared, setIsAppeared] = useState(true)
  // let toggledContent= <div style={{color: "white"}}>text to be toggled</div>
  // if (isAppeared===false){
  //   toggledContent=null
  // }


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
