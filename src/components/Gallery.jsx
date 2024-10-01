import React from "react";
import Image from "react-bootstrap/Image";

const Gallery = () => {
  const gallery = [
    {
      id: 1,
      image: "/absfe.jpg",
    },
    {
      id: 2,
      image: "/deadlift.jpg",
    },
    {
      id: 3,
      image: "/exercise.jpg",
    },
    {
      id: 4,
      image: "/shirtless.jpg",
    },
    {
      id: 5,
      image: "/girl.jpg",
    },
    {
      id: 6,
      image: "/shirtless2.jpg",
    },
    {
      id: 7,
      image: "/man.jpg",
    },
    {
      id: 8,
      image: "/body.jpg",
    },
  ];

  return (
    <section className="gallery">
      <h1>BETTER BEATS BEST</h1>
      <div className="images">
        {gallery.map((item) => (
          <Image
            key={item.id}
            src={item.image}
            alt="galleryImage"
            className="gallery-image img-fluid" // Add Bootstrap class for responsiveness
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
