// Search Meals

const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  resetPreview();

  fetch(
    'https://www.themealdb.com/api/json/v1/1/search.php?s=' +
      `${searchInput.value}`
  )
    .then((resp) => resp.json())
    .then((data) =>
      data.meals == null ? returnNone(data.meals) : renderSearch(data.meals)
    );
});

function renderSearch(meals) {
  meals.forEach((meal) => {
    const previewImage = document.createElement('img');
    previewImage.className = 'previewImage';
    previewImage.src = meal.strMealThumb;
    preview.append(previewImage);
    searchForm.reset();

    previewImage.addEventListener('click', () => {
      renderDetails(meal);
    });
  });
}

// Alert if no recipe is found
function returnNone() {
  alert('Recipe not found');
  searchForm.reset();
}
