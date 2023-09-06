import { useLoaderData } from "react-router-dom";
//import { useParams } from "react-router-dom";

export default function HouseDetail() {
  //const { id } = useParams();
  const house = useLoaderData();

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

// data loader
export const HouseDetailLoader = async ({ params }) => {
  const { id } = params;

  const res = await fetch("https://dinmaegler.onrender.com/homes/" + id);

  if (!res.ok) {
    throw Error("Could not find that House.");
  }

  return res.json();
};

