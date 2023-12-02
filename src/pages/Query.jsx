import { useSearchParams } from 'react-router-dom';

const Query = () => {
  const [searchParams] = useSearchParams();
  const destination = searchParams.get('destination');
  const month = searchParams.get('month');

  return (
    <div>
      <h3>Query</h3>
      <h4>Destination: {destination}</h4>
      <h4>Month: {month}</h4>
    </div>
  );
};

export default Query;
