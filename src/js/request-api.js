import axios from 'axios';

const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/';

export async function getRandomCocktail() {
  const getRequestRandomCocktail = axios.create({
    baseURL: `${BASE_URL}/random.php`,
    headers: { 'Content-Type': 'application/json' },
  });
  const response = await getRequestRandomCocktail.get();
  return response.data.drinks[0];
}

export async function getCocktailByName(name) {
  const getRequestCocktailByName = axios.create({
    baseURL: `${BASE_URL}/search.php`,
    headers: { 'Content-Type': 'application/json' },
    params: {
      s: name,
    },
  });
  const response = await getRequestCocktailByName.get();
  return response.data;
}

export async function getIngredientsByName(name) {
  const getRequestIngredientsByName = axios.create({
    baseURL: `${BASE_URL}/search.php`,
    headers: { 'Content-Type': 'application/json' },
    params: {
      i: name,
    },
  });
  const response = await getRequestIngredientsByName.get();
  return response.data;
}

export async function getCocktailByLetter(letter) {
  const getRequestCocktailByLetter = axios.create({
    baseURL: `${BASE_URL}/search.php`,
    headers: { 'Content-Type': 'application/json' },
    params: {
      f: letter,
    },
  });
  const response = await getRequestCocktailByLetter.get();
  return response.data;
}
