import React from "react";
import DUMMY_MEALS from "./DUMMY_MEALS"
import MealItem from "./MealItem";
import Card from "../UI/Card";

const MealsAvailable = () => {
    return (
			<section>
					<Card>
						{DUMMY_MEALS.map((meal) => (
							<MealItem
								key={meal.id}
								name={meal.name}
								description={meal.description}
								price={meal.price}
							></MealItem>
						))}
					</Card>
			</section>
		);
}

export default MealsAvailable;