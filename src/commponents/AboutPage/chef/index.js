import React from "react";
import "./index.css";
function OurHistory() {
  return (
    <div className="ourHistoryContainer">
      <div className="ui stackable two column grid ourHistoryColumnGridContainer">
        <div className="column ourHistoryImgStyle ourHistoryColumns"></div>
        <div className=" column  ourHistoryColumns">
          <div className="aboutUsTxtContent">
            <h1>Our story</h1>
            <h2>SINCE 1934</h2>
            <h5>a</h5>
            <p>
              Welcome. This is our Restaurant. Elegant & sofisticated restaurant
              atmosphere. Enjoyable and comfortable atmosphere in the heart of
              London. Our Restaurant offers 50 seating places, surrounding a big
              fireplace that will make your dining exquisite and enjoyable.
              Carefully selected music and smart interior design will make you
              feel like home.
            </p>{" "}
          </div>
        </div>
        <div className=" column  ourHistoryColumns">
          <div className="aboutUsTxtContent">
            <h1>Our approach</h1>
            <h2>FRESH INGREDIENTS</h2>
            <h5>a</h5>
            <p>
              Here at our Restaurant we work with only the best food supliers
              like small family farms, insuring that we always have the best and
              always fresh ingredients. You'll find a large variety of dishes
              made to satisfy any taste, from sea food, steaks, variety of
              natural soups, pasta, salads, finest deserts and vines...
            </p>
          </div>
        </div>
        <div className="column ourHistoryImgStyle2 ourHistoryColumns"></div>
      </div>
    </div>
  );
}

export default OurHistory;
