// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Restaurant from '../components/Restaurant/Restaurant';
import SearchDropdowns from '../components/SearchDropdowns/SearchDropdowns'

// function App() {
class App extends Component {
  constructor() {
    super()
    this.state = {
      data: {
        id: "TAueIovlJFslHSVEfnAaaA",
        alias: "dryhop-brewers-chicago",
        name: "DryHop Brewers",
        image_url: "https://s3-media4.fl.yelpcdn.com/bphoto/Eb0McDi48qWYhPnIaK8i-Q/o.jpg",
        is_closed: false,
        url: "https://www.yelp.com/biz/dryhop-brewers-chicago?adjust_creative=ZzZ3ffcKnwQmN827qh1vKw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ZzZ3ffcKnwQmN827qh1vKw",
        review_count: 771,
        categories: [
          {
            alias: "breweries",
            title: "Breweries"
          },
          {
            alias: "newamerican",
            title: "American (New)"
          }
        ],
        rating: 4,
        coordinates: {
          latitude: 41.9392443174878,
          longitude: -87.6442063962951
        },
        transactions: [
          "delivery",
          "pickup"
        ],
        price: "$$",
        location: {
          address1: "3155 N Broadway",
          address2: "",
          address3: "",
          city: "Chicago",
          zip_code: "60657",
          country: "US",
          state: "IL",
          display_address: [
            "3155 N Broadway",
            "Chicago, IL 60657"
          ]
        },
        phone: "+17738573155",
        display_phone: "(773) 857-3155",
        distance: 4698.23608916659,
        neighborhood: "Lake View",
        _rid: "tJleAOrMycgxCAAAAAAAAA==",
        _self: "dbs/tJleAA==/colls/tJleAOrMycg=/docs/tJleAOrMycgxCAAAAAAAAA==/",
        _etag: "\"bd01f2de-0000-0300-0000-5ff228f20000\"",
        _attachments: "attachments/",
        _ts: 1609705714
      },
      userInteractions: {
        wishList: { datetime: "2021-01-01 10:18:44", bool: true },
        visited: {},
        notes: []
      },
      dropdown: {
        neighborhoods: {
          all: [
            {alias: 'Gold Coast', title: 'Gold Coast'},
            {alias: "Lake View", title: "Lake View"},
            {alias: "Lincoln Park", title: "Lincoln Park"},
            {alias: "Wrigleyville", title: "Wrigleyville"},
          ],
          selected: ''
        },
        category: {
          all: [
            { alias: "burgers", title: "Burgers" },
            { alias: "bbq", title: "Barbeque" }],
          selected: ''
        },
        rating: {
          all: [
            {alias: 0, title: 0},
            {alias: 0.5, title: 0.5},
            {alias: 1, title: 1},
            {alias: 1.5, title: 1.5},
            {alias: 2, title: 2},
            {alias: 2.5, title: 2.5},
            {alias: 3, title: 3},
            {alias: 3.5, title: 3.5},
            {alias: 4, title: 4},
            {alias: 4.5, title: 4.5},
            {alias: 5, title: 5},
          ],
          selected: ''
        },
        wishList: {
          all: [
            {alias: 'No', title: 'No'},
            {alias: 'Yes', title: 'Yes'}
          ],
          selected: ''
        }
      }
    }
  }

  toggleHandler = (type) => {
    let userInteractions = { ...this.state.userInteractions };
    userInteractions[type] = { date: Date.now(), bool: !userInteractions[type]['bool'] };
    this.setState({ userInteractions: userInteractions })
  }

  handleSelectChange = (event) => {
    const target = event.target;
    // const value = target.type === 'checkbox' ? target.checked : target.value;
    const value = target.value;
    const name = target.name;

    let dropdown = { ...this.state.dropdown };
    dropdown[name]['selected'] = value;
    this.setState({ dropdown: dropdown });
  }

  render() {
    return (

      <div>
        {/* <div className="App"> */}
        <Header />
        <Restaurant
          data={this.state.data}
          userInteractions={this.state.userInteractions}
          toggleHandler={this.toggleHandler} />
        <SearchDropdowns
          dropdown={this.state.dropdown}
          handleChange={this.handleSelectChange} />
        {/* </div> */}
      </div>
    );
  }
}

export default App;
