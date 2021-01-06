// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Header from './Header';
import Restaurant from './Restaurant';

// function App() {
class App extends Component {
  constructor() {
    super()
    this.state = {
      data: {
        "id": "TAueIovlJFslHSVEfnAaaA",
        "alias": "dryhop-brewers-chicago",
        "name": "DryHop Brewers",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/Eb0McDi48qWYhPnIaK8i-Q/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/dryhop-brewers-chicago?adjust_creative=ZzZ3ffcKnwQmN827qh1vKw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ZzZ3ffcKnwQmN827qh1vKw",
        "review_count": 771,
        "categories": [
          {
            "alias": "breweries",
            "title": "Breweries"
          },
          {
            "alias": "newamerican",
            "title": "American (New)"
          }
        ],
        "rating": 4,
        "coordinates": {
          "latitude": 41.9392443174878,
          "longitude": -87.6442063962951
        },
        "transactions": [
          "delivery",
          "pickup"
        ],
        "price": "$$",
        "location": {
          "address1": "3155 N Broadway",
          "address2": "",
          "address3": "",
          "city": "Chicago",
          "zip_code": "60657",
          "country": "US",
          "state": "IL",
          "display_address": [
            "3155 N Broadway",
            "Chicago, IL 60657"
          ]
        },
        "phone": "+17738573155",
        "display_phone": "(773) 857-3155",
        "distance": 4698.23608916659,
        "neighborhood": "Lake View",
        "_rid": "tJleAOrMycgxCAAAAAAAAA==",
        "_self": "dbs/tJleAA==/colls/tJleAOrMycg=/docs/tJleAOrMycgxCAAAAAAAAA==/",
        "_etag": "\"bd01f2de-0000-0300-0000-5ff228f20000\"",
        "_attachments": "attachments/",
        "_ts": 1609705714
      },
      userInteractions: {
        wishList: {"date": "2021-01-01 10:18:44", "bool": true},
        visited: {},
        notes: []}
    }
  }

  toggleWishList = () => {
    const userInteractions = {...this.state.userInteractions};
    userInteractions.wishList = {"date": Date.now(), "bool": !userInteractions.wishList.bool};
    this.setState({"userInteractions": userInteractions})
  }
  toggleVisit = () => {
    const userInteractions = {...this.state.userInteractions};
    userInteractions.visited = {"date": Date.now(), "bool": !userInteractions.visited.bool};
    this.setState({"userInteractions": userInteractions})
  }

  render() {
    return (
      <div>
      {/* <div className="App"> */}
        <Header />
        <Restaurant data={this.state.data} userInteractions={this.state.userInteractions} wishClick={this.toggleWishList} visitClick={this.toggleVisit}/>
      {/* </div> */}
      </div>
    );
  }
}

export default App;
