import React from 'react';

const BlogCard = ({ title, content, category, tags, featuredImage, readingTime }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {featuredImage && (
        <img src={featuredImage} alt={title} className="w-full h-48 object-cover" />
      )}
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 mb-2">{content}</p>
        <p className="text-gray-500 mb-2">Category: {category}</p>
        <p className="text-gray-500 mb-2">Tags: {tags}</p>
        <p className="text-gray-500 mb-2">Reading Time: {readingTime}</p>
      </div>
    </div>
  );
};

export default BlogCard;
