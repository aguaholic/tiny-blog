import { Link } from 'react-router-dom';
import Chip from './Chip';

interface Post {
  title: string,
  id: number,
  reactions: number,
  body: string,
  tags: string[],
}

interface PostProps {
  post: Post | undefined,
}

const Post = ({ post }: PostProps) => {
  const chips = post?.tags.map((item: any) => <Chip key={item} text={item} />)

  return (
    <Link
      to={`/posts/${post?.id}`}
      className='block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'
    >
      <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{post?.title}</h5>
      <p className='font-normal text-gray-700 dark:text-gray-400'>{post?.body}</p>
      <div className='flex flex-row gap-3 justify-center mt-6'>{chips}</div>
    </Link>
  )
};

export default Post;
