import React from 'react';
import './Search.css';
import { AiOutlinePlus } from 'react-icons/ai';

const Search = ({ setSignUp }) => {
  const newUser = () => {
    setSignUp((prev) => !prev);
  };
  return (
    <div className="search">
      <div className="clear">
        <div className="add-user" onClick={newUser}>
          <AiOutlinePlus size="24px" />
        </div>
      </div>
    </div>
  );
};

export default Search;
