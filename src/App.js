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


  return (
    <div>
      <MainHeader />
      <PostsList posts={postsItems} />
      {/* {isAppeared?<div style={{color: "white"}}>text to be toggled</div>:null} */}
      {/* {isAppeared && <div style={{color: "white"}}>text to be toggled</div>} */}
      {/* <button type="button" onClick={()=>{setIsAppeared(!isAppeared)}}>Toggle</button> */}
    </div>
  );
}

export default App;
