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
  if (mealData === null) {
    result.innerHTML = `
      <h2>Aucun résultat</h2> 
    `;
  } else {
    mealData.length = 12;

    result.innerHTML = mealData
      .map((meal) => {
        let ingredients = [];
        for (let i = 0; i < 21; i++) {
          if (meal[`strIngredient${i}`]) {
            let ingredient = meal[`strIngredient${i}`];
            let measure = meal[`strMeasure${i}`];
            ingredients.push(`<li>${ingredient} - ${measure}</li>`);
          }
        }
        console.log(ingredients);
        return `
          <li>
            <h2>${meal.strMeal}</h2>
            <p>${meal.strArea}</p>          
            <img src='${meal.strMealThumb}'>
            <ul>${ingredients.join('')}</ul>
          </li>
            `;
      })
      .join(' ');
  }
};

input.addEventListener('input', (e) => {
  fetchMeals(e.target.value);
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  mealsDisplay();
});
