let menuItem = {
  name: 'Kale Caesar Salad',
  nickName: 'All Hail Kale',
  referenceID: 'SLD001',
  description:'Kale is king in this hearty, flavorful salad that pays homage to the traditional - but with a healthy twist',
  highInCalories: false,
  ingredients: [
    'Kale',
    'Caesar dressing',
    'Anchovy paste',
    'Grilled corn',
    'Parmesan cheese',
    'Croutons'],
  numIngredients: function() {
    return this.ingredients.length;
  }
};

menuItem.yearAdded = 2017;
menuItem.meals = ['lunch', 'dinner'];
delete menuItem.highInCalories;
menuItem.calories = 560;
delete menuItem.nickName;
menuItem.ingredients.push('lemon juice');

// console.log(menuItem)
console.log("\n\n******menuItem Object******");
Object.entries(menuItem).forEach(([key, value]) => {
  if (key != 'numIngredients')
  console.log(`${key}: ${value}`)
});
console.log(`Number of ingredients = ${menuItem.numIngredients()}`);