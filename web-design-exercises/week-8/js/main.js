$(document).ready(function() {
	let recipes = [
		{name:'Garden Potato Salad',
		ingredients: ['2 cloves garlic, peeled', 
		'1/2 cup mayonnaise', 
		'8 cups water',
		'2/3 cup dry white vermouth', 
		'3 cloves garlic, smashed', 
		'2 tablespoons kosher salt plus additional for seasoning', 
		'1 sprig fresh thyme', 
		'1 bay leaf', 
		'4 black peppercorns',
		'2 pounds small red-skinned waxy potatoes, sliced into 1/8-inch-thick rounds',
		'5 medium carrots, peeled and sliced into 1/8-inch-thick rounds',
		'1 bunch radishes, sliced into 1/8-inch-thick rounds (about 8)',
		'1/2 English cucumber or 1 large Kirby cucumber, sliced into 1/8-inch-thick rounds',
		'1 cup grape or cherry tomatoes, halved',
		'1/2 cup lightly packed chopped mixed fresh herbs, such as flat-leaf parsley, dill, or tarragon',
		'6 lemon wedges'],
		directions: ['For the dressing: Smash the garlic cloves, sprinkle with the salt, and, with the flat side of a large knife, mash and smear the mixture to a coarse paste. Put in a bowl and whisk with the mayonnaise, vinegar, and black pepper to taste.',
		'For the salad: Put the water, vermouth, garlic, salt, thyme, bay leaf, peppercorns, and potatoes in a large saucepan and bring to a boil. Add the carrots, lower the heat, and cook until the vegetables are tender but not mushy, about 5 minutes. Stir in the radishes, then immediately drain all the vegetables in a colander in the sink. Remove and discard the garlic, thyme, bay leaf, and peppercorns. Cool slightly and toss the vegetables with the dressing. Cover and refrigerate about 30 minutes. (The salad can be prepared up to this point a day ahead.)',
		'About 10 minutes before serving, toss the cucumber, tomatoes, and scallions in a small bowl with salt and black pepper to taste. When ready to serve, fold the cucumber mixture and herbs into the potato salad. Serve with lemon wedges.'
		]},
		{name: 'Smoked Salmon Spread',
		ingredients:['8 ounces cream cheese, at room temperature',
		'1/2 cup sour cream',
		'1 tablespoon freshly squeezed lemon juice',
		'1 tablespoon minced fresh dill',
		'1 teaspoon prepared horseradish, drained',
		'1/2 teaspoon kosher salt',
		'1/4 teaspoon freshly ground black pepper',
		'1/4 pound (4 ounces) smoked salmon, minced'],
		directions: ['Cream the cheese in an electric mixer fitted with a paddle attachment until just smooth. Add the sour cream, lemon juice, dill, horseradish, salt, and pepper, and mix. Add the smoked salmon and mix well. Chill and serve with crudites or crackers.',
		'If you can find it, I prefer Norwegian salmon; it is drier and less salty than other smoked salmon.']
		},
		{name: 'Light Tacos',
		ingredients:['1/2 onion, peeled and thinly sliced, divided',
		'4 cloves garlic, halved and smashed, divided',
		'2 1/4 pound flank steak',
		'Salt and freshly ground black pepper',
		'1 cup light-colored beer, preferably lager',
		'1 large lime, juiced',
		'1/2 serrano chile, seeded and minced',
		'1 green onion, thinly sliced',
		'2 teaspoons chopped fresh cilantro',
		'1 head butter lettuce, leaves separated',
		'1 avocado, peeled, pitted, and thinly sliced'],
		directions: ['For the steak: Scatter half the orange slices, half the onion slices, and half the garlic pieces on the bottom of a glass dish large enough to hold the flank steak. Sprinkle the flank steak all over with salt and pepper and place in the prepared baking dish. Scatter the remaining oranges, onions, and garlic over the flank steak and pour the beer over. Cover with plastic wrap and let stand for 1 hour at room temperature or overnight in the fridge.',
		'Place a grill pan over medium-high heat or preheat a gas or charcoal grill.',
		'Remove the meat from the marinade. Discard the marinade. Grill the steak to desired doneness, about 4 minutes per side for medium-rare. Let the steak rest for 10 minutes. Transfer the grilled flank steak to a cutting board and cut crosswise into strips.',
		'For the salsa: In a small bowl mix together the salsa ingredients.',
		'To assemble: Using the butter lettuce leaves, make tacos using slices of flank steak and avocados. Drizzle with the salsa.'
		]}
	];
	for (var i = 0; i < recipes.length; i++) {
		$('.dishName').eq(i).text(recipes[i].name);
		for(let j = 0; j < recipes[i].ingredients.length; j++){
			$('.ingredient-list').eq(i).append('<li>'+recipes[i].ingredients[j]+'</li>');
		}
		for(let k = 0; k < recipes[i].directions.length; k++){
			$('.directions').eq(i).append('<p>'+recipes[i].directions[k]+'</p>');
		}

	}
});