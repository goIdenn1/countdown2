import Meal from "./Meal.js"
import {useState} from 'react'

function Menu (props){
    const [showOnlyVege, setShowOnlyVege] = useState(false);
    return(<>
        <h1>Menu</h1>
        {/*comment*/  
        /* code goes in squiggly brackets*/}
        {showOnlyVege && <button onClick={() => setShowOnlyVege(false)} > Show All </button>}
        {!showOnlyVege && <button onClick={() => setShowOnlyVege(true)} > Show Only Vegetarian </button>}
        {Object.keys(props.menu).map((mealName) => <Meal name={mealName} items={props.menu[mealName]} onlyVegetarian = {showOnlyVege}/>)}
    </>);
}
export default Menu;