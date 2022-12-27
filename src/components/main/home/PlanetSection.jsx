import { useEffect, useState } from "react";
import RedirectButton from "../../RedirectButton";
import PlanetCard from "./PlanetCard";
import SectionHeading from "../../SectionHeading";
import * as RestApi from "../../../utils/rest_api_util"

const PlanetSection = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    getPlanets();
  }, []);

  const getPlanets = async () => {
    try {
      const result = await RestApi.getPlanets()
      let response = await result.json();
      response = response.slice(0, 6);
      setPlanets(response);
    } catch (error) {}
  };

  return (
    <div className="planet__section container py-5">
      <SectionHeading name="THE PLANETS" />
      <div className="row py-5">
        {planets.map((planet, index) => (
          <PlanetCard key={index} planet={planet} />
        ))}
      </div>
      <div className="text-center pt-5">
        <RedirectButton name="Explore More" to="/planets" />
      </div>
    </div>
  );
};

export default PlanetSection;
