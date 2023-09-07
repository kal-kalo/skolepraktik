import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Favorites() {
  const [fetchedFailed, setfetchedFailed] = useState(false)
  const [loading, setLoading] = useState(true)
  const [likedItems, setLikedItems] = useState(JSON.parse(localStorage.getItem("likedItems")) || []);
  const [fetchedLikedItems, setFetchedLikedItems] = useState([]);

  const fetchSingleItem = async (itemId) => {
    try {
      const response = await fetch(`https://dinmaegler.onrender.com/homes/${itemId}`);
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching item:", error);
      return null;
    }
  };

  useEffect(() => {
    const fetchLikedItems = async () => {
      const fetchedItems = await Promise.all(
        likedItems.map((item) => fetchSingleItem(item))
      );
            //The result of filter is a new array that contains only the items that are not null. These are the items that were successfully fetched without errors.
      // Check if all fetch operations failed (result is an empty array or array of null values)
    if (fetchedItems.every((item) => item === null)) {
      // Handle the case where all fetch operations failed
      console.error("All fetch operations failed");
      setfetchedFailed(true)
    } else {
      // Filter out null values to keep only successfully fetched items
      setFetchedLikedItems(fetchedItems.filter((item) => item !== null));
      setLoading(false)
    }
    };

    if (likedItems.length > 0) {
      fetchLikedItems();
    }
  }, []);

  const handleLikeToggle = (itemId) => {
    const updatedLikedItems = likedItems.includes(itemId)
      ? likedItems.filter((id) => id !== itemId)
      : [...likedItems, itemId];

    setLikedItems(updatedLikedItems);
    localStorage.setItem("likedItems", JSON.stringify(updatedLikedItems));
  };

  return (
    <div className="houses">
      <div className="houses-container">
        {loading?(<p>Loading...</p>):fetchedFailed?(<p>All fetch operations failed</p>):fetchedLikedItems.length > 0 ? (
          fetchedLikedItems.map((house) => (
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
          ))
        ) : (
          <h3>No Favorites</h3>
        )}
      </div>
    </div>
  );
}
