import React from "react";

const Gallery = () => {
  const gallary = [
    "/absfe.jpg",
    "/deadlift.jpg",
    "/exercise.jpg",
    "/khtri.jpg",
    "/shirtless.jpg",
    "/girl.jpg",
    "/shirtless2.jpg",
    "/man.jpg",
    "body.jpg",
  ];
  return (
    <section className="gallery">
      <h1>BETTER BEATS BEST</h1>
      <div className="images">
        <div>
          {gallary.slice(0, 3).map((element, index) => (
            <img key={index} src={element} alt="gallaryImage" />
          ))}
        </div>
        <div>
          {gallary.slice(3, 6).map((element, index) => (
            <img key={index} src={element} alt="gallaryImage" />
          ))}
        </div>
        <div>
          {gallary.slice(6, 9).map((element, index) => (
            <img key={index} src={element} alt="gallaryImage" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
