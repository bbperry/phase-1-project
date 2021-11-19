// Search

const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  fetch(
    'https://www.themealdb.com/api/json/v1/1/search.php?s=' +
      `${searchInput.value}`
  )
    .then((resp) => resp.json())
    .then((data) => renderSearch(data.meals));
});
function renderSearch(meals) {
  meals.forEach((meal) => {
    const previewImage = document.createElement('img');
    // const previewMealName = document.createElement('h3');
    previewImage.className = 'previewImage';
    previewImage.src = meal.strMealThumb;
    preview.append(previewImage);
    previewImage.addEventListener('click', () => {
      mealNameInsert.innerText = meal.strMeal;
      mealName.append(mealNameInsert);
      instructionsInsert.innerText = meal.strInstructions;
      instructions.append(instructionsInsert);

      bigPictureInsert.src = meal.strMealThumb;
      bigPictureInsert.id = 'bigPictureInsert';
      bigPicture.append(bigPictureInsert);

      recipe(meal);
    });
  });
}