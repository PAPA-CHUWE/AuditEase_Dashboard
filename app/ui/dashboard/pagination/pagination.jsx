import React from "react";
import styles from "./pagination.module.css";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";
const Pagination = () => {
  return (
    <div className={styles.container}>
      <button className={styles.button} disabled><MdArrowLeft size={30}/></button>
      <button className={styles.button}><MdArrowRight size={30}/></button>
    </div>
  );
};

export default Pagination;
