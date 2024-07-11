import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const courses = [
  {
    title: "Introduction to React",
    make: "John Doe",
    imageUrl:
      "https://image.petmd.com/files/inline-images/shiba-inu-black-and-tan-colors.jpg?VersionId=pLq84BEOjdMjXeDCUJJJLFPuIWYsVMUU",
    detailsUrl:
      "https://image.petmd.com/files/inline-images/shiba-inu-black-and-tan-colors.jpg?VersionId=pLq84BEOjdMjXeDCUJJJLFPuIWYsVMUU",
  },
  {
    title: "Advanced React",
    make: "Jane Smith",
    imageUrl:
      "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2021/10/26071254/mengenal-fakta-menarik-seputar-kucing-anggora-turki-halodoc.jpg.webp",
    detailsUrl:
      "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2021/10/26071254/mengenal-fakta-menarik-seputar-kucing-anggora-turki-halodoc.jpg.webp",
  },
  {
    title: "React for Beginners",
    make: "Alice Johnson",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Sympetrum_flaveolum_-_side_%28aka%29.jpg/1200px-Sympetrum_flaveolum_-_side_%28aka%29.jpg",
    detailsUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Sympetrum_flaveolum_-_side_%28aka%29.jpg/1200px-Sympetrum_flaveolum_-_side_%28aka%29.jpg",
  },
];

const GuestCourse = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentCourse = courses[currentIndex];

  const goToNextCourse = () => {
    setCurrentIndex((currentIndex + 1) % courses.length);
  };

  const goToPreviousCourse = () => {
    setCurrentIndex((currentIndex - 1 + courses.length) % courses.length);
  };

  return (
    <div className="h-[900px] relative flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img
          src={currentCourse.detailsUrl}
          alt={currentCourse.title}
          className="w-full h-full object-cover filter blur"
        />
      </div>

      <div className="z-10 p-4 w-full bg-opacity-90 rounded-lg">
        <div className="flex items-center justify-between">
          <div className="relative flex flex-col items-center justify-center bg-blue-300">
            <h3 className="text-lg font-bold">Top Courses</h3>
            <h1 className="text-3xl font-bold">2</h1>
          </div>

          {/* Section 2*/}
          <div>

            {/*Carousel */}
            <div className="flex items-center space-x-1">
              <button
                onClick={goToPreviousCourse}
                className="p-2 text-2xl bg-transparent hover:bg-lime-500 rounded-full mr-3"
              >
                <FaChevronLeft />
              </button>
              <div className="flex items-center space-x-4">
                {courses.map((course, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-300 ease-in-out border-2 ${
                      index === currentIndex
                        ? "border-lime-500"
                        : "border-gray-500"
                    } hover:border-lime-300`}
                    style={{
                      transform: "skewX(-20deg)",
                    }}
                  >
                    <img
                      src={course.imageUrl}
                      alt={course.title}
                      className="w-24 h-8 object-cover"
                    />
                  </div>
                ))}
              </div>
              <button
                onClick={goToNextCourse}
                className="p-2 text-2xl bg-transparent hover:bg-lime-500 rounded-full ml-3"
              >
                <FaChevronRight />
              </button>
            </div>

                    {/*Banner */}
            <div className="flex items-center">
              <img src={currentCourse.imageUrl} alt="" className="w-60" />
              <div className="flex flex-col">
                <h4 className="text-md font-semibold">{currentCourse.title}</h4>
                <p className="text-sm">{currentCourse.make}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestCourse;
