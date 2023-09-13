import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {
  const [blogs, setBllogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBllogs(data));
  }, []);
  return (
    <div className="w-2/3">
        <h1 className="text-3xl">Blogs: {blogs.length}</h1>
    </div>
  );
};

export default Blogs;
