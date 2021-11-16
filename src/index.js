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
const reset = document.getElementById('reset')

// Random Meal

reset.addEventListener('click', () => window.location.reload())

fetch('https://www.themealdb.com/api/json/v1/1/random.php')
  .then((resp) => resp.json())
  .then((data) => renderPreview(data.meals[0]));

function renderPreview(meals) {

  // const mealData = meals.meals[0]
  previewImage.id = 'previewImage';

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
    // console.log(ingredients);
  });
}

// Area Select
const areaURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?a='
const createTaskForm = document.getElementById('createTaskForm')
const select = document.getElementById('areaSelect')
const select2 = select.value
const submit1 = document.getElementById('createTaskForm').value



createTaskForm.addEventListener('submit', (e) => { 
  e.preventDefault()
  console.log(submit1)
  fetch(areaURL + `${submit1}`)
  .then((resp) => resp.json())
  .then((data) => renderArea(data.meals[0]));

  function renderArea(areaMeals) {
    
    previewImage.src = areaMeals.strMealThumb;
    preview.append(previewImage);
  }

})
console.log(select)
// select.addEventListener()
// fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Mexican')

// Meal Search



const recipeList = document.getElementById('preview');
const searchRecipeForm = document.getElementById('searchForm');
const searchURL = 'www.themealdb.com/api/json/v1/1/search.php?f='

function searchRecipes(e) {

  e.preventDefault();
  
  //recipeList.replaceChildren();

  let query = document.querySelector('#searchInput').value;

    //searchRecipeForm.reset();

  fetch('searchURL')  //+ `${query}`
    .then(resp => resp.json()) 
    .then(recipes => {
      // .then((resp) => resp.json())
      // .then((data) => renderPreview(data.meals[0]));

        { recipes.length == 0 ? returnNone() : recipes.forEach(renderPreview) }
    });
  
}

searchRecipeForm.addEventListener('submit', searchRecipes);