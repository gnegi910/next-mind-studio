import React from "react";
import { useParams } from "react-router-dom";

const blogPosts = [
  { id: 1, title: "Exploring React Components", content: "Full content for Blog 1." },
  { id: 2, title: "Understanding React Hooks", content: "Full content for Blog 2." },
  { id: 3, title: "React Router Simplified", content: "Full content for Blog 3." },
];

const BlogPost = () => {
  const { id } = useParams(); // Extract the blog ID from the URL
  const post = blogPosts.find((post) => post.id === parseInt(id));

  if (!post) {
    return <h1>Post Not Found</h1>;
  }

  return (
    <div className="blog-post-container">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default BlogPost;
