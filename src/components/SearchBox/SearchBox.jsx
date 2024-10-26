import React from "react";
import styles from "./SearchBox.module.css";
import { useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filtersSlice";
import { useDispatch } from "react-redux";
// const SearchBox = ({ value, onFilter }) => {
const SearchBox = () => {
  const filterValue = useSelector((state) => state.filters.name);
  console.log(filterValue);
  const dispatch = useDispatch();

  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <p className={styles.label}>Find contacts by name</p>
        <input
          className={styles.input}
          type="text"
          value={filterValue}
          onChange={(event) => {
            dispatch(selectNameFilter(event.target.value));
          }}
          // const action = selectNameFilter(event.target.value);
          // dispatch(action);
          // onFilter(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBox;
