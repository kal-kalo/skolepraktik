import { Outlet } from "react-router-dom";

//import { housesLoader } from "./pages/houses/Houses";

//import Range from "../components/Range";
//import Dropdown from "../components/Dropdown";

export default function RootLayout() {

/*   let smallestPrice, biggestPrice;
  const uniqueTypes = new Set();
  const dropdownOptions = [{ value: "element", label: "element" }];
  let houses;
  const uniquePrices = new Set();
  const priceArr = [];

  houses = await housesLoader();

  houses.forEach((element) => {
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
 */
  return (
    <div className="houses-layout" >
      {/* <Dropdown options={dropdownOptions} />
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
      /> */}
      <h1>houses-layout</h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
