import stl from "../../css/SearchCom.module.css";
import FilterIcon from "../IconComponents/FilterIcon";
import SearchIcon from "../IconComponents/SearchIcon";
const SearchCom = ({ padding, border }) => {
  const objStl = {
    padding: padding,
    border: border,
  };
  return (
    <>
      <div className={stl.searchBarContainer}>
        <div
          className={stl.searchInnerContainer}
          style={{ border: objStl.border }}
        >
          <input
            type="text"
            className="searchInput"
            placeholder="Search"
            style={{ padding: objStl.padding }}
          />
          <button>
            <SearchIcon />
          </button>
        </div>
        {/* <div className={stl.filterBtn}>
                    <FilterIcon />

                    Filter
                </div> */}
      </div>
    </>
  );
};

export default SearchCom;
