

export default async function List() {
  const res = await fetch(`https://dinmaegler.onrender.com/homes`);
  const homes = await res.json();
  console.log(homes)
  return (
    <>
      {homes.map((home) => (
        <div key={home.id} className="card">
          <img
            src={home.images[0].url}
            alt=""
            width={500}
            height={300}
          />
          <p>{home.adress1}</p>
          <p>
            {home.postalcode} {home.city}
          </p>
          <p>
            {home.type} • <small>Ejerugift: {home.cost}</small>
          </p>
        </div>
      ))}
    </>
  );
}
