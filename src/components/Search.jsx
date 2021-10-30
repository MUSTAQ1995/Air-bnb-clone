import { addDays } from 'date-fns';
import { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import "react-date-range/dist/styles.css"; //main css file.
import "react-date-range/dist/theme/default.css"; //theme css file
import PeopleIcon from "@material-ui/icons/People";
import { Button } from "@material-ui/core";
import "./Search.css"
import { useHistory } from 'react-router-dom';

export default function Search() {
    const history = useHistory()
    const [state, setState] = useState({
        selection: {
          startDate: new Date(),
          endDate: null,
          key: 'selection'
        },
        compare: {
          startDate: new Date(),
          endDate: addDays(new Date(), 3),
          key: 'compare'
        }
      });
    return(
        <div className="search" >
            <DateRangePicker
            onChange={item => setState({ ...state, ...item })}
            months={1}
            minDate={addDays(new Date(), -300)}
            maxDate={addDays(new Date(), 900)}
            direction="vertical"
            scroll={{ enabled: true }}
            ranges={[state.selection, state.compare]}
            />;
            <h2>Number of guests
                <PeopleIcon/>
            </h2>
            <input min={0} defaultValue={2} type="number"  />
            <Button variant="outlined"
              onClick={() => history.push("/search")}
            >Search Airbnb</Button>
        </div>
    )
}


