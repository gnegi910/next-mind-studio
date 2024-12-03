import React from "react";
import { Link } from "react-router-dom";
import "./Blogs.css";

const blogPosts = [
  { id: 1, title: "Exploring React Components", summary: "Learn the basics of React components...", content: "Full content for Blog 1." },
  { id: 2, title: "Understanding React Hooks", summary: "Hooks simplify your React code...", content: "Full content for Blog 2." },
  { id: 3, title: "React Router Simplified", summary: "Navigate your app with React Router...", content: "Full content for Blog 3." },
];

const Blogs = () => {
  return (
    <div className="blogs-container">
      <h1>Our Blog</h1>
      <div className="blog-grid">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-card">
            <h2>{post.title}</h2>
            <p>{post.summary}</p>
            <Link to={`/blog/${post.id}`} className="read-more">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
