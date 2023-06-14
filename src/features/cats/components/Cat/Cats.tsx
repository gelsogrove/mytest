import { useEffect, useState } from 'react';

import { Cat } from '../../models';
import { fetchCatsMessage } from '../../services/cat.service';
import { CatsList } from '../CatsList/CatList';

const Cats = (): JSX.Element => {
  const [cats, setCats] = useState<Cat[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();

  useEffect(() => {
    setIsLoading(true);
    setError(undefined);

    fetchCatsMessage()
      .then(result => {
        setCats(result);
        setIsLoading(false);
      })
      .catch(error => {
        setError(`error on loading data ${error}`);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <h1>Cat Facts</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {cats.length === 0 ? <p>No cat facts available.</p> : <CatsList cats={cats} />}
    </>
  );
};

export default Cats;
