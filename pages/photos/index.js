// import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Ninjas.module.css';

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/photos');

  const data = await res.json();
  return {
    props: {
      albums: data.slice(0, 20),
    },
  };
};

import React from 'react';

const Photos = ({ albums }) => {
  // console.log(albums);
  return (
    <div>
      <h1 className={styles.header}>ALL PHOTOS</h1>
      <div className={styles.cards}>
        {albums.map((photo) => (
          <div key={photo.id} className={styles.single}>
            <Link href={'/photos/' + photo.id} passHref>
              <img src={photo.url} width={250} height={250} alt={photo.id} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photos;
