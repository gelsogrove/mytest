import { FC } from 'react';
import { Cat } from '../../models';

interface MyComponentProps {
  cats: Cat[];
}

export const CatsList: FC<MyComponentProps> = ({ cats }) => {
  return (
    <ul>
      {cats.map(cat => (
        <li key={cat.id}>
          <p>
            {cat.id} - {cat.message}
            Length: {cat.length}
          </p>
        </li>
      ))}
    </ul>
  );
};
