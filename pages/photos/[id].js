export const getStaticPaths = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/photos');
  const data = await response.json();

  const paths = data.map((photo) => {
    return {
      params: {
        id: photo.id.toString(),
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
  const res = await fetch('https://jsonplaceholder.typicode.com/photos/' + id);
  const data = await res.json();

  return {
    props: {
      photo: data,
    },
  };
};

const Details = ({ photo }) => {
  return (
    <div style={{ justifyContent: 'center', alignContent: 'center' }}>
      <img src={photo.url} width={600} height={600} alt={photo.id} />
    </div>
  );
};

export default Details;
