import React from 'react';
import styles from './InformationList.module.css';
import { GlobalContext } from './Context/GlobalStorage';

const InformationList = ({ data, loading, error, request }) => {
  const context = React.useContext(GlobalContext);

  React.useEffect(() => {
    request(context.urlTemplate);
  }, []);

  function handlePContent(type) {
    if (loading) {
      return 'loading...';
    }

    if (error || !data) {
      return 'N/A';
    }

    switch (type) {
      case 'ip':
        return data.ip;
      case 'location':
        return `${data.location.country}, ${data.location.region}, ${data.location.city}`;
      case 'timezone':
        return `UTC ${data.location.timezone}`;
      case 'isp':
        return data.isp;
      default:
        return 'N/A';
    }
  }

  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.li}>
          <h3 className={styles.title}>IP Address</h3>
          <p className={styles.content}>{handlePContent('ip')}</p>
        </li>
        <li className={styles.li}>
          <h3 className={styles.title}>Location</h3>
          <p className={styles.content}>{handlePContent('location')}</p>
        </li>
        <li className={styles.li}>
          <h3 className={styles.title}>Timezone</h3>
          <p className={styles.content}>{handlePContent('timezone')}</p>
        </li>
        <li className={styles.li}>
          <h3 className={styles.title}>ISP</h3>
          <p className={styles.content}>{handlePContent('isp')}</p>
        </li>
      </ul>
    </section>
  );
};

export default InformationList;
