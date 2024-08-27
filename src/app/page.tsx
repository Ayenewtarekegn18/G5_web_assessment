'use client'
import Image from "next/image";
import BlogList from "./components/BlogList/BlogList";

export default function Home() {
  return (
    <div className = "text-black">
    <BlogList/>
    </div>
  );
}
