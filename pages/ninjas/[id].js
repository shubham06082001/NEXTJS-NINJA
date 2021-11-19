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
    <div>
      <h1>Name: {ninja.name}</h1>
      <h1>Email: {ninja.email}</h1>
      <h1>Website: {ninja.website}</h1>
      <h1>Address: {ninja.address.city}</h1>
    </div>
  );
};

export default Details;
