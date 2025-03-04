import Button from '../../atom/Button/Button';
import Logo from '../../../assets/logo.svg';
import React from 'react';
import Tabs from '../../atom/Tabs/Tabs';
import Card from '../../atom/Card/Card'; // ✅ Component import is allowed
import Textbox from '../../atom/Textbox/Textbox';

import styles from './Record.module.css'; // ✅ CSS module must be applied with `className`

export default function Record() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.mainContainer}>
          <img src={Logo} alt="logo" className={styles.logo} />
          <Tabs />
          <div className={styles.mainContent}>
            <Card />
          </div>
          <div className={styles.buttonContainer}>
            <div className={styles.smallButton}>
              <Button variant="outline-small">Pause</Button>
              <Button variant="outline-small">Delete</Button>
            </div>
            <Button variant="solid">Stop Recording</Button>
          </div>
        </div>
      </div>
    </>
  );
}
