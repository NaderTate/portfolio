"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import {
  IoChevronBackCircleOutline,
  IoChevronForwardCircleOutline,
} from "react-icons/io5";

import PostCard from "./PostCard";

import { HorizontalScroll } from "../lib/helpers";

type Props = {};

const Posts = ({}: Props) => {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((res) => {
        setPosts(res);
      });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative text-left max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Latest posts
      </h3>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-50"
        onClick={() => {
          HorizontalScroll("postsContainer", window.innerWidth);
        }}
      >
        <IoChevronForwardCircleOutline size={25} />
      </button>
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-50  transition-size"
        onClick={() => {
          HorizontalScroll("postsContainer", -window.innerWidth);
        }}
      >
        <IoChevronBackCircleOutline size={25} />
      </button>
      <div
        id="postsContainer"
        className=" w-screen flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thumb-green-300/80 scrollbar-thin scrollbar-track-gra/20"
      >
        {posts.map((post, i) => {
          return <PostCard post={post} key={post.title + i} />;
        })}
      </div>
      <div className="w-full absolute top-[30%] bg-green-300/10 left-0 h-[300px] 2xl:h-[500px] skew-y-12" />
    </motion.div>
  );
};

export default Posts;
