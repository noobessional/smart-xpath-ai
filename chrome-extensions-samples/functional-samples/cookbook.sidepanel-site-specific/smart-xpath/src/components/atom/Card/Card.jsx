import React from 'react';
import styles from './Card.module.css';
import Textbox from '../Textbox/Textbox';

export default function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.leftHeader}>
          <div className={styles.num}>1</div>
          <span className={styles.textInstruction}>
            Click the "Host View" tab.
          </span>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M6.66675 8V11.3333"
            stroke="#DF4E4E"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.33325 8V11.3333"
            stroke="#DF4E4E"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.66675 4.6665H13.3334"
            stroke="#DF4E4E"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 6.6665V11.9998C4 13.1044 4.89543 13.9998 6 13.9998H10C11.1046 13.9998 12 13.1044 12 11.9998V6.6665"
            stroke="#DF4E4E"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 3.33333C6 2.59695 6.59695 2 7.33333 2H8.66667C9.40307 2 10 2.59695 10 3.33333V4.66667H6V3.33333Z"
            stroke="#DF4E4E"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <Textbox
        variant="textboxNormal"
        header="Element Name"
        value="Host View"
      />
      <Textbox variant="textboxNormal" header="Tag Type" value="DIV" />
      <Textbox
        variant="textboxImportant"
        header="Full Path"
        value="/html[1]/body[1]/div[1]/app-root[1]/app-administrator..."
      />
      <Textbox
        variant="textboxImportant"
        header="Simplified Path"
        value="//div[@role='tab'][1]"
      />
    </div>
  );
}
