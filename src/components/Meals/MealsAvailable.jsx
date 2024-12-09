import React from "react";
import DUMMY_MEALS from "./DUMMY_MEALS"

const MealsAvailable = () => {
    return (
        <section>
            <ul>
                {DUMMY_MEALS.map(meal => <li>{meal.name}</li>)}
        </ul>
        </section>
    )
}

export default MealsAvailable;