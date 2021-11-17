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
  // const mealData = meals.meals[0]
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

// Search

const searchForm = document.getElementById('searchForm')
const searchInput = document.getElementById('searchInput')

searchForm.addEventListener('submit', (e) => {
  e.preventDefault()
fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + `${searchInput.value}`)
  .then((resp) => resp.json())
  .then((data) => renderSearch(data.meals));
})
function renderSearch (meals) {
  meals.forEach((meal) => {
    const previewImage = document.createElement('img');
    const previewMealName = document.createElement('h3')
    previewImage.className = 'previewImage';
    previewImage.src = meal.strMealThumb;
    preview.append(previewImage);
  })
}
renderSearchMain()
function renderSearchMain(meal) {
  previewImage.addEventListener('click', () => {
    mealNameInsert.innerText = meal.strMeal;
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
    // console.log(ingredients);
  });
}



// function renderMain(meals) {
//   previewImage.addEventListener('click', () => {
//     mealNameInsert.innerText = meals.strMeal;
//     mealName.append(mealNameInsert);
//     instructionsInsert.innerText = meals.strInstructions;
//     instructions.append(instructionsInsert);

//     bigPictureInsert.src = meals.strMealThumb;
//     bigPictureInsert.id = 'bigPictureInsert';
//     bigPicture.append(bigPictureInsert);

//     const ingredientsList = [];
//     for (let i = 0; i <= 20; i++) {
//       if (meals[`strIngredient${i}`]) {
//         ingredientsList.push(
//           `${meals[`strIngredient${i}`]} - ${meals[`strMeasure${i}`]}`
//         );
//       }
//       // } else {
//       //   break;
//       // }
//     }

//     // const addIngredient = document.createElement('li');
//     const addInnerHTML = `
//         <ul>
//           ${ingredientsList
//             .map((ingredient) => `<li>${ingredient}</li>`)
//             .join('')}
//         </ul>`;

//     ingredients.innerHTML = addInnerHTML;
//     // console.log(ingredients);
//   });
  
// }









// Area Select
// const areaURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=';
// const areaForm = document.getElementById('areaForm');
// const select = document.getElementById('areaSelect');


// areaForm.addEventListener('submit', (e) => {
//   e.preventDefault();
//   fetch(areaURL + `${select.value}`)
//     .then((resp) => resp.json())
//     .then((data) => renderArea(data.meals));
//   });
//   function renderArea(areaMeals) {
//     areaMeals.forEach((meal) => {
//       const previewImage = document.createElement('img');
//       const previewMealName = document.createElement('h3')
//       previewImage.className = 'previewImage';
//       previewImage.src = meal.strMealThumb;
//       previewImage.alt = meal.idMeal
//       previewMealName.innerText = meal.strMeal
//       previewMealName.id = 'previewMealName'
//       preview.append(previewImage);
//       previewImage.appendChild(previewMealName)
    

      
//       previewImage.addEventListener('click', () => {
//         fetch('www.themealdb.com/api/json/v1/1/lookup.php?i=' + `${previewImage.alt}`)
//         .then((resp) => resp.json())
//         .then((data) => renderAreaMain(data.meals[0]));

        
//         mealNameInsert.innerText = meal.strMeal;
//         console.log(mealNameInsert)
//         mealName.append(mealNameInsert);
//         instructionsInsert.innerText = meal.strInstructions;
//         instructions.append(instructionsInsert);
    
//         bigPictureInsert.src = meal.strMealThumb;
//         bigPictureInsert.id = 'bigPictureInsert';
//         bigPicture.append(bigPictureInsert);
    
//         const ingredientsList = [];
//         for (let i = 0; i <= 20; i++) {
//           if (meal[`strIngredient${i}`]) {
//             ingredientsList.push(
//               `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
//             );
//           }
//           // } else {
//           //   break;
//           // }
//         }
    
//         // const addIngredient = document.createElement('li');
//         const addInnerHTML = `
//             <ul>
//               ${ingredientsList
//                 .map((ingredient) => `<li>${ingredient}</li>`)
//                 .join('')}
//             </ul>`;
    
//         ingredients.innerHTML = addInnerHTML;
      
    
//     })

//     });
//   }



  
//   function renderAreaMain(meals) {
//     previewImage.addEventListener('click', () => {
//     fetch('www.themealdb.com/api/json/v1/1/lookup.php?i=' + `${previewImage.alt}`)
//     .then((resp) => resp.json())
//     .then((data) => renderAreaMain(data.meals[0]));
//     mealNameInsert.innerText = meals.strMeal;
//     mealName.append(mealNameInsert);
//     instructionsInsert.innerText = meals.strInstructions;
//     instructions.append(instructionsInsert);

//     bigPictureInsert.src = meals.strMealThumb;
//     bigPictureInsert.id = 'bigPictureInsert';
//     bigPicture.append(bigPictureInsert);

//     const ingredientsList = [];
//     for (let i = 0; i <= 20; i++) {
//       if (meals[`strIngredient${i}`]) {
//         ingredientsList.push(
//           `${meals[`strIngredient${i}`]} - ${meals[`strMeasure${i}`]}`
//         );
//       }
//       // } else {
//       //   break;
//       // }
//     }

//     // const addIngredient = document.createElement('li');
//     const addInnerHTML = `
//         <ul>
//           ${ingredientsList
//             .map((ingredient) => `<li>${ingredient}</li>`)
//             .join('')}
//         </ul>`;

//     ingredients.innerHTML = addInnerHTML;
  

// })
// }













// Area Select
// const areaURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=';
// const areaForm = document.getElementById('areaForm');
// const select = document.getElementById('areaSelect');


// areaForm.addEventListener('submit', (e) => {
//   e.preventDefault();
//   fetch(areaURL + `${select.value}`)
//     .then((resp) => resp.json())
//     .then((data) => renderArea(data.meals));

//   function renderArea(areaMeals) {
//     areaMeals.forEach((meal) => {
//       const previewImage = document.createElement('img');
//       previewImage.className = 'previewImage';
//       previewImage.src = meal.strMealThumb;
//       previewImage.alt = meal.idMeal
//       preview.append(previewImage);

      
//       previewImage.addEventListener('click', () => {
//         fetch('www.themealdb.com/api/json/v1/1/lookup.php?i=' + `${previewImage.alt}`)
//         .then((resp) => resp.json())
//         .then((data) => renderAreaMain(data.meals[0]));

        
//         mealNameInsert.innerText = meal.strMeal;
//         console.log(mealNameInsert)
//         mealName.append(mealNameInsert);
//         instructionsInsert.innerText = meal.strInstructions;
//         instructions.append(instructionsInsert);
    
//         bigPictureInsert.src = meal.strMealThumb;
//         bigPictureInsert.id = 'bigPictureInsert';
//         bigPicture.append(bigPictureInsert);
    
//         const ingredientsList = [];
//         for (let i = 0; i <= 20; i++) {
//           if (meal[`strIngredient${i}`]) {
//             ingredientsList.push(
//               `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
//             );
//           }
//           // } else {
//           //   break;
//           // }
//         }
    
//         // const addIngredient = document.createElement('li');
//         const addInnerHTML = `
//             <ul>
//               ${ingredientsList
//                 .map((ingredient) => `<li>${ingredient}</li>`)
//                 .join('')}
//             </ul>`;
    
//         ingredients.innerHTML = addInnerHTML;
      
    
//     })

//     });
//   }
// });