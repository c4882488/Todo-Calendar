import React from "react";
import "./practice2.css";

const images = [
  { id: 1, title: "Image 1", url: "https://i.imgur.com/apdIfEN.jpg" },
  { id: 2, title: "Image 2", url: "https://i.imgur.com/wqbZaU4.jpg" },
  { id: 3, title: "Image 3", url: "https://i.imgur.com/tEDWJKF.jpg" },
  { id: 4, title: "Image 4", url: "https://i.imgur.com/5roEXqe.jpg" },
];

function Image(props) {
  return (
    <span className="image-item">
      <div className="image-item-photo-wrap">
        <img className="image-item-photo" src={props.image.url} />
      </div>
      <span className="image-item-title">{props.image.title}</span>
    </span>
  );
}

function ImageList(props) {
  return (
    <div className="image-list">
      {props.images.map(function (image) {
        return <Image key={image.id} image={image} />;
      })}
    </div>
  );
}

function App() {
  return <ImageList images={images} />;
}

export default App;
