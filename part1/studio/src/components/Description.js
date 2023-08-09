import React from 'react';
import styles from './Description.module.css';

let recipeTitle = "Birria Tacos";
let recipeShortDesc = "These Birria Tacos are supremely delicious! Melt-in-the-mouth beef, rich in Mexican flavors, all mingling with melted cheese and wrapped in a crunchy tortilla. You have to give these a try!";

export function RecipeAuthor(){
    let authorLink = "https://www.thecookierookie.com/";
    let authorPhoto = "https://www.thecookierookie.com/wp-content/uploads/2020/09/headshot-the-cookie-rookie-2018-1-of-1-240x240.jpg";
    let authorName = "Becky Harden";

    return (
        <div className={styles.recipeAuthorBlock}>
            <img 
            src={authorPhoto} 
            alt={authorName} 
            className={styles.imageUpdates} />
            <div>
                <h3>{authorName}</h3>
                <a href={authorLink}>The Cookie Rookie</a>
            </div>
        </div>
    );
};

class RecipeDescription extends React.Component {
    render () {
        return (
        <div> 
            <div>
                <h1>{recipeTitle}</h1>
                <p>{recipeShortDesc}</p>
            </div>
            <RecipeAuthor />
         </div>
        );
    }
}

export default RecipeDescription;