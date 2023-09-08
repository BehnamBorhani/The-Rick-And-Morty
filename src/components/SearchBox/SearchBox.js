import React from "react";
import "./SearchBox.scss";

const SearchBox = ({ name, setName, gender, setGender, status, setStatus }) => {
   return (
      <div className="searchbox">
         <div className="row">
            <div className="col-6">
               <label htmlFor="name">Name:</label>
               <input
                  type="text"
                  name="name"
                  className="searchbox__input"
                  placeholder="Enter character name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
               />
            </div>
            <div className="col-3">
               <label htmlFor="gender">Gender:</label>
               <select
                  name="gender"
                  className="filter"
                  value={gender}
                  onChange={(event) => setGender(event.target.value)}
               >
                  <option value="male">male</option>
                  <option value="female">female</option>
                  <option value="genderless">genderless</option>
                  <option value="unknown">unknown</option>
                  <option value="">all</option>
               </select>
            </div>
            <div className="col-3">
               <label htmlFor="status">Status:</label>
               <select
                  name="status"
                  className="filter"
                  value={status}
                  onChange={(event) => setStatus(event.target.value)}
               >
                  <option value="alive">alive</option>
                  <option value="dead">dead</option>
                  <option value="unknown">unknown</option>
                  <option value="">all</option>
               </select>
            </div>
         </div>
      </div>
   );
};

export default SearchBox;
