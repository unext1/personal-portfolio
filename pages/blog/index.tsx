import { motion } from "framer-motion";
import Link from "next/link";

const Blog = () => {
  const posts = [
    {
      title: "Recreating Society.gg",
      href: "/blog/1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",

      imageUrl: "/blog.png",
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
      {/* <div className="mx-auto my-20 lg:grid lg:grid-cols-2 ">
        <div className="my-auto ">
          <h1 className="text-5xl font-bold tracking-wider text-white uppercase">
            My Blogs
          </h1>
          <p className="mt-4 text-xl text-neutral-500 ">Entry to my mind</p>
        </div>
      </div>
      <div className="grid max-w-lg gap-5 mx-auto mt-20 lg:grid-cols-3 lg:max-w-none ">
        {posts.map((post) => (
          <Link href={post.href} passHref key={post.title}>
            <div className="flex flex-col overflow-hidden rounded-lg shadow-lg cursor-pointer">
              <div className="flex-shrink-0">
                <img
                  className="object-cover w-full h-52"
                  src={post.imageUrl}
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-between flex-1 p-6 bg-brand-dark-800">
                <div className="flex-1">
                  <a className="block mt-3">
                    <p className="text-xl font-semibold text-white">
                      {post.title}
                    </p>
                    <p className="mt-3 text-base text-neutral-500 ">
                      {post.description}
                    </p>
                  </a>
                </div>
                <div className="flex items-center mt-6">
                  <h1 className="text-sm font-bold tracking-wider text-red-500">
                    Read more...
                  </h1>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div> */}
    </div>
  );
};

export default Blog;
