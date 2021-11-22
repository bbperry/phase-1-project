const preview = document.getElementById('preview');
const previewImage = document.createElement('img');
const mealName = document.getElementById('mealName');
const mealNameInsert = document.createElement('h2');
const instructions = document.getElementById('instructions');
const instructionsInsert = document.createElement('p');
const bigPicture = document.getElementById('bigPicture');
const bigPictureInsert = document.createElement('img');
const random = document.getElementById('random');
const ingredients = document.getElementById('ingredients');
const reset = document.getElementById('reset');
const area = document.createElement('h4');

// Random Meal

reset.addEventListener('click', () => window.location.reload());

random.addEventListener('click', () => {
  fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then((resp) => resp.json())
    .then((data) => renderPreview(data.meals[0]));

  function renderPreview(meals) {
    while (preview.lastElementChild) {
      preview.removeChild(preview.lastElementChild);
    }
    previewImage.className = 'previewImage';
    previewImage.src = meals.strMealThumb;
    preview.append(previewImage);
    renderMain(meals);
  }
});
function renderMain(meals) {
  previewImage.addEventListener('click', () => {
    renderDetails(meals);
  });
}

function recipe(meal) {
  const ingredientsList = [];
  for (let i = 0; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredientsList.push(
        `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
      );
    }
  }

  const addInnerHTML = `
      <h3>Ingredients:</h3>
        <ul>
          ${ingredientsList
            .map((ingredient) => `<li>${ingredient}</li>`)
            .join('')}
        </ul>
        `;

  ingredients.innerHTML = addInnerHTML;
}

function video(meal) {
  const video = document.getElementById('video');
  address = meal.strYoutube;
  console.log(address);
  let videoId = address.slice(address.length - 11, address.length);
  let videoURL = `https://www.youtube.com/embed/` + `${videoId}`;
  video.innerHTML = `<iframe width="420" height="315"
src= ${videoURL}>
</iframe>`;
  console.log(videoURL);
}

function renderDetails(meals) {
  mealNameInsert.innerText = meals.strMeal;
  mealName.append(mealNameInsert);
  area.innerText = meals.strArea;
  mealName.appendChild(area);
  instructionsInsert.innerText = meals.strInstructions;
  instructions.append(instructionsInsert);

  bigPictureInsert.src = meals.strMealThumb;
  bigPictureInsert.id = 'bigPictureInsert';
  bigPicture.append(bigPictureInsert);

  recipe(meals);
  video(meals);
}
