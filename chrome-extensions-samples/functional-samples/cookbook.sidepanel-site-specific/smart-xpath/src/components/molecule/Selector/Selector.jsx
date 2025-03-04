import Button from '../../atom/Button/Button';
import Logo from '../../../assets/logo.svg';
import React from 'react';
import Tabs from '../../atom/Tabs/Tabs';
import CardSelector from '../../atom/Card/CardSelector';
import CardHistory from '../../atom/Card/CardHistory';

import styles from './Selector.module.css'; // ✅ CSS module must be applied with `className`

export default function Selector() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.mainContainer}>
          <img src={Logo} alt="logo" className={styles.logo} />
          <Tabs />
          <div className={styles.mainContent}>
            <CardSelector />
            <CardHistory />
          </div>
          <div className={styles.buttonContainer}>
            <Button variant="solid">Select Element</Button>
          </div>
        </div>
      </div>
    </>
  );
}
