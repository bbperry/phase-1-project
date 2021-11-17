



// Area Select
const areaURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=';
const areaForm = document.getElementById('areaForm');
const select = document.getElementById('areaSelect');


areaForm.addEventListener('submit', (e) => {
  e.preventDefault();
  fetch(areaURL + `${select.value}`)
    .then((resp) => resp.json())
    .then((data) => renderArea(data.meals));

  function renderArea(areaMeals) {
    areaMeals.forEach((meal) => {
      const previewImage = document.createElement('img');
      previewImage.className = 'previewImage';
      previewImage.src = meal.strMealThumb;
      previewImage.alt = meal.idMeal
      preview.append(previewImage);

      
      previewImage.addEventListener('click', () => {
        fetch('www.themealdb.com/api/json/v1/1/lookup.php?i=' + `${previewImage.alt}`)
        .then((resp) => resp.json())
        .then((data) => renderAreaMain(data.meals[0]));

        
        mealNameInsert.innerText = meal.strMeal;
        console.log(mealNameInsert)
        mealName.append(mealNameInsert);
        instructionsInsert.innerText = meal.strInstructions;
        instructions.append(instructionsInsert);
    
        bigPictureInsert.src = meal.strMealThumb;
        bigPictureInsert.id = 'bigPictureInsert';
        bigPicture.append(bigPictureInsert);
    
        const ingredientsList = [];
        for (let i = 0; i <= 20; i++) {
          if (meal[`strIngredient${i}`]) {
            ingredientsList.push(
              `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
            );
          }
          // } else {
          //   break;
          // }
        }
    
        // const addIngredient = document.createElement('li');
        const addInnerHTML = `
            <ul>
              ${ingredientsList
                .map((ingredient) => `<li>${ingredient}</li>`)
                .join('')}
            </ul>`;
    
        ingredients.innerHTML = addInnerHTML;
      
    
    })

    });
  }
});