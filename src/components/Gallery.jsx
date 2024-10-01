import React, { useState } from "react";

const Gallery = () => {
  const gallery = [
    "/absfe.jpg",
    "/deadlift.jpg",
    "/exercise.jpg",
    "/shirtless.jpg",
    "/girl.jpg",
    "/shirtless2.jpg",
    "/man.jpg",
    "/body.jpg",
  ];

  return (
    <section className="gallery">
      <h1>BETTER BEATS BEST</h1>
      <div className="images">
        {gallery.map((element, index) => {
          const [loading, setLoading] = useState(true);

          return (
            <div key={index} style={{ position: "relative", width: "100%", height: "auto" }}>
              {loading && <div className="placeholder">Loading...</div>}
              <img
                src={element}
                alt="galleryImage"
                loading="lazy"
                onLoad={() => setLoading(false)}
                style={{ display: loading ? "none" : "block", width: "100%", height: "auto" }}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Gallery;
