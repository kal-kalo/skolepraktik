import { Link, useLoaderData } from "react-router-dom";

import Dropdown from "../../components/Dropdown"
import Range from "../../components/Range"
import { useState } from "react";

export default function Houses() {

  const allHouses = useLoaderData();
  const [houses, setHouses] = useState(useLoaderData())

  let smallestPrice, biggestPrice;
  const uniqueTypes = new Set();
  const dropdownOptions = [{ value: "element", label: "element" }];
  const uniquePrices = new Set();
  const priceArr = [];

  allHouses.forEach((element) => {
    uniqueTypes.add(element.type);
    uniquePrices.add(element.price);
  });
  Array.from(uniqueTypes).forEach((element) => {
    dropdownOptions.push({ value: element, label: element });
  });
  Array.from(uniquePrices).forEach((element) => {
    priceArr.push(element);
  });
  [smallestPrice, biggestPrice] = [
    Math.min(...priceArr),
    Math.max(...priceArr),
  ];
  const  handleDropdownChange = async e => {
    const res = await fetch(`https://dinmaegler.onrender.com/homes?type_eq=${e.target.value}`);
    const houses = await res.json();
    setHouses(houses)
  };

  return (
    <div className="houses">
      <div className="House-details_controls">
        <Dropdown options={dropdownOptions} onChange={handleDropdownChange}/>
        <Range
          valueInit={smallestPrice}
          min={smallestPrice}
          max={biggestPrice}
          id="From"
        />
        <Range
          valueInit={biggestPrice}
          min={smallestPrice}
          max={biggestPrice}
          id="To"
        />
      </div>
      <div className="houses-container">
        {houses.map((house) => (
          <Link to={house.id.toString()} key={house.id}>
            <img
              src={house.images[0].url}
              alt=""
              width={500}
              height={300}
              //placeholder="blur"
              //quality={100}
            />
            <p>{house.adress1}</p>
            <p>
              {house.postalcode} {house.city}
            </p>
            <p>
              {house.type} • <small>Ejerugift: {house.cost}</small>
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

// data loader
export const housesLoader = async () => {
  const res = await fetch("https://dinmaegler.onrender.com/homes");

  if (!res.ok) {
    throw Error("Could not fetch the list of houses");
  }

  return res.json();
};
