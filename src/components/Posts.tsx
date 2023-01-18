import Post, { Post as PostType } from './Post';


const Posts = (posts: any) => {
  const postInfoToShow = posts?.posts.map((post: PostType) => post);
  const singlePost = postInfoToShow?.map((item: PostType) => (
    <Post key={item.id} post={item} />
  ));

  return (
    <div className='flex flex-wrap gap-4 justify-center'>
      {singlePost}
    </div>
  )
};

export default Posts;
