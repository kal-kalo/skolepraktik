import { useLoaderData } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function HouseDetail() {

  const { id } = useParams(); // Get the id parameter from the URL
  const house = useLoaderData({ id }); // Specify id as a property
  return (
    <div className="House-details">
      <img src={house.images[0].url} alt="" width={500} height={300} />
      <p> {house.adress1} </p>
      <p> {house.postalcode} {house.city} </p>
      <p> {house.type} • <small>Ejerugift: {house.cost}</small> </p>
      <p>{house.description}</p>
    </div>
  );
}


