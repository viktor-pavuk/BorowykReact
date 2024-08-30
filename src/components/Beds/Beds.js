import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import Bed from "../Bed/Bed";
import {getAllBeds} from "../../store/bed.slice";

const Beds = () => {
    const {beds, status, error} = useSelector(state => state["bedReducer"]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllBeds());
    }, []);

    return (
        <div>
            {status === "pending" && <h2>Loading...</h2>}
            {error && <h2>{error}</h2>}
            {beds.map(bed => <Bed key={bed.id} bed={bed}/>)}
        </div>
    );
};

export default Beds;