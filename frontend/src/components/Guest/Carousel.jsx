import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Importing icons from react-icons

const courses = [
  {
    title: "Introduction to React",
    imageUrl: "https://image.petmd.com/files/inline-images/shiba-inu-black-and-tan-colors.jpg?VersionId=pLq84BEOjdMjXeDCUJJJLFPuIWYsVMUU",
  },
  {
    title: "Advanced React",
    imageUrl: "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2021/10/26071254/mengenal-fakta-menarik-seputar-kucing-anggora-turki-halodoc.jpg.webp",
  },
  {
    title: "React for Beginners",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Sympetrum_flaveolum_-_side_%28aka%29.jpg/1200px-Sympetrum_flaveolum_-_side_%28aka%29.jpg",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((currentIndex + 1) % courses.length);
  };

  const prev = () => {
    setCurrentIndex((currentIndex - 1 + courses.length) % courses.length);
  };

  return (
    <div className="relative flex items-center justify-center text-white w-96 px-4">
      <div className="flex items-center justify-between w-full max-w-2xl mx-auto">
        <button
          onClick={prev}
          className="p-2 text-2xl bg-transparent hover:bg-lime-500 rounded-full mr-3"
        >
          <FaChevronLeft />
        </button>
        <div className="flex items-center space-x-1">
          {courses.map((course, index) => (
            <div
              key={index}
              className={`transition-all duration-300 ease-in-out border-2 ${
                index === currentIndex ? "border-lime-500" : "border-gray-500"
              } hover:border-lime-300`}
              style={{
                transform: "skewX(-20deg)", 
              }}
            >
              <img
                src={course.imageUrl}
                alt={course.title}
                className="w-32 h-10 object-cover"
              />
            </div>
          ))}
        </div>
        <button
          onClick={next}
          className="p-2 text-2xl bg-transparent hover:bg-lime-500 rounded-full ml-3"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
