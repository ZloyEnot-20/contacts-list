import React from 'react';
import './Search.css';
import { AiOutlinePlus } from 'react-icons/ai';

import { useDispatch, useSelector } from 'react-redux';

const Search = ({ setSignUp }) => {
  const dispatch = useDispatch();
  const newUser = () => {
    setSignUp(prev=>!prev);
  };
  return (
    <div className="search">
      <div className="search-form">
        <input
          type="text"
          placeholder="Select by full name"
          className="search-form__name"
        />
        <select className="search-form__gender">
          <option value="" selected disabled hidden>
            Gender
          </option>
          <option value="Any">Any</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <input
          type="text"
          placeholder="Nationality"
          className="search-form__nationality"
        />
      </div>
      <div className="clear">
        {/* <button>clear</button> */}
        <div className="add-user" onClick={newUser}>
          <AiOutlinePlus size="24px" />
        </div>
      </div>
    </div>
  );
};

export default Search;
