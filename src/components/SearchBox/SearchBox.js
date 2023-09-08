import React from "react";
import "./SearchBox.scss";

const SearchBox = () => {
   return (
      <div className="searchbox">
         <div className="row">
            <div className="col-6">
               <input
                  type="text"
                  name="name"
                  className="searchbox__input"
                  placeholder="Enter character name"
               />
            </div>
            <div className="col-3">
               <select name="gender" className="filter">
                  <option value="male" selected>
                     male
                  </option>
                  <option value="female">female</option>
               </select>
            </div>
            <div className="col-3">
               <select name="status" className="filter">
                  <option value="alive" selected>
                     alive
                  </option>
                  <option value="dead">dead</option>
                  <option value="unknown">unknown</option>
               </select>
            </div>
         </div>
      </div>
   );
};

export default SearchBox;
