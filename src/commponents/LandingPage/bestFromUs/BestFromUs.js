import React from "react";
import "./bestFromUs.css";

function BestFromUs(props) {
    return (
        <>
            <div className="ui stackable two column grid bestFromUsColumnGridContainer">
                <div className="column bestFromUsImgStyle bestFromUsColumns">
                    <img alt="Item Img" className="right floated ui image " src={props.item.image} />
                </div>
                <div className=" column bestFromUsTxtContainer bestFromUsColumns">
                    <div className="bestFromUsTxtContent">
                        <h1>{props.item.title}</h1>
                        <p>{props.item.short_description}</p>
                        <p>{props.item.description}</p>
                    </div>
                </div>

            </div>

        </>
    );
}

export default BestFromUs;
