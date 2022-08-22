import React, { useState, useEffect } from "react";
import { SRLWrapper } from "simple-react-lightbox";
import "./Up.css";

const images = [
  { id: "1", imageName: "Rectangle 341.png", tag: "August", date:"first-annual-day-calendar-page-interface-symbol 6.png", text:"Graduation Ceremony ", text2:"1 January 2022" },
  { id: "2", imageName: "Rectangle 193.png", tag: "August", date:"first-annual-day-calendar-page-interface-symbol 6.png" , text:"Graduation Ceremony ", text2:"1 January 2022"  },
  { id: "3", imageName: "Rectangle 193.png", tag: "August",date:"first-annual-day-calendar-page-interface-symbol 6.png" , text:"Graduation Ceremony ", text2:"1 January 2022"  },
  { id: "4", imageName: "Rectangle 193.png", tag: "August", date:"first-annual-day-calendar-page-interface-symbol 6.png" , text:"Graduation Ceremony ", text2:"1 January 2022"  },
  { id: "5", imageName: "Rectangle 193.png", tag: "September", date:"first-annual-day-calendar-page-interface-symbol 6.png", text:"Graduation Ceremony ", text2:"1 January 2022"   },
  { id: "6", imageName: "Rectangle 193.png", tag: "September", date:"first-annual-day-calendar-page-interface-symbol 6.png", text:"Graduation Ceremony ", text2:"1 January 2022"   },
  { id: "7", imageName: "Rectangle 193.png", tag: "September",date:"first-annual-day-calendar-page-interface-symbol 6.png", text:"Graduation Ceremony ", text2:"1 January 2022"   },
  { id: "8", imageName: "Rectangle 193.png", tag: "September" , date:"first-annual-day-calendar-page-interface-symbol 6.png", text:"Graduation Ceremony ", text2:"1 January 2022"  },
  { id: "9", imageName: "Rectangle 193.png", tag: "October",date:"first-annual-day-calendar-page-interface-symbol 6.png" , text:"Graduation Ceremony ", text2:"1 January 2022"  },
  { id: "10", imageName: "Rectangle 193.png", tag: "October", date:"first-annual-day-calendar-page-interface-symbol 6.png" , text:"Graduation Ceremony ", text2:"1 January 2022"  },
  { id: "11", imageName: "Rectangle 193.png", tag: "October", date:"first-annual-day-calendar-page-interface-symbol 6.png" , text:"Graduation Ceremony ", text2:"1 January 2022"  },
  { id: "12", imageName: "Rectangle 193.png", tag: "October" , date:"first-annual-day-calendar-page-interface-symbol 6.png", text:"Graduation Ceremony ", text2:"1 January 2022"  },
  { id: "13", imageName: "Rectangle 193.png", tag: "November",date:"first-annual-day-calendar-page-interface-symbol 6.png" , text:"Graduation Ceremony ", text2:"1 January 2022"  },
  { id: "14", imageName: "Rectangle 193.png", tag: "November", date:"first-annual-day-calendar-page-interface-symbol 6.png" , text:"Graduation Ceremony ", text2:"1 January 2022"  },
  { id: "15", imageName: "Rectangle 193.png", tag: "November2",date:"first-annual-day-calendar-page-interface-symbol 6.png", text:"Graduation Ceremony ", text2:"1 January 2022"   },
  { id: "16", imageName: "Rectangle 193.png", tag: "November",date:"first-annual-day-calendar-page-interface-symbol 6.png" , text:"Graduation Ceremony ", text2:"1 January 2022"  },
  { id: "17", imageName: "Rectangle 193.png", tag: "December", date:"first-annual-day-calendar-page-interface-symbol 6.png", text:"Graduation Ceremony ", text2:"1 January 2022"   },
  { id: "18", imageName: "Rectangle 193.png", tag: "December", date:"first-annual-day-calendar-page-interface-symbol 6.png", text:"Graduation Ceremony ", text2:"1 January 2022"   },
  { id: "19", imageName: "Rectangle 193.png", tag: "December",date:"first-annual-day-calendar-page-interface-symbol 6.png", text:"Graduation Ceremony ", text2:"1 January 2022"   },
  { id: "20", imageName: "Rectangle 193.png", tag: "December",date:"first-annual-day-calendar-page-interface-symbol 6.png", text:"Graduation Ceremony ", text2:"1 January 2022"   },
];

function Up() {
  const [tag3, setTag] = useState("all");
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    tag3 === "all"
      ? setFilteredImages(images)
      : setFilteredImages(images.filter((image) => image.tag === tag3));
  }, [tag3]);

  return (
    <div className="container v">
         <div className="line4"></div>
      <div className="tags">
        <TagButton
          name="all"
          tagActive={tag3 === "all" ? true : false}
          handleSetTag={setTag}
          
        />
        <TagButton
          name="August"
          tagActive={tag3 === "August" ? true : false}
          handleSetTag={setTag}
        />
        <TagButton
          name="September"
          tagActive={tag3 === "September" ? true : false}
          handleSetTag={setTag}

        />
        <TagButton
          name="October"
          tagActive={tag3 === "October" ? true : false}
          handleSetTag={setTag}
        />
          <TagButton
          name="November"
          tagActive={tag3 === "November" ? true : false}
          handleSetTag={setTag}
        />
          <TagButton
          name="December"
          tagActive={tag3 === "December" ? true : false}
          handleSetTag={setTag}
          
        />
      </div>
      <SRLWrapper>
        <div className="row">
          {filteredImages.map((image) => (
            <div key={image.id} className=" col-md-3">
                <div className="image-card">
                
                <img className="img-fluid" src={`/img/${image.imageName}`} alt="" />
                <div className="updats">
                    <div className="date-img">
                        <img src={`/img/${image.date}`} className="img-fluid" alt="" />
                    </div>
                    <div className="date-text">
                        <p>{image.text}</p>
                        <p>{image.text2}</p>
                    </div>
                </div>
              
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
      className={`tag3 ${tagActive ? "active" : null}`}
      onClick={() => handleSetTag(name)}
    >
      {name.toUpperCase()}
    </button>
  );
};

export default Up;
