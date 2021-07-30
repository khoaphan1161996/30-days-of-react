import React from "react";

import HeaderPopulation from "../HeaderPopulation";
import DiagramPopulation from "../DiagramPopulation";
import * as popu from "../../constants/ten_most_highest_populations";
import './style.css'

export default function WorldPopulation() {
  const { tenHighestPopulation } = popu;
  const showDiagram = (listDiagram) => {
    let result = [];
    result = listDiagram.map((diagram) => {
      return (
        <DiagramPopulation
          country={diagram.country}
          population={diagram.population}
          key={diagram.country}
        />
      );
    });

    return result;
  };

  return (
    <React.Fragment>
      <HeaderPopulation />
      <div className="lang-container">
          {showDiagram(tenHighestPopulation)}
        </div>
    </React.Fragment>
  );
}
