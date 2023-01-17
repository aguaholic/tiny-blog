import Post from './Post';

const Posts = (posts: any) => {
  const postInfoToShow = posts?.posts.map((post: any) => post);
  const singlePost = postInfoToShow?.map((item: any) => (
    <Post key={item.id} post={item} />
  ));

  return (
    <div className='flex flex-wrap gap-4 justify-center'>
      {singlePost}
    </div>
  )
};

export default Posts;
