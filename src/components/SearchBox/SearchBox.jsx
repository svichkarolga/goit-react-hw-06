import React from "react";
import styles from "./SearchBox.module.css";
import { useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import { useDispatch } from "react-redux";

const SearchBox = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <p className={styles.label}>Find contacts by name</p>
        <input
          className={styles.input}
          type="text"
          // value={filterValue}
          onChange={(event) => {
            dispatch(changeFilter(event.target.value));
          }}
        />
      </div>
    </div>
  );
};

export default SearchBox;
