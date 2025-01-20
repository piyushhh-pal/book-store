import React from "react";

const Blog = () => {
  const blogPosts = [
    {
      title: "Why reselling used books is better than selling them to a scrap dealer?",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV4NJbdAFNKyLdIWuQOcN4absnblofR9crLjYE2PFRPWZtOcYsIQ7smEalpoeZHCRDVx0&usqp=CAU",
      description:
        "Books are an integral part of our lives, providing education, entertainment, and inspiration. Learn why reselling used books is a smarter choice.",
      author: "Inkspire Team",
      
    },
    {
      title: "Where and how to sell old books online?",
      image: "https://media.karanbajaj.com/karan-live/wp-content/uploads/2016/02/18145003/How-To-Sell-200000-copies-of-your-books-in-india-Karan-bajaj.jpg",
      description:
        "Discover the best platforms and strategies for selling your old books online with ease.",
      author: "Inkspire Team",
      
    },
    {
      title: "What to do with old books?",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkS-z_LupwWhe6QXHJyn1WB7NNepOs4cj3fYuTp64aP6p5FrpstUvTYF0g8GDdKLQ5VCc&usqp=CAU",
      description:
        "Explore creative ideas and eco-friendly ways to give your old books a new purpose.",
      author: "Inkspire Team",
     
    },
    {
      title: "Problems faced by students",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR23g2NAVSKaCMnB85QMJ-3oRjXK5Rp0kIg6dOjQDtcFL1lesV4DHUXrSoa0gjRed_jo_M&usqp=CAU",
      description:
        "Understand the common challenges students face and how books can help overcome them.",
      author: "Inkspire Team",
      
    },
    {
      title: "What is Inkspire?",
      image: "https://5.imimg.com/data5/IOS/Default/2022/9/VV/QX/NC/72110211/product-jpeg-500x500.png",
      description:
        "Learn about Inkspire, your trusted online bookstore for buying and selling second-hand books.",
      author: "Inkspire Team",
      
    },
    {
      title: "Make Money Reselling Books",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-vGIE5mXqnyF-m4jtExTmfFJq-JmEJ6E9KA&s",
      description:
        "Learn about Inkspire, your trusted online bookstore for buying and selling second-hand books.",
      author: "Inkspire Team",
      
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pt-50 px-50 py-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-blue-800 mb-8">
          Inkspire Blog
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4">{post.description}</p>
                <div className="text-gray-500 text-xs flex justify-between">
                  <span>By {post.author}</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;