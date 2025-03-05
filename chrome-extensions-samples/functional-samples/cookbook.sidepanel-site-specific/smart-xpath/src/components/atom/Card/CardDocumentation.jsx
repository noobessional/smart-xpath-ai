import React from 'react';
import styles from './Card.module.css';

export default function Card() {
  return (
    <div className={styles.card1}>
      <div className={styles.header2}>
        <span className={styles.textBig}>Documentation</span>
      </div>
      <div className={styles.header2}>
        <div className={styles.body}>
          <div className={styles.body1}>
            <div className={styles.body2}>
              <span className={styles.p14}>Navigating Host Page</span>
              <span className={styles.p10}>02-27-2025</span>
            </div>
          </div>
        </div>
        <div className={styles.body}>
          <div className={styles.body1}>
            <div className={styles.body2}>
              <span className={styles.p14}>Creating a User</span>
              <span className={styles.p10}>02-26-2025</span>
            </div>
          </div>
        </div>
        <div className={styles.body}>
          <div className={styles.body1}>
            <div className={styles.body2}>
              <span className={styles.p14}>Updating the Host Hours</span>
              <span className={styles.p10}>02-23-2025</span>
            </div>
          </div>
        </div>
        <div className={styles.body}>
          <div className={styles.body1}>
            <div className={styles.body2}>
              <span className={styles.p14}>Uploading Medias</span>
              <span className={styles.p10}>02-18-2025</span>
            </div>
          </div>
        </div>
        <div className={styles.body}>
          <div className={styles.body1}>
            <div className={styles.body2}>
              <span className={styles.p14}>Creating a Tags</span>
              <span className={styles.p10}>02-17-2025</span>
            </div>
          </div>
        </div>
        <div className={styles.body}>
          <div className={styles.body1}>
            <div className={styles.body2}>
              <span className={styles.p14}>Assigning License</span>
              <span className={styles.p10}>02-12-2025</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
