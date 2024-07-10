import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../assets/css/GuestCourse.css"; // Create and import a CSS file for custom styling

const GuestCourse = () => {
  const courses = [
    {
      id: 1,
      title: "Course 1",
      description: "This is a description for Course 1.",
      imageUrl: "https://images8.alphacoders.com/106/1068709.jpg",
      smallImageUrl: "https://images8.alphacoders.com/106/1068709.jpg",
    },
    {
      id: 2,
      title: "Course 2",
      description: "This is a description for Course 2.",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDWvF6msqZXCwtB_F0rSBDT0mphcbij1PEXg&s",
      smallImageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDWvF6msqZXCwtB_F0rSBDT0mphcbij1PEXg&s",
    },
    {
      id: 3,
      title: "Course 3",
      description: "This is a description for Course 3.",
      imageUrl:
        "https://c4.wallpaperflare.com/wallpaper/101/583/796/cat-high-cool-cat-wallpaper-preview.jpg",
      smallImageUrl:
        "https://c4.wallpaperflare.com/wallpaper/101/583/796/cat-high-cool-cat-wallpaper-preview.jpg",
    },
  ];

  const [currentCourse, setCurrentCourse] = useState(0);

  const handlePrev = () => {
    setCurrentCourse((prev) => (prev - 1 + courses.length) % courses.length);
  };

  const handleNext = () => {
    setCurrentCourse((prev) => (prev + 1) % courses.length);
  };

  return (
    <div className="relative w-full h-[500px] bg-gray-900 flex items-center justify-center">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center filter blur-sm"
        style={{ backgroundImage: `url(${courses[currentCourse].imageUrl})` }}
      ></div>
      <div className="relative w-full h-full flex items-center justify-between px-8">
        <div className="absolute left-auto right-0 mr-20 top-0 bg-yellow-400 text-black p-4 rounded-tr-lg">
          <span className="text-4xl font-extrabold">02</span>
          <h3 className="text-2xl font-bold">Courses</h3>
        </div>
        <button
          onClick={handlePrev}
          className="slick-prev bg-yellow-400 p-2 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"
        >
          &#8249;
        </button>
        <div className="flex flex-col items-center justify-center w-1/2 h-full relative bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={courses[currentCourse].imageUrl}
            alt={courses[currentCourse].title}
            className="h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-4 text-white">
            <h3 className="text-2xl font-semibold">
              {courses[currentCourse].title}
            </h3>
            <p className="text-gray-300">{courses[currentCourse].description}</p>
          </div>
        </div>
        <button
          onClick={handleNext}
          className="slick-next bg-yellow-400 p-2 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"
        >
          &#8250;
        </button>
      </div>
      <div className="absolute bottom-4 w-full flex justify-center">
        <Slider
          dots={false}
          infinite={true}
          speed={500}
          slidesToShow={3}
          slidesToScroll={1}
          centerMode={true}
          focusOnSelect={true}
          afterChange={(index) => setCurrentCourse(index)}
        >
          {courses.map((course, index) => (
            <div
              key={course.id}
              className={`p-2 ${
                index === currentCourse ? "opacity-100" : "opacity-50"
              }`}
            >
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default GuestCourse;
