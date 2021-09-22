import { useState } from "react";
import foods from "../foods.json";
import FoodBox from "./FoodBox";



function FoodList() {
    //Lista de TODOS LOS PLATOS
    const [foodData, setfoodData] = useState(foods);
    //Lista de PLATOS MOSTRADAS en pantalla
    //const [food, setfood] = useState(foods);

    const array = [1,2,3]

    return (
        
        <>
    {
        foodData.map(elm =>{
        return (
            <FoodBox food={elm}/>
           
 
        )
    })
    }
    </>
    )
}
    export default FoodList;