let search = document.querySelector('input');
let mealData = [];

document.addEventListener('submit', (e) => {
  e.preventDefault();
  mealsDisplay();
});

const fetchMeals = async () => {
  await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + search.value)
    .then((res) => res.json())
    .then((data) => (mealData = data.meals));
};
