import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { getPosts } from '../app/postsSlice';
import Chip from './Chip';
import Posts from './Posts';
import Spinner from './Spinner';

interface Post {
  body: string,
  id: number,
  reactions: number,
  tags: string[],
  title: string,
  userId: number,
}

const Home = () => {
  const dispatch = useAppDispatch();
  const { posts, isLoading, hasError } = useAppSelector(state => state.posts);
  const [innertext, setInnerText] = useState<string>('all');
  const [matched, setMatched] = useState<Post | null>(null);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const postInfoToShow = posts?.posts.map(post => post);
  const singlePost = postInfoToShow?.map(item => item);

  const tags = [
    'history', 'french', 'magical', 'mystery', 'classic',
  ];

  const handleMatch = (e: any) => {
    const innerText = e.target.innerText;
    setInnerText(innerText);

    if (innertext === 'all') {
      const allPosts = singlePost?.map(item => item);
      // @ts-ignore
      setMatched(allPosts)
    }

    const match = singlePost?.filter(post => post.tags.includes(innerText));
    // @ts-ignore
    setMatched(match)
  }

  // @ts-ignore
  const matchedPosts = matched?.map(item => item);
  const allPosts = singlePost?.map(item => item);

  const title = (
    <div className='flex justify-center m-5'>
      <h5 className='mb-2 text-2xl font-bold tracking-tight capitalize'>
        {innertext}
      </h5>
    </div>
  );

  if (isLoading) {
    return <div className='flex justify-center mt-9'><Spinner /></div>
  }

  if (hasError) {
    return <p>Error</p>
  }

  return (
    <>
      <div className='flex flex-wrap gap-3 justify-center mt-8 mb-8'>
        {tags.map(tag => <div key={tag} onClick={e => handleMatch(e)}>{<Chip genreChip text={tag} />}</div>)}
      </div>
      {title}
      {matchedPosts ? <Posts posts={matchedPosts} /> : <Posts posts={allPosts} />}
    </>
  )
}

export default Home;
