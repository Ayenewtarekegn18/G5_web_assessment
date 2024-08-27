// src/app/components/BlogList/BlogList.tsx
'use client'

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogById, fetchBlogs } from '../../utils/api';
import { setBlogs, setCurrentBlog } from '../../store/Blogslice';
import BlogCard from './BlogCard';
import Link from "next/link"

const BlogList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const blogs = useSelector((state: any) => state.blogs.blogs);

  useEffect(() => {
    const getBlogs = async () => {
      const data = await fetchBlogs();
      dispatch(setBlogs(data));
    };
    getBlogs();
  }, [dispatch]);

  const filteredBlogs = blogs.filter((blog: { title: string }) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCardClick = async (id: string) => {
    const data = await fetchBlogById(id);
    console.log("data:",data)
    dispatch(setCurrentBlog(data));
  };

  return (
    <div className="p-4">
      <div className='flex justify-start gap-80'>
        <h1 className='text-3xl font-bold ml-20'>
          Blogs
          </h1>
      {/* Search Input */}
      <div className = "flex justify-center gap-10 ml-20">

      <input
        type="text"
        placeholder="Search blogs..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 p-2 border border-gray-300 rounded-full"
        />
      <Link href="/donate" className="bg-[#264FAD] text-white w-35 h-10 px-4 py-2 rounded-full">
                  New Blogs
                </Link>

        </div>
        </div>
      {/* Blog List */}
      <div className="flex flex-col flex-wrap gap-4 mx-30">
        {filteredBlogs.slice(0, 5).map((blog: any, index : number) => (
        <Link key={index} href={`/blog/${blog._id}`} onClick={() => handleCardClick(blog._id)}>
          <BlogCard
            key={index}
            blog={{
              _id: blog._id,
              image: blog.image,
              title: blog.title,
              description: blog.description,
              author: blog.author ? blog.author.name : "Anonymous",
              createdAt: blog.createdAt,
              tag: blog.tag
            }}
            />
            </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
