import axios from 'axios';

const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/';

const getRequest = axios.create({
  baseURL: `${BASE_URL}`,
});

//Функция возвращает рамдомный коктейль
export async function getRandomCocktail() {
  try {
    const response = await getRequest('/random.php');
    return response.data.drinks[0];
  } catch (error) {
    console.log(error);
  }
}

//Функция возвращает коктейли по имени
export async function getCocktailByName(name) {
  try {
    const response = await getRequest('/search.php', {
      params: {
        s: name,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

//Функция возвращает ингридиент по имени
export async function getIngredientsByName(name) {
  try {
    const response = await getRequest('/search.php', {
      params: {
        i: name,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

//Функция возвращает коктейли по букве
export async function getCocktailByLetter(letter) {
  try {
    const response = await getRequest('/search.php', {
      params: {
        f: letter,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

//Функция возвращает коктейль по идентификатору
export async function getCocktailById(id) {
  try {
    const response = await getRequest('/lookup.php', {
      params: {
        i: id,
      },
    });
    return response.data.drinks[0];
  } catch (error) {
    console.log(error);
  }
}

//Функция возвращает ингридиент по идентификатору
export async function getIngredientById(id) {
  try {
    const response = await getRequest('/lookup.php', {
      params: {
        iid: id,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
