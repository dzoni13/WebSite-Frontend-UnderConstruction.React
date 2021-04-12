import React from "react";
import "./bestFromUs.css";

function BestFromUs(props) {
    return (
        <>
            <div className="bestFromUsContainer">
                <h1>Chef Recommendation's</h1>
                <h3>Fresh Cuts</h3>
                <div class="ui stackable two column grid bestFromUsColumnGridContainer">
                    <div class="column bestFromUsImgStyle bestFromUsColumns"></div>
                    <div class=" column bestFromUsTxtContainer bestFromUsColumns">
                        <div className="bestFromUsTxtContent">
                            <p>{props.item.title}</p>
                            <p>Served All Day</p>
                            <p>{props.item.description}</p>
                        </div>
                    </div>
                    <div className=" column bestFromUsTxtContainer bestFromUsColumns">
                        <div className="bestFromUsTxtContent">
                            <p>{props.item.title}</p>
                            <p>Served All Day</p>
                            <p>
                                {props.item.description}
                            </p>
                        </div>
                    </div>
                    <div className="column bestFromUsImgStyle2 bestFromUsColumns"></div>
                </div>
            </div>
        </>
    );
}

export default BestFromUs;
