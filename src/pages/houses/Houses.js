import { Link, useLoaderData } from "react-router-dom";

export default function Houses() {
  const houses = useLoaderData();

  return (
    <div className="houses">
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
