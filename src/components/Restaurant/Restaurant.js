import "./Restaurant.css";
import WishButton from "../WishButton/WishButton"
import VisitButton from "../VisitButton/VisitButton"

function Restaurant(props) {

    const { name, image_url, neighborhood, rating, url, categories, userInteractions} = props.data;
    const { wishList, notes, visited } = userInteractions;

    let cat_titles = categories.map((cat) => {
        return cat.title;
    });

  return (
    <div className="restaurant">
      <img alt="yelpPic" className="image" src={image_url} />
      <div>
        <h1>{name}</h1>
        <p>{neighborhood}</p>
        <p>Yelp Rating: {rating}</p>
        <p>Categories: {cat_titles.join(", ")}</p>
        <a target='_blank' href={url}>Yelp Page</a> 
      </div>
      <div>
        <WishButton bool={wishList.bool} wishClick={props.wishClick}/>
      </div>
      <div>
        <VisitButton bool={visited.bool} visitClick={props.visitClick}/>
      </div>
    </div>
  );
}

export default Restaurant;