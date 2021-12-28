import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Blog = () => {
  const posts = [
    {
      title: "How i made 100$ under 3 Hours",
      href: "blog/1",
      category: { name: "Remix", href: "#" },
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      imageUrl:
        "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
      readingTime: "6 min",
      author: {
        name: "Roel Aufderehar",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
  ];

  return (
    <div className="flex items-center justify-center w-full h-full min-h-screen ">
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          y: { type: "spring", stiffness: 120 },
        }}
        className="text-3xl tracking-wider text-white uppercase md:text-7xl"
      >
        Coming soon...
      </motion.h1>
      {/* <div className="mx-auto lg:grid lg:grid-cols-2 ">
        <div className="my-auto ">
          <h1 className="text-6xl font-bold tracking-wider text-white uppercase">
            My Blog world
          </h1>
          <p className="mt-4 text-xl text-neutral-500 ">
            Entry to my mind
          </p>
        </div>
      </div>
      <div className="grid max-w-lg gap-5 mx-auto mt-20 lg:grid-cols-3 lg:max-w-none ">
        {posts.map((post) => (
          <div
            key={post.title}
            className="flex flex-col overflow-hidden rounded-lg shadow-lg"
          >
            <div className="flex-shrink-0">
              <img
                className="object-cover w-full h-48"
                src={post.imageUrl}
                alt=""
              />
            </div>
            <div className="flex flex-col justify-between flex-1 p-6 bg-brand-dark-800">
              <div className="flex-1">
                <Link href={post.href}>
                  <a className="block mt-3">
                    <p className="text-xl font-semibold text-white">
                      {post.title}
                    </p>
                    <p className="mt-3 text-base text-neutral-500 ">
                      {post.description}
                    </p>
                  </a>
                </Link>
              </div>
              <div className="flex items-center mt-6">
                <h1 className="text-sm font-bold tracking-wider text-red-500">
                  Read more...
                </h1>
              </div>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Blog;
