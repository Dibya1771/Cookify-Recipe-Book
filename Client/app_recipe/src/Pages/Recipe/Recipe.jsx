import React from "react";
import "../../CSS/Recipe.css";
import Button from "@mui/material/Button";

const Recipe = () => {
    const ingredients = [
        "1 cup (2 sticks) unsalted butter, softened",
        "1 cup granulated sugar",
        "1 cup packed light brown sugar",
        "2 large eggs",
        "2 teaspoons vanilla extract",
        "2 cups all-purpose flour",
        "1 teaspoon baking soda",
        "1 teaspoon salt",
        "1 cup semisweet chocolate chips",
    ];

    const recipe = [
        "1. Preheat oven to 375 degrees F (190 degrees C).",
        "2. In a large mixing bowl, cream together the butter, granulated sugar, and brown sugar until light and fluffy. This can be done using an electric mixer or by hand using a wooden spoon. The creaming process incorporates air into the mixture, resulting in a softer and lighter cookie texture.",
        "3. Beat in the eggs one at a time, ensuring each egg is fully incorporated before adding the next. This step helps to emulsify the ingredients and create a cohesive dough. Mixing in the eggs gradually also prevents the dough from becoming too runny.",
        "4. Stir in the vanilla extract, which adds a delightful flavor to the cookies. Make sure to use pure vanilla extract for the best taste.",
        "5. In a separate bowl, whisk together the all-purpose flour, baking soda, and salt. The whisking action helps to evenly distribute the leavening agents (baking soda) and salt throughout the flour, ensuring consistent results.",
        "6. Gradually add the dry ingredients to the wet ingredients in the large mixing bowl. Mix until just combined, being careful not to overmix. Overmixing can lead to tough cookies.",
        "7. Stir in the chocolate chips, which provide delicious pockets of melted chocolate throughout the cookies. You can use either semi-sweet or milk chocolate chips, depending on your preference.",
        "8. Drop rounded tablespoons of dough onto ungreased baking sheets. You can use a cookie scoop or your hands to portion out the dough. Make sure to leave enough space between the dough balls for spreading during baking.",
        "9. Preheat the oven to 375 degrees F (190 degrees C) and bake the cookies for 10-12 minutes. The baking time may vary depending on your oven, so keep an eye on them. The cookies are ready when they turn golden brown around the edges.",
        "10. Once baked, remove the baking sheets from the oven and let the cookies cool on them for a few minutes. This allows the cookies to set slightly before transferring them to a wire rack.",
        "11. After a few minutes, carefully transfer the cookies to a wire rack to cool completely. This helps the cookies cool evenly and prevents them from becoming soggy on the bottom.",
        "12. Once cooled, enjoy the delicious homemade chocolate chip cookies with a glass of milk or a cup of tea. They are perfect for any occasion or as a treat for yourself or your loved ones!",
    ];

    return (
        <div className="ss_card">
            <div className="ss_video">
                <iframe
                    id="ss_iframe"
                    src="https://www.youtube.com/embed/DEsf5v9oB3I"
                ></iframe>
                <p>
                    if the above video doesn't play{" "}
                    <a href="https://www.youtube.com/watch?v=DEsf5v9oB3I">Click here</a>
                </p>
                <Button id="ss_add" variant="contained">
                    Add to favourites
                </Button>
            </div>
            <div className="ss_data">
                <div className="ss_data-child">
                    <h2 className="ss_item">Chocochip cookie</h2>
                    <div className="ss_ingredients">
                        <h3>Ingredients</h3>
                        <div className="ss_ingredient_child">
                            {ingredients.map((el, index) => (
                                <span key={index}>
                                    <ul>
                                        <li>{el}</li>
                                    </ul>
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="ss_recipe">
                        <h3>Recipe</h3>
                        <div className="ss_recipe_child"></div>
                        <p>
                            {recipe.map((el, index) => (
                                <span key={index}>{el}</span>
                            ))}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Recipe;
