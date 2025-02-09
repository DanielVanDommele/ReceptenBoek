# setup

* please run "npm install" on the folder to install the required packages and dependencies.
* Then, run "npm run dev" to start the application
* Lastly, open a browser and navigate to "localhost:3000" to start using the application


# short description

RecipeBook allows for digital collection of recipes. These recipes are listed on the left side and the currently selected one is visible on the right.
In the title bar there is a button to add a recipe. On the recipe details panel there is also a button in the form of a pencil to switch to edit mode, so that an existing recipe can be edited.
Once in edit mode, the pencil button has made way for a save (tick) button and cancel (black cross) button. The delete button is in the shape of a red cross in a circle.
The details of a recipe match the requirements as described in the assessment; however not only indication of vegeterian is recorded but also if the food item described in the recipe is vegan, gluten free, lactose free  and/or nuts free.


# technical details and choices

* the server side pages (app folder) are typescript files, whereas the contents of the page folder are javascript files. I could have made the components also typescript based but since I started out with javascript, I decided to continue in this way.
* A local temporary database in the form of a json object contains the pre-existing recipes and can be mutated by the user through the interface. Because of the time constraint I decided to opt for the easiest solution here and not use SQLite.
* State for being in or out of edit mode as well as the currently selected recipe is managed through the nextjs Context API. I have looked in to alternatives such as Zustand and Redux, but for the size of this project I figured Context API  would be more than sufficient. Redux, according to internet sources didn't give that much extra and Zustand had a lot more configuration and setup which I deemed not necessary for the assignment for the size of the assignment. For other/greater projects I would look into it more.
* A custom event is used through the document dispatchEvent method to update the list (by re-fetching the recipes) after a Update or Delete action was taken. Since my konwledge of React/Next.JS was limited compared to javascript/Typescript and Vue, I didn't know of another way to automatically fetch the data after the PUT/POST/DELETE request was sent. I tried to achieve as much as I was able to in this weekend.


# TODO (due to running out of time)

The following had yet to be implented:
* Using the Ingredient REST api, although the way I set up storing the recipes made it obsolete;
* Adding an ingredient (there is code but the ui isn't updated)
* Adding a cooking instruction line (there is code but the ui isn't updated)
* Deleting an ingredient (there is code but the ui isn't updated)
* Deleting a cooking instruction line 
* confirmation for deleting an ingredient or recipe
* warning for navigating to other recipe without saving modifications first
* a name prompt for adding a new recipe (instead the recipe is created with the temporary name "Nieuw recept")
* Written out Test cases 

REST implementation exists for these operations, where the cooking instructions do not have seperate REST api.