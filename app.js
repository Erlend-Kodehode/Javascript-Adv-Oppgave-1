/******************************************************************************
High order methods assignment

Read the assignment text CAREFULLY. 

Add comments to your code that briefly describe what your code does.

You are provided an object array that represent products for an online store.

Your tasks are:

1. Use .filter() to extract all products that cost less than 200

2. Use .map() to make a list that only contain the product names

3. Use a chained combination of .filter() and .map() to list only
the names of all products in a specific category (e.g. 'electronics')

4. Use .some() to check if there are any products that cost more than 1000

5. Use .reduce() to find the total cost of all the products.

******************************************************************************/

const products = [
  { name: "Smartphone", price: 800, category: "electronics" },
  { name: "Headphones", price: 150, category: "electronics" },
  { name: "Coffee Maker", price: 100, category: "home appliances" },
  { name: "Blender", price: 250, category: "home appliances" },
  { name: "Laptop", price: 1200, category: "electronics" },
  { name: "T-shirt", price: 50, category: "clothing" },
  { name: "Sneakers", price: 300, category: "clothing" },
];

//makes a list of products that costs less than 200 by filtering out any that costs above that
const cheapProducts = products.filter((e) => e.price < 200);

//makes a list that only contains the product names
const productNames = products.map((e) => e.name);

//variable to change what you are filtering for
const filterCateg = "electronics";
//filters out products out of a specific category and puts the names of the products in a list
const specifProductNames = products
  .filter((e) => e.category === filterCateg)
  .map((e) => e.name);

//a bool that is true if there are any products that costs more than 1000
expensiveProducts = products.some((e) => e.price > 1000);

//the total cost of the products
totalCost = products.reduce((total, e) => total + e.price, 0);
