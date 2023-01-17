import { Link, useParams } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';

const Article = () => {
  const { posts } = useAppSelector(state => state.posts);
  const { id } = useParams();

  const postInfoToShow = posts?.posts.map(post => post);
  const filtered = postInfoToShow?.find(item => item.id === Number(id))

  return (
    <div className='block'>
      <div className='flex justify-center mt-10'>
        <div className='block w-1/2 p-6 bg-white border border-gray-200 rounded-lg shadow-md'>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{filtered?.title}</h5>
          <p className='font-normal text-gray-700 dark:text-gray-400'>
            <span className='mb-1 text-lg font-semibold tracking-tight text-gray-900'>likes: </span>
            {filtered?.reactions}
          </p>
          <p className='font-normal text-gray-700 dark:text-gray-400'>{filtered?.body}</p>
        </div>
        <Link to='/'>back</Link>
      </div>
    </div>
  )
}

export default Article;
