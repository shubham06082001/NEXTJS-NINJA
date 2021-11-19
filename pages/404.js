import { useRouter } from 'next/router';
import Link from 'next/link';
import { useEffect } from 'react';

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    // document.title = '404 - Not Found';

    setTimeout(() => {
      // router.go(-1);

      router.push('/');
    }, 3000);
  });

  return (
    <div className='not-found'>
      <h1>OOOPS....</h1>
      <h2> That page cannot be found!!!</h2>
      <p>
        GO BACK TO <Link href='/'>HOMEPAGE</Link>{' '}
      </p>
    </div>
  );
};

export default NotFound;
