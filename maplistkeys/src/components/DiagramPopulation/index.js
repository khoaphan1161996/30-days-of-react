import React from "react";
import './style.css'

export default function DiagramPopulation({ country, population }) {
    
    const calRatio = () => {
        let ratio = population*100/10000000000
        ratio = ratio.toFixed(1)
        return Number(ratio)
    }

    const styles = {
        backgroundColor:'orange',
        height:30,
        width: `${calRatio()}%`
    }

  return (
    <div className="popu-item">
      <div className="name">{country}</div>
      <div className="progress">
        <div className="myProgress">
          <div style={styles}></div>
        </div>
      </div>
      <div className="score">{population}</div>
    </div>
  );
}
