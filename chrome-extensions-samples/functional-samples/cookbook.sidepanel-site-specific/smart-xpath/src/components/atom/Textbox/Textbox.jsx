import React from 'react';
import styles from './Textbox.module.css';

export default function Textbox({ variant = 'textboxNormal', header, value }) {
  // Define class mapping
  const variantClass = styles[variant] || styles.textboxNormal;

  // Add copy button for the paths
  const showCopyButton = header === 'Full Path' || header === 'Simplified Path'|| header === 'Keyword for XPath';

  // Default values based on the screenshot
  const defaultValues = {
    'Element Name': 'Host View',
    'Tag Type': 'DIV',
    'Full Path':
      '/html[1]/body[1]/app-root[1]/app-administrator-layout[1]/div[1]/app-hosts[1]/div[1]/div[2]/div[2]/mat-tab-group[1]/mat-tab-header[1]/div[2]/div[1]/div[1]/div[1]',
    'Simplified Path': "//div[@role='tab'][1]"
  };

  // Use provided value or default from the screenshot
  const displayValue = value || defaultValues[header] || '';

  // Special case for 'DIV' to apply the highlighted color
  const isTagTypeDiv =
    header === 'Tag Type' &&
    (value === 'DIV' || defaultValues[header] === 'DIV');

  const handleCopy = () => {
    if (showCopyButton && displayValue) {
      navigator.clipboard.writeText(displayValue);
    }
  };

  return (
    <div className={styles.mainContent}>
      <div className={styles.header}>{header}</div>
      <div className={variantClass}>
        <span
          className={`${styles.text} ${isTagTypeDiv ? styles.divText : ''}`}
        >
          {displayValue}
        </span>
        {showCopyButton && (
          <button className={styles.copyButton} onClick={handleCopy}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 0H2C0.9 0 0 0.9 0 2V12H2V2H12V0ZM14 4H5C3.9 4 3 4.9 3 6V16H14C15.1 16 16 15.1 16 14V6C16 4.9 15.1 4 14 4ZM14 14H5V6H14V14Z"
                fill="#CCCCCC"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
