  // src/app/components/BlogList/BlogCard.tsx
  import React from 'react';

  const BlogCard = ({ blog }: { blog: any }) => {
    return (
      <div className="border-t border-gray-300 py-6 max-w-5xl mx-auto font-montserrat flex justify-between">
        {/* Container for blog card content */}
        <div className="flex flex-col md:flex-row">
          {/* Right Section (Image for mobile on top, for large screens on the side) */}
        
        
          <div className="w-full md:w-3/5 md:pl-4">
            {/* Author Info */}
            <div className="flex items-center mb-3">
              <img
                src={blog.author? blog.author.image:""} // Assuming author has an image field
                alt={blog.author? blog.author.name:""}
                className="w-8 h-8 rounded-full mr-3"
              />
              <div>
                <h3 className="font-semibold">{blog.author?blog.author.name:""}</h3>
                <span className="text-sm text-gray-500">
                  {new Date(blog.createdAt).toDateString()}
                </span>
                <span className="text-sm text-gray-500 ml-2">
                  {blog.author?blog.author.role : 'Software Engineer'}
                </span>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-lg font-bold mb-2">{blog.title}</h2>

            {/* Description */}
            <p className="text-gray-500 mb-3">
              {blog.description ||
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap space-x-2">
              {blog.tags?.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-gray-200 text-xs text-gray-700 rounded-lg"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        
        

          {/* Left Section */}
          <div className="w-full md:w-2/5 mb-4 md:mb-0">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-auto object-cover rounded-lg lg:mt-10"
              style={{ height: '70%',width:"70% " }} // Adjust image height to content height
            />
          </div>
        </div>
      </div>
    );
  };

  export default BlogCard;
