import React from "react";
import { Card, Button } from "antd";


function FoodBox (props){
    const{name,image,calories,servings} =props.food;

    return(
        <Card
    title={name}
    style={{ width: 230, height: 300, margin: 10 }}
  >
    <img src={image} height={60} />
    <p>Calories: {calories}</p>
    <p>Servings: {servings}</p>
    <p>
      <b>Total Calories: {calories * servings} </b> kcal
    </p>
    <Button type="primary"> Delete </Button>
  </Card>
    );
}

export default FoodBox;