import Button from '../Button/Button';
import React from 'react';
import styles from './Tabs.module.css'; // ✅ CSS module must be applied with `className`

export default function Tabs() {
  return (
    <div className={styles.tabContainer}>
      <div className={styles.tabs}>
        <Button variant="ghost-small">Record Steps</Button>
        <Button variant="ghost-small">Selector</Button>
        <Button variant="solid-small">History</Button>
      </div>
    </div>
  );
}
