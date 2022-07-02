let input = document.querySelector('input');
let form = document.querySelector('form');
let mealData = [];

const fetchMeals = async (search) => {
  await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + search)
    .then((res) => res.json())
    .then((data) => (mealData = data.meals));
  console.log(mealData);
};

const mealsDisplay = () => {
  mealData.length = 12;

  result.innerHTML = mealData
    .map(
      (meal) =>
        `
    <li>
          <h2>${meal.strMeal}</h2>
          <p>${meal.strArea}</p>          
          <img src='${meal.strMealThumb}'>
          </li>
          `
    )
    .join(' ');
};

input.addEventListener('input', (e) => {
  fetchMeals(e.target.value);
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  mealsDisplay();
});
