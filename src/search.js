// Search

const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  while (preview.lastElementChild) {
    preview.removeChild(preview.lastElementChild);
  }

  fetch(
    'https://www.themealdb.com/api/json/v1/1/search.php?s=' +
      `${searchInput.value}`
  )
    .then((resp) => resp.json())
    .then((data) => data.meals == null ? returnNone(data.meals) : renderSearch(data.meals));
});
function renderSearch(meals) {
    
    meals.forEach((meal) => {
      const previewImage = document.createElement('img');
      // const previewMealName = document.createElement('h3');
      
      previewImage.className = 'previewImage';
      previewImage.src = meal.strMealThumb;
      preview.append(previewImage);
      searchForm.reset();
      
      previewImage.addEventListener('click', () => {
        mealNameInsert.innerText = meal.strMeal;
        mealName.append(mealNameInsert);
        area.innerText = meal.strArea;
        mealName.appendChild(area);
        instructionsInsert.innerText = meal.strInstructions;
        instructions.append(instructionsInsert);

        bigPictureInsert.src = meal.strMealThumb;
        bigPictureInsert.id = 'bigPictureInsert';
        bigPicture.append(bigPictureInsert);

        recipe(meal);
        video(meal);
      });
    });
  }


function returnNone(){
  alert('Recipe not found')
  searchForm.reset()
}