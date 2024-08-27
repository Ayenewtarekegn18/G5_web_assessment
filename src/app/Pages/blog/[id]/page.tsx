// src/app/Pages/blog/[id]/page.tsx
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogById, fetchBlogs } from '../../../utils/api';
import { setBlogs, setCurrentBlog } from '../../../store/Blogslice';
import BlogCard from '../../../components/BlogList/BlogCard';

const BlogDetail: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const blogs = useSelector((state: any) => state.blogs.currentBlog);
  const { id } = router.query;
  

  useEffect(() => {
    const getBlog = async () => {
      if (id) {
        const data = await fetchBlogById(id as string);
        dispatch(setCurrentBlog(data));
      }
    };
    getBlog();
  }, [id, dispatch]);

  if (!blogs) return <div>Loading...</div>;

  return (
    <div className="container mx-auto px-4 lg:px-8 py-12">
      {/* Title */}
      <div className="text-center mb-8">
        <h1 className="text-3xl lg:text-5xl font-semibold mb-4">
          {blogs.title}
        </h1>
      </div>

      {/* Featured Image */}
      <div className="flex justify-center mb-8">
        <img
          src={blogs.image}
          alt="Blog Detail"
          className="w-full max-w-4xl h-auto rounded-lg shadow-md"
        />
      </div>

      {/* Author */}
      <div className="flex items-center justify-center space-x-4 mb-8">
        <img
          src="/path/to/author-image.jpg"
          alt="Author"
          className="w-12 h-12 rounded-full"
        />
        <div className="text-gray-600 text-center">
          <p className="font-medium">{blogs.author ? blogs.author.id : "anon"}</p>
          <p>Software Engineer</p>
        </div>
      </div>

      {/* Blog Content */}
      <div className="prose max-w-none mx-auto mb-12 text-center lg:text-left">
        <p>{blogs.description}</p>
      </div>

      {/* Related Blogs */}
      <div className="mt-16">
        <h2 className="text-xl font-semibold mb-8 text-center lg:text-left">Related Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Blog Card */}
          <BlogCard blog={blogs} />
          <BlogCard blog={blogs} />
          <BlogCard blog={blogs} />
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
