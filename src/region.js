// Area Select
const areaURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=';
const areaForm = document.getElementById('areaForm');
const select = document.getElementById('areaSelect');

// Display meals from selected area
areaForm.addEventListener('change', () => {
  resetPreview();
  fetch(areaURL + `${select.value}`)
    .then((resp) => resp.json())
    .then((data) => renderArea(data.meals));

  function renderArea(areaMeals) {
    areaMeals.forEach((meal) => {
      const previewImage = document.createElement('img');
      previewImage.className = 'previewImage';
      previewImage.src = meal.strMealThumb;
      previewImage.alt = meal.idMeal;
      preview.append(previewImage);

      //   Look up clicked meal by ID
      previewImage.addEventListener('click', () => {
        fetch(
          'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' +
            `${previewImage.alt}`
        )
          .then((resp) => resp.json())
          .then((data) => renderDetails(data.meals[0]));
      });
    });
  }
});
