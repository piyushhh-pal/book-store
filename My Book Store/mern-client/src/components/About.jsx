import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center pt-16 bg-gray-50 min-h-screen">
      {/* Main Content Container */}
      <div className="w-full md:w-4/5 lg:w-3/5 p-6 bg-white shadow-xl rounded-lg">
        <h1 className="text-3xl font-bold text-center text-blue-800 mb-6">
          Welcome to Inkspire: Your Trusted Online Bookstore
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            About Inkspire
          </h2>
          <p className="text-gray-700 leading-7">
            At <strong>Inkspire</strong>, we aim to revolutionize the way students and book lovers
            connect by offering a seamless platform to buy and sell used books. Born out of a
            passion for promoting education and sustainability, Inkspire serves as a bridge
            connecting sellers with buyers in the most efficient, eco-friendly way possible.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 leading-7">
            We are committed to creating a community where knowledge flows effortlessly while
            reducing the environmental impact of discarded books. Every book bought or sold on
            Inkspire represents a step toward affordable education and a greener planet.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Why Choose Inkspire?
          </h2>
          <ul className="list-disc pl-6 space-y-4 text-gray-700">
            <li>
              <strong>Seamless User Experience:</strong> Post listings and browse books with ease
              using our intuitive platform.
            </li>
            <li>
              <strong>Secure Transactions:</strong> 100% secure payments and money transfers,
              ensuring trust for buyers and sellers alike.
            </li>
            <li>
              <strong>Eco-Friendly:</strong> Promote sustainability by giving used books a second
              life.
            </li>
            <li>
              <strong>Affordable Options:</strong> Access quality books at unbeatable prices,
              making education and reading accessible to everyone.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Fun Facts About Books
          </h2>
          <ul className="list-disc pl-6 space-y-4 text-gray-700">
            <li>
              The first-ever book printed using movable type was the Gutenberg Bible, in the 1450s.
            </li>
            <li>
              The world’s most expensive book, "The Codex Leicester" by Leonardo da Vinci, was sold
              to Bill Gates for over $30 million.
            </li>
            <li>
              Paperback books were introduced in the 1930s to make books more affordable.
            </li>
            <li>
              Libraries existed as far back as 2600 BCE in ancient Mesopotamia.
            </li>
          </ul>
        </section>

        <blockquote className="bg-blue-50 border-l-4 border-blue-400 p-4 italic text-gray-700">
          "A reader lives a thousand lives before he dies. The man who never reads lives only one."
        </blockquote>

        <footer className="mt-8 text-center text-gray-500 text-sm">
          Copyright © 2024, <strong>Inkspire™</strong>. All Rights Reserved.
        </footer>
      </div>
    </div>
  );
};

export default About;