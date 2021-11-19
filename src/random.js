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

// Random Meal

reset.addEventListener('click', () => window.location.reload());

fetch('https://www.themealdb.com/api/json/v1/1/random.php')
  .then((resp) => resp.json())
  .then((data) => renderPreview(data.meals[0]));

function renderPreview(meals) {
  previewImage.className = 'previewImage';

  random.addEventListener('click', () => {
    previewImage.src = meals.strMealThumb;
    preview.append(previewImage);
    renderMain(meals);
  });
}

function renderMain(meals) {
  previewImage.addEventListener('click', () => {
    mealNameInsert.innerText = meals.strMeal;
    mealName.append(mealNameInsert);
    instructionsInsert.innerText = meals.strInstructions;
    instructions.append(instructionsInsert);

    bigPictureInsert.src = meals.strMealThumb;
    bigPictureInsert.id = 'bigPictureInsert';
    bigPicture.append(bigPictureInsert);

    const ingredientsList = [];
    for (let i = 0; i <= 20; i++) {
      if (meals[`strIngredient${i}`]) {
        ingredientsList.push(
          `${meals[`strIngredient${i}`]} - ${meals[`strMeasure${i}`]}`
        );
      }
    }

    const addInnerHTML = `
        <ul>
          ${ingredientsList
            .map((ingredient) => `<li>${ingredient}</li>`)
            .join('')}
        </ul>`;

    ingredients.innerHTML = addInnerHTML;

console.log(meals.strYoutube)

  });
}

