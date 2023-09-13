import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddToBookmars, handleMarkAsRead }) => {
  const {
    id,
    title,
    author,
    author_img,
    posted_date,
    cover,
    reading_time,
    hashtag,
  } = blog;
  return (
    <div className="mb-10  space-y-4">
      <img
        className="rounded-lg"
        src={cover}
        alt={`cover pic of the title ${title}}`}
      />
      <div className="flex justify-between my-4">
        <div className="flex">
          <img
            className="w-[45px] h-[45px] rounded-full"
            src={author_img}
            alt=""
          />
          <div className="ml-4">
            <h3 className="text-2xl font-semibold">{author}</h3>
            <p className="text-sm text-gray-400">Published-on: {posted_date}</p>
          </div>
        </div>
        <div className="flex items-center">
          <span>{reading_time} min read</span>
          <button
            onClick={() => handleAddToBookmars(blog)}
            className="ml-2 text-2xl text-red-500"
          >
            <FaBookmark />
          </button>
        </div>
      </div>
      <h2 className="text-2xl font-bold text-black">{title}</h2>
      <p className="text-sm text-gray-400">{hashtag}</p>
      <button onClick={() => handleMarkAsRead(reading_time, id)} className="text-sm text-purple-500 border-b-2">
        Mark As Read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmars: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func.isRequired
};

export default Blog;
