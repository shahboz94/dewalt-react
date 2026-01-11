import React, { useEffect } from "react";
import Statistics from "./Statistics";
import PopularProducts from "./PopularProducts";
import NewProducts from "./NewProducts";
import Advertisement from "./Advertisement";
import Events from "./Events";
import "../../../css/home.css";

export default function HomePage() {
  // Selector: Store => Data

  useEffect(() => {
    // Backend server data request => Data
    // Slice: Data => store
  }, []);
  return (
    <div className={"homepage"}>
      <Statistics />
      <PopularProducts />
      <NewProducts />
      <Advertisement />
      <Events />
    </div>
  );
}
