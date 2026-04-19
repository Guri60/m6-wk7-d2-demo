import { useParams } from "react-router-dom";
import { posts } from "../data";

export default function PostDetail() {
  const { id } = useParams();
  const post = posts.find(p => p.id === parseInt(id));

  if (!post) return <h2>Post not found</h2>;

  return (
    <div>
      <h2>Blog</h2>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
}