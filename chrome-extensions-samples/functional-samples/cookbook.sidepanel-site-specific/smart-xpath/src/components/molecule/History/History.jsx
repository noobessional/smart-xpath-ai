import Button from '../../atom/Button/Button';
import Logo from '../../../assets/logo.svg';
import React from 'react';
import Tabs from '../../atom/Tabs/Tabs';
import CardDocumentation from '../../atom/Card/CardDocumentation';

import styles from './History.module.css'; // ✅ CSS module must be applied with `className`

export default function History() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.mainContainer}>
          <img src={Logo} alt="logo" className={styles.logo} />
          <Tabs />
          <div className={styles.mainContent}>
            <CardDocumentation/>
          </div>
        </div>
      </div>
    </>
  );
}
