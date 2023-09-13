import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks, readingTime}) => {
    // console.log(bookmarks);
    return (
        <div className="md:w-1/3 bg-neutral-300 p-4">
            <div className='bg-neutral-200 p-4 my-5'>
                <h3 className='text-2xl font-semibold text-center'>Reading Time: {readingTime}</h3>
            </div>
            <h3 className='text-2xl text-black text-center bg-gray-400 p-2 font-semibold'>Bookmark Blogs: {bookmarks.length} </h3>
            {
                bookmarks.map((bookmark, idx) => <Bookmark bookmark={bookmark} key={idx}></Bookmark> )
            }
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired
}
export default Bookmarks;