"use client";
import axios from "axios";

const API_URL = "https://a2sv-backend.onrender.com";

export const fetchBlogs = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/blogs`);
    console.log("Blogs fetched successfully:", response);
    return response.data;
    
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
};

export const fetchBlogById = async (id: string) => {
  const response = await fetch(`https://a2sv-backend.onrender.com/api/blogs/${id}`);
  return response.json();
};
