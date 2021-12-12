import { useState } from "react";

const Blog = () => {
  const posts = [
    {
      title: "Boost your conversion rate",
      href: "#",
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
    {
      title: "How to use search engine optimization to drive sales",
      href: "#",
      category: { name: "TailwindCSS", href: "#" },
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.",
      date: "Mar 10, 2020",
      datetime: "2020-03-10",
      imageUrl:
        "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
      readingTime: "4 min",
      author: {
        name: "Brenna Goyette",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      title: "Improve your customer experience",
      href: "#",
      category: { name: "React JS", href: "#" },
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
      date: "Feb 12, 2020",
      datetime: "2020-02-12",
      imageUrl:
        "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
      readingTime: "11 min",
      author: {
        name: "Daniela Metz",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
  ];

  return (
    <div className="min-h-screen pb-20">
      <div className="grid max-w-lg gap-5 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none">
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
                <p className="text-sm font-medium text-white">
                  <a
                    href={post.category.href}
                    className="px-3 py-1 bg-brand-purple rounded-2xl"
                  >
                    {post.category.name}
                  </a>
                </p>
                <a href={post.href} className="block mt-2">
                  <p className="text-xl font-semibold text-white">
                    {post.title}
                  </p>
                  <p className="mt-3 text-base text-brand-gray-lighter ">
                    {post.description}
                  </p>
                </a>
              </div>
              <div className="flex items-center mt-6">
                <h1 className="text-sm font-bold tracking-wider text-brand-purple">
                  Read more...
                </h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
