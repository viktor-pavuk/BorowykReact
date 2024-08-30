import React from "react";
import {useDispatch} from "react-redux";

import "./Bed.css"

const Bed = ({bed}) => {
    const dispatch = useDispatch();
    return (
        <div className="bed">
            <div className="bed_image">
                <img src="images/wheat.jpg" alt="ground"></img>
            </div>
            <div className="bed_content">
                <div className="bed_title">{bed.name}</div>
                <div className="bed_info">Harvest in 10 minutes</div>
                <div className="bed_actiob"><a href="#">Water</a></div>
            </div>
        </div>
    );
};

export default Bed;