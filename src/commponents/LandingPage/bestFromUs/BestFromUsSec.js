
import React from "react";
import "./bestFromUs.css";


function BestFromUsSec(props) {
    return (
        <>
            <div className="ui stackable two column grid bestFromUsColumnGridContainer">
                <div className=" column bestFromUsTxtContainer bestFromUsColumns">
                    <div className="bestFromUsTxtContent">
                        <h1>{props.item.title}</h1>
                        <h2>{props.item.short_description}</h2>
                        <p>{props.item.description}</p>
                    </div>
                </div>
                <div className="column bestFromUsImgStyle2 bestFromUsColumns">
                    <img alt="Item Img" className="right floated ui image " src={props.item.image} />
                </div>
            </div>
        </>
    )
}

export default BestFromUsSec;