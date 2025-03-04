import React from 'react';
import styles from './Card.module.css';

export default function Card() {
  return (
    <div className={styles.card1}>
      <div className={styles.header2}>
        <span className={styles.textBig}>History</span>
      </div>
      <div className={styles.header2}>
        <div className={styles.body}>
          <div className={styles.body1}>
            <div className={styles.body2}>
              <span className={styles.p14}>Host View</span>
              <span className={styles.p10}>02-27-2025</span>
            </div>
            <span className={styles.p10r}>{`<div>`}</span>
          </div>
        </div>
        <div className={styles.body}>
          <div className={styles.body1}>
            <div className={styles.body2}>
              <span className={styles.p14}>Search</span>
              <span className={styles.p10}>02-26-2025</span>
            </div>
            <span className={styles.p10r}>{`<input>`}</span>
          </div>
        </div>
        <div className={styles.body}>
          <div className={styles.body1}>
            <div className={styles.body2}>
              <span className={styles.p14}>Dealer Name</span>
              <span className={styles.p10}>02-23-2025</span>
            </div>
            <span className={styles.p10r}>{`<span>`}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
