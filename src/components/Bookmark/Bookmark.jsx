import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    return (
        <div className='bg-neutral-200 p-2 m-4 shadow-sm rounded-sm w-full mx-auto'>
            <h3 className='text-sm text-gray-700 font-semibold'>{bookmark.title}</h3>
        </div>
    );
};
Bookmark.propTypes ={
    bookmark: PropTypes.object.isRequired
}
export default Bookmark;