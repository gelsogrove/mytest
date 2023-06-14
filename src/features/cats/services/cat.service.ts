import { Cat, CatDTO } from '../models';
import { getRandomNumber } from '../utils';

const CAT_ENDPOINT = 'https://catfact.ninja/facts';

export interface CatApiResponse {
  data: CatDTO[];
}

const mapData = (items: CatApiResponse): Cat[] => {
  return items.data.map((item: CatDTO) => ({
    id: getRandomNumber(1, 10000),
    message: item.fact,
    length: item.length,
  }));
};

export const fetchCatsMessage = async (): Promise<Cat[]> => {
  try {
    const response = await fetch(CAT_ENDPOINT);
    if (!response.ok) {
      throw new Error('Failed to fetch cat data');
    }

    const result: CatApiResponse = await response.json();
    const mappedData: Cat[] = mapData(result);
    return mappedData;
  } catch (error) {
    console.log(error);
    return [];
  }
};
