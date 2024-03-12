import React from "react";
import { Carousel } from "react-bootstrap";

const MyCarousel = () => {
  // const handleSubmit = (e) => {
  //   // e.preventDefault();
  //   // const formData = new FormData(e.target);
  //   // const searchText = formData.get('search');
  //   // console.log('Search text:', searchText);
  //   // Here you can implement your search functionality
  // };

  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src="https://source.unsplash.com/800x400/?nature"
          alt="First slide"
        />
        <div>
        <Carousel.Caption>
          <form className="">
            <input type="text" name="search" placeholder="Search..." />
            <button type="submit">Search</button>
          </form>
        </Carousel.Caption>
        </div>
        <Carousel.Caption>
          {/* <h3>First Slide</h3>
          <p>Description for the first slide.</p>
          <form onSubmit={handleSubmit}>
            <input type="text" name="search" placeholder="Search..." />
            <button type="submit">Search</button>
          </form> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src="https://source.unsplash.com/800x400/?animals"
          alt="Second slide"
        />
        <div>
        <Carousel.Caption>
          <form className="">
            <input type="text" name="search" placeholder="Search..." />
            <button type="submit">Search</button>
          </form>
        </Carousel.Caption>
        </div>
        {/* <Carousel.Caption>
          <h3>Second Slide</h3>
          <p>Description for the second slide.</p>
          <form  className='d-flex'>
            <input type="text" name="search" placeholder="Search..." />
            <button type="submit">Search</button>
          </form>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src="https://source.unsplash.com/800x400/?travel"
          alt="Third slide"
        />
        <div>
        <Carousel.Caption>
          <form className="">
            <input type="text" name="search" placeholder="Search..." />
            <button type="submit">Search</button>
          </form>
        </Carousel.Caption>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default MyCarousel;
