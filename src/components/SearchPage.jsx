import React from 'react';
import { Button } from '@material-ui/core';
import "./SearchPage.css";
import SearchResult from './SearchResult';


function SearchPage() {
    return (
        <div className="searchPage" >
            <div className="searchPage__info" >
              <p> 62 stays - 26 august to 30 august - 2 guest</p>
              <h1>Styas nearby</h1>
              <Button variant="outlined" >
                  Cancellation Flexibility
              </Button>
              <Button variant="outlined" >
                Type of Place
              </Button>
              <Button variant="outlined" >
                Price
              </Button>
              <Button variant="outlined" >
                Rooms and beds
              </Button>
              <Button variant="outlined" >
                More filters
              </Button>
              <SearchResult
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
                location="Private room in center of London"
                title="Stay at this spacious Edwardian House"
                description="1 guest  - 1 bedroom - 1 bed - 
                1.5 shared bathrooms - Wifi - Kitchen - 
                Free parking - Washing Machine"
                star={4.73}
                price="$30/night"
                total="$117 total"
              />
            </div>
        </div>
    )
}

export default SearchPage
