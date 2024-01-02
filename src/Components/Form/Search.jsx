import React from 'react';
import styles from './Search.module.css';
import iconArrow from '../../assets/icon-arrow.svg';

const Search = ({ request }) => {
  const [ip, setIp] = React.useState('');

  function handleChange({ target }) {
    setIp(target.value);
  }

  return (
    <form className={styles.container}>
      <input
        className={styles.input}
        value={ip}
        onChange={handleChange}
        placeholder="Search for any IP address or domain"
        type="text"
      />
      <button className={styles.button}>
        <img src={iconArrow} alt="Arrow icon" />
      </button>
    </form>
  );
};

export default Search;
