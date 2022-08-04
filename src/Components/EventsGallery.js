import React, { useState, useEffect } from "react";
import { SRLWrapper } from "simple-react-lightbox";
import "./EventsGallery.css";

const images = [
  { id: "1", imageName: "Rectangle 341.png", tag: "2021" },
  { id: "2", imageName: "Rectangle 193.png", tag: "2021" },
  { id: "3", imageName: "Rectangle 193.png", tag: "2021" },
  { id: "4", imageName: "Rectangle 193.png", tag: "2022" },
  { id: "5", imageName: "Rectangle 193.png", tag: "2022" },
  { id: "6", imageName: "Rectangle 193.png", tag: "2022" },
  { id: "7", imageName: "Rectangle 193.png", tag: "2020" },
  { id: "8", imageName: "Rectangle 193.png", tag: "2020" },
  { id: "9", imageName: "Rectangle 193.png", tag: "2020" },
  { id: "10", imageName: "Rectangle 193.png", tag: "2021" },
  { id: "11", imageName: "Rectangle 193.png", tag: "2020" },
  { id: "12", imageName: "Rectangle 193.png", tag: "2022" },
];

function EventsGallery() {
  const [tag, setTag] = useState("all");
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    tag === "all"
      ? setFilteredImages(images)
      : setFilteredImages(images.filter((image) => image.tag === tag));
  }, [tag]);

  return (
    <div className="container">
         <div className="line4"></div>
      <div className="tags">
        <TagButton
          name="all"
          tagActive={tag === "all" ? true : false}
          handleSetTag={setTag}
        />
        <TagButton
          name="2020"
          tagActive={tag === "2020" ? true : false}
          handleSetTag={setTag}
        />
        <TagButton
          name="2021"
          tagActive={tag === "2021" ? true : false}
          handleSetTag={setTag}
        />
        <TagButton
          name="2022"
          tagActive={tag === "2022" ? true : false}
          handleSetTag={setTag}
        />
      </div>
      <SRLWrapper>
        <div className="row">
          {filteredImages.map((image) => (
            <div key={image.id} className=" col-md-3">
                <div className="image-card">
                
                <img className="img-fluid" src={`/img/${image.imageName}`} alt="" />
              
                </div>

           
            </div>
          ))}
        </div>
      </SRLWrapper>
    </div>
  );
}

const TagButton = ({ name, handleSetTag, tagActive }) => {
  return (
    <button
      className={`tag ${tagActive ? "active" : null}`}
      onClick={() => handleSetTag(name)}
    >
      {name.toUpperCase()}
    </button>
  );
};

export default EventsGallery;
