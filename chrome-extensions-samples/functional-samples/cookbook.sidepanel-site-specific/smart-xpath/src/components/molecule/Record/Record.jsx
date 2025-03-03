import Button from '../../atom/Button/Button';
import Logo from '../../../assets/logo.svg';
import React from 'react';
import Tabs from '../../atom/Tabs/Tabs';

import styles from './Record.module.css'; // ✅ CSS module must be applied with `className`

export default function Record() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.mainContainer}>
          <img src={Logo} alt="logo" className={styles.logo} />
          <Tabs />
          <div className={styles.mainContent}>
            <div className={styles.tutorial}>
              <span className={styles.textSmall}>
                Click the elements that you want to record
              </span>
              <img
                src={require('../../../assets/tutorial-img.png')}
                className={styles.tutorialImg}
                alt="tutorial"
              />
            </div>
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
