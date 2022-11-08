import axios from 'axios';

const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/';

//Функция возвращает рамдомный коктейль
export async function getRandomCocktail() {
  const getRequestRandomCocktail = axios.create({
    baseURL: `${BASE_URL}/random.php`,
    headers: { 'Content-Type': 'application/json' },
  });
  try {
    const response = await getRequestRandomCocktail.get();
    return response.data.drinks[0];
  } catch (error) {
    console.log(error);
  }
}

//Функция возвращает коктейли по имени
export async function getCocktailByName(name) {
  const getRequestCocktailByName = axios.create({
    baseURL: `${BASE_URL}/search.php`,
    headers: { 'Content-Type': 'application/json' },
    params: {
      s: name,
    },
  });
  try {
    const response = await getRequestCocktailByName.get();
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

//Функция возвращает ингридиент по имени
export async function getIngredientsByName(name) {
  const getRequestIngredientsByName = axios.create({
    baseURL: `${BASE_URL}/search.php`,
    headers: { 'Content-Type': 'application/json' },
    params: {
      i: name,
    },
  });
  try {
    const response = await getRequestIngredientsByName.get();
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

//Функция возвращает коктейли по букве
export async function getCocktailByLetter(letter) {
  const getRequestCocktailByLetter = axios.create({
    baseURL: `${BASE_URL}/search.php`,
    headers: { 'Content-Type': 'application/json' },
    params: {
      f: letter,
    },
  });
  try {
    const response = await getRequestCocktailByLetter.get();
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

//Функция возвращает коктейль по идентификатору
export async function getCocktailById(id) {
  const getRequestCocktailById = axios.create({
    baseURL: `${BASE_URL}/lookup.php`,
    headers: { 'Content-Type': 'application/json' },
    params: {
      i: id,
    },
  });
  try {
    const response = await getRequestCocktailById.get();
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

//Функция возвращает ингридиент по идентификатору
export async function getIngredientById(id) {
  const getRequestIngredientById = axios.create({
    baseURL: `${BASE_URL}/lookup.php`,
    headers: { 'Content-Type': 'application/json' },
    params: {
      iid: id,
    },
  });
  try {
    const response = await getRequestIngredientById.get();
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
