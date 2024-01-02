import React from 'react';
import styles from './Header.module.css';
import Search from './Form/Search';

const Header = ({ request }) => {
  return (
    <header className={styles.container}>
      <h1 className={styles.title}>IP Adress Tracker</h1>
      <Search request={request} />
    </header>
  );
};

export default Header;
