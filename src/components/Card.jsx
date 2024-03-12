import React from "react";

export default function Card() {
  return (
    <div>
      <div>
        <div
          className="card mt-3"
          style={{ width: "18rem", maxHeight: "360px" }}
        >
          {" "}
          {/* styling*/}
          <img src="https://source.unsplash.com/800x400/?travel" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card
            </p>
            <div className="container w-100">
              <select className="m-2 h-100  bg-success rounded">
                {Array.from(Array(6), (e, i) => {
                  //this function create a copy of array of array having 6 index having undefined value, where array.from have (array, elemnt{e}, index{i})
                  return (
                    <option key={i + 1} value={i + 1}>
                      {" "}
                      {i + 1}
                    </option>
                  );
                })}
              </select>
              <select className="m-2 h-100  bg-success rounded">
                <option value="half">half</option>
                <option value="full">full</option>
              </select>
              <div className="d-inline h-100 fs-5">toal price</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
