import React, { useState } from "react";

import "./style.css";

export default function Search(props) {
  const [searchText, setSearchText] = useState("");

  const onChangeValue = (e) => {
    const {value} = e.target
    setSearchText(value)
    props.onChangeValue(value)
  }

  return (
    <div className="search__group">
      <input
        placeholder="Search countries by name, city and languages"
        className="search__group-input"
        value={searchText}
        onChange={onChangeValue}
      />

      <a className="search__group-chart" href={'#chart'}>
        <i className="fas fa-chart-bar"></i>
      </a>
    </div>
  );
}
