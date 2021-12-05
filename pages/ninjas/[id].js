import Image from 'next/image';

export const getStaticPaths = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  const paths = data.map((ninja) => {
    return {
      params: {
        id: ninja.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
  const data = await res.json();

  return {
    props: {
      ninja: data,
    },
  };
};

const Details = ({ ninja }) => {
  return (
    <>
      <div style={{ flex: 1, flexDirection: 'row', margin: '10' }}>
        <div style={{ float: 'left' }}>
          <h1 style={{ border: '1px solid gray', borderRadius: '4px' }}>
            Name: {ninja.name}
          </h1>
          <h1 style={{ border: '1px solid gray', borderRadius: '4px' }}>
            Email: {ninja.email}
          </h1>
          <h1 style={{ border: '1px solid gray', borderRadius: '4px' }}>
            Website: {ninja.website}
          </h1>
          <h1 style={{ border: '1px solid gray', borderRadius: '4px' }}>
            Address: {ninja.address.city}
          </h1>
        </div>
        <div
          style={{
            float: 'right',
            border: '2px solid white',
            borderRadius: '20px',
          }}
        >
          <Image
            src='/farmer.png'
            alt='user-profile-pic'
            width={400}
            height={400}
          />
        </div>
      </div>
    </>
  );
};

export default Details;
