import { Component } from "react";

class Moviecard extends Component {
  constructor() {
    super();
    this.state = {
      title: "The Avengers",
      plot: "Super natural powers shown in the movie",
      price: 199,
      rating: 8.9,
    };
  }

  addStars = () => {
    console.log("Stars added...", this);
  }
  render() {
    const { title, plot, rating, price } = this.state;
    return (
      <div className="main">
        <div className="movie-card">
          <div className="left">
            <img src="https://images.squarespace-cdn.com/content/v1/5bfdc74875f9ee194f3e0add/1597704181638-5P299V1BMNMZZSYN36XF/Snow+White+Huntsman+poster.png" />
          </div>

          <div className="right">
            <div className="title">{title}</div>
            <div className="plot">{plot}</div>
            <div className="price">{price}</div>

            <div className="footer">
              <div className="rating">{rating}</div>
              <div className="star-dis">
                <img
                  className="str-btn"
                  alt="minus"
                  src="https://cdn-icons-png.flaticon.com/128/149/149706.png"
                />
                <img
                  className="stars"
                  alt="star"
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                />
                <img
                  onClick={this.addStars}
                  className="str-btn"
                  alt="minus"
                  src="https://cdn-icons-png.flaticon.com/128/32/32563.png"
                />
              </div>
              <button className="favourite-btn">Favourite</button>
              <button className="cart-btn">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Moviecard;
