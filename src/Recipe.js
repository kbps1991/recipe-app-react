import React from 'react';
import style from './recipe.module.css'

const Recipe = ({title,calories,image,ingredients,dietLabels}) => {
    let dietLabel="";
    dietLabels.forEach(element => {
        dietLabel = `${dietLabel} ${element}`
    });
    return (
        <div className={style.recipes}>
            <h1>{title}</h1>
            <h3>Ingredients</h3>
            <div className={style.calorie}><b className={style.label}>Diet Label:</b><p className={style.text}>{dietLabel ? dietLabel : "NA"}</p></div>
            <ol className={style.inglist}>
                {
                    ingredients.map(ingredient=>(
                        <li>{ingredient.text}</li>
                    ))
                }
            </ol>
            <div className={style.calorie}><b className={style.label}>Calories:</b><p className={style.text}>{calories.toFixed(0)}kcal</p></div>
            <img className={style.foodimg} src={image} alt={title}></img>
        </div>
    );
}

export default Recipe;
