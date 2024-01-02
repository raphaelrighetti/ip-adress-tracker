import React from 'react';
import styles from './InformationList.module.css';

const InformationList = () => {
  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.li}>
          <h3 className={styles.title}>IP Address</h3>
          <p className={styles.content}>127.0.0.1</p>
        </li>
        <li className={styles.li}>
          <h3 className={styles.title}>Location</h3>
          <p className={styles.content}>Brazil</p>
        </li>
        <li className={styles.li}>
          <h3 className={styles.title}>Timezone</h3>
          <p className={styles.content}>UTC {'-5:00'}</p>
        </li>
        <li className={styles.li}>
          <h3 className={styles.title}>ISP</h3>
          <p className={styles.content}>SpaceX Starlink</p>
        </li>
      </ul>
    </section>
  );
};

export default InformationList;
