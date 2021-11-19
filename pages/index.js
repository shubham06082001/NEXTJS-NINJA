import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>HOME</title>
        <meta name='Home' content='List | HOME' />
      </Head>
      <div>
        <div>
          <h1 className={styles.title}>
            HOMEPAGE{' '}
            <Image src='/done.svg' width={50} height={50} alt='spinner' />
          </h1>
        </div>

        <table>
          <th>
            <h1 className={styles.text}>Hello</h1>
          </th>
          <th>
            <h1 className={styles.text}>Everyone</h1>
          </th>
        </table>

        <Link href='/ninjas'>
          <a className={styles.btn}>See All Listings</a>
        </Link>
      </div>
    </>
  );
}
