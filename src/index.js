    const preview = document.getElementById('preview');
    const previewImage = document.createElement('img');
    const mealName = document.getElementById('mealName')
    const mealNameInsert = document.createElement('h2')
    const instructions = document.getElementById('instructions')
    const instructionsInsert = document.createElement('p')
    const bigPicture = document.getElementById('bigPicture')
    const bigPictureInsert = document.createElement('img')
    const random = document.getElementById('random')
    
    
// Random Meal
random.addEventListener('click', () => {   
fetch('https://www.themealdb.com/api/json/v1/1/random.php')
  .then((resp) => resp.json())
  .then(data => renderPreview(data.meals[0]));

function renderPreview(meals) {
  // const mealData = meals.meals[0]  
  previewImage.id='previewImage'

  

  previewImage.src = meals.strMealThumb
  preview.append(previewImage);
  console.log(previewImage);

  previewImage.addEventListener('click', () => {
  
  mealNameInsert.innerText = meals.strMeal
  mealName.append(mealNameInsert)
  instructionsInsert.innerText = meals.strInstructions
  instructions.append(instructionsInsert)

  bigPictureInsert.src = meals.strMealThumb
  bigPictureInsert.id = 'bigPictureInsert'
  bigPicture.append(bigPictureInsert)
   
    for (let i = 0; i <= 20; i++) {
      const ingredients = document.getElementById('ingredients')
        const addIngredient = document.createElement('li')
        addIngredient.innerText = meals.strIngredient1[i]
        ingredients.appendChild(addIngredient)
      } 
  })
}
})


// Meal Search
