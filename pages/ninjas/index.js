/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import styles from '../../styles/Ninjas.module.css';

import Link from 'next/link';

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: {
      ninjas: data,
    },
  };
};

const Ninjas = ({ ninjas }) => {
  return (
    <div>
      <h1 className={styles.header}>ALL USERS</h1>
      <div className={styles.cards}>
        {ninjas.map((ninja) => (
          <Link href={'/ninjas/' + ninja.id} key={ninja.id} passHref>
            <div className={styles.card} key={ninja.id}>
              <img className={styles.cardImage} src='/farmer.png' />
              <div className={styles.cardBody}>
                <h3>{ninja.name}</h3>
                <h4>{ninja.email}</h4>
                <p>
                  Location: {ninja.address.geo.lat}, {ninja.address.geo.lng}
                </p>
                <h5>{ninja.phone}</h5>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Ninjas;
