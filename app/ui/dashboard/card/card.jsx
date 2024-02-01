import React from "react";
import styles from "./card.module.css";
import { MdSupervisedUserCircle } from "react-icons/md";

const card = () => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle sixe={24} />
      <div className={styles.texts}>
        <span className={styles.tilte}>Total users</span>
        <span className={styles.number}> 10000</span>
        <span clasName={styles.detail}>
          <span className={styles.positive}>12%</span> more than the previous
          week
        </span>
      </div>
    </div>
  );
};

export default card;
