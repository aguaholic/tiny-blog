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
  const [itext, setInnerText] = useState<string>('');
  const [matched, setMatched] = useState<Post | null>(null);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const postInfoToShow = posts?.posts.map(post => post);
  const singlePost = postInfoToShow?.map(item => item);

  const tags = [
    // 'all',
    'history', 'french', 'magical', 'mystery', 'classic',
  ];

  const handleMatch = (e: any) => {
    const innerText = e.target.innerText;
    setInnerText(innerText)
    const match = singlePost?.filter(post => post.tags.includes(innerText));

    // @ts-ignore
    setMatched(match)
  }
  // @ts-ignore
  const matchedPosts = matched?.map(item => item);

  const title = <div className='flex justify-center m-5'><h5 className='mb-2 text-2xl font-bold tracking-tight capitalize'>{itext}</h5></div>

  if (isLoading) {
    return <div className='flex justify-center mt-9'><Spinner /></div>
  }

  if (hasError) {
    return <p>Error</p>
  }

  return (
    <>
      <div className='flex flex-wrap gap-3 justify-center mt-8 mb-8'>
        {tags.map(tag => <button key={tag} onClick={e => handleMatch(e)}>{<Chip text={tag} />}</button>)}
      </div>
      {title}
      {matchedPosts && <Posts posts={matchedPosts} />}
      {/* {(matchedPosts < 1) ?
        <Posts posts={posts} />
        :
        <Posts posts={matchedPosts} />
      } */}
    </>
  )
}

export default Home;
