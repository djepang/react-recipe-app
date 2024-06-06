const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const recipes = [
{
    id: 1,
    name: 'Spaghetti Carbonara',
    image: 'https://source.unsplash.com/200x200/?spaghetti',
    ingredients: [
    '200g Spaghetti',
    '100g Pancetta',
    '2 large eggs',
    '50g Pecorino cheese',
    '50g Parmesan',
    'Black pepper',
    'Salt',
    ],
    instructions:
    'Cook the spaghetti. Meanwhile, fry the pancetta. Beat the eggs and mix with cheese. Combine everything.',
},
{
    id: 2,
    name: 'Chicken Curry',
    image: 'https://source.unsplash.com/200x200/?curry',
    ingredients: [
    '500g chicken breast',
    '2 onions',
    '3 cloves garlic',
    '1 tbsp curry powder',
'400ml coconut milk',
'Salt',
'Pepper',
    ],
    instructions: 'Cook the onions and garlic. Add chicken and curry powder. Stir in coconut milk and simmer.',
},
];

app.get('/api/recipes', (req, res) => {
res.json(recipes);
});

const PORT = 5000;
app.listen(PORT, () => {
console.log(`Server is running on http://localhost:${PORT}`);
});
