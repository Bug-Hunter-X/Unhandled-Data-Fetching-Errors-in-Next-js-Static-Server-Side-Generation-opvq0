// bugSolution.js
import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => {
  try {
    const res = await fetch('https://api.example.com/data'); // Replace with your data source
    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.status}`);
    }
    const data = await res.json();
    return {
      props: { data },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: { error: 'Failed to load data' },
    };
  }
};

export default function MyComponent({ data, error }) {
  if (error) {
    return <p>Error: {error}</p>;
  }
  return (
    <div>
      <h1>Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}