import React from 'react';
import styles from './Search.module.css';
import iconArrow from '../../assets/icon-arrow.svg';
import { GlobalContext } from '../Context/GlobalStorage';

const Search = ({ request }) => {
  const context = React.useContext(GlobalContext);

  const [ip, setIp] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (ip) {
      request(`${context.urlTemplate}&ipAddress=${ip}`);
    } else {
      request(context.urlTemplate);
    }
  }

  function handleChange({ target }) {
    setIp(target.value);
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
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
