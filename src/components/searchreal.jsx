import React, { useState } from 'react';
import "./Search.css";
import { addDays } from 'date-fns';
import {DateRangePicker} from "react-date-range";
import "react-date-range/dist/styles.css"; //main css file.
import "react-date-range/dist/theme/default.css"; //theme css file

function Search() {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const seletionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    };

    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }
    //The above thing is dine by library.

    return (
        <div className="search" >
            <DateRangePicker
             range={seletionRange} onChange={handleSelect}  
            />
        </div>
    )
}

export default Search
