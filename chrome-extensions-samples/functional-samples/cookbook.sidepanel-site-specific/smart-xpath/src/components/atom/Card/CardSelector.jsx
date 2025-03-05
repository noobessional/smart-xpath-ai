import React from 'react';
import styles from './Card.module.css';
import Textbox from '../Textbox/Textbox';

export default function Card() {
  return (
    <div className={styles.card1}>
      <div className={styles.header2}>
        <span className={styles.textBig}>XPath Selector</span>
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
      <Textbox
        variant="textboxImportant"
        header="Keyword for XPath"
        value="host_view_tab=//div[@role='tab'][1]"
      />
    </div>
  );
}
