import React, { useState } from 'react';
import Button from '../../atom/Button/Button';
import Logo from '../../../assets/logo.svg';
import Record from '../Record/Record';
import styles from './Welcome.module.css';

export default function Welcome() {
  const [isRecording, setIsRecording] = useState(false); // ✅ Track if recording is active

  return (
    <div className={styles.container}>
      {!isRecording ? ( // ✅ Show Welcome screen if not recording
        <div className={styles.mainContainer}>
          <img src={Logo} alt="logo" className={styles.logo} />
          <div className={styles.clickableContainer}>
            <div className={styles.buttonContainer}>
              <Button variant="solid" onClick={() => setIsRecording(true)}>
                {' '}
                {/* ✅ Start Recording */}
                Start Recording
              </Button>
              <Button variant="outline">XPath Selector</Button>
            </div>
            <span className={styles.text}>History</span>
          </div>
        </div>
      ) : (
        <Record /> // ✅ Show Record component when recording starts
      )}
    </div>
  );
}
