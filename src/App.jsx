import "./App.css";
import Header from "./components/Header/Header";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import { useState } from "react";
function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmars = () =>{
    console.log('bookarks adding!')
  }
  return (
    <>
      <Header></Header>
      <div className="md:flex gap-4 max-w-5xl mx-auto">
        <Blogs handleAddToBookmars = {handleAddToBookmars}></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </>
  );
}

export default App;
