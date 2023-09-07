import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Dropdown from "../../components/Dropdown";
import Range from "../../components/Range";

export const housesLoader = async () => {
      const res = await fetch("https://dinmaegler.onrender.com/homes");
      if (!res.ok) {
        throw Error("Could not fetch the list of houses");
      }
      const data = await res.json();
      return data;
};

const getUniqueValues = (items, key) => {
  const uniqueValues = Array.from(new Set(items.map((item) => item[key])));
  return uniqueValues;
};

export default function Houses() {
  const allHouses = useLoaderData();
  const [houses, setHouses] = useState(allHouses);
  const [likedItems, setLikedItems] = useState(JSON.parse(localStorage.getItem("likedItems")) || []);

  const uniqueTypes = ["all", ...getUniqueValues(allHouses, "type")];
  const uniquePrices = getUniqueValues(allHouses, "price");
  const [smallestPrice, biggestPrice] = [Math.min(...uniquePrices), Math.max(...uniquePrices)];

  const handleDropdownChange = async (e) => {
    const typeFilter = e.target.value === "all" ? "" : `type_eq=${e.target.value}`;
    const res = await fetch(`https://dinmaegler.onrender.com/homes?${typeFilter}`);
    const houses = await res.json();
    setHouses(houses);
  };

  const handleLikeToggle = (itemId) => {
    const updatedLikedItems = likedItems.includes(itemId)
      ? likedItems.filter((id) => id !== itemId)
      : [...likedItems, itemId];

    setLikedItems(updatedLikedItems);
    localStorage.setItem("likedItems", JSON.stringify(updatedLikedItems));
  };

  return (
    <div className="houses">
      <div className="House-details_controls">
        <Dropdown options={uniqueTypes.map((type) => ({ value: type, label: type === "all" ? "show all" : type }))} onChange={handleDropdownChange} />
        <Range valueInit={smallestPrice} min={smallestPrice} max={biggestPrice} id="From" />
        <Range valueInit={biggestPrice} min={smallestPrice} max={biggestPrice} id="To" />
      </div>
      <div className="houses-container">
        {houses.map((house) => (
          <div key={house.id}>
            <Link to={house.id.toString()} key={house.id}>
              <img src={house.images[0].url} alt="" width={500} height={300} />
              <p>{house.adress1}</p>
              <p>
                {house.postalcode} {house.city}
              </p>
              <p>
                {house.type} • <small>Ejerugift: {house.cost}</small>
              </p>
            </Link>
            <button
              id={house.id}
              className={`like-btn ${likedItems.includes(house.id) ? "liked" : ""}`}
              onClick={() => handleLikeToggle(house.id)}
            >
              {likedItems.includes(house.id) ? "Liked" : "Like"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
