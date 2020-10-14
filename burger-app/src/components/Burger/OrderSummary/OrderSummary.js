import React from 'react';
import Aux from '../../../hoc/Auxilary';
const orderSummary=(props)=>{
  const ingredientSummary = Object.keys(props.ingredients)
  .map(igKey=>{
  return (<li><span style={{textTransform:'capitalize'}}>{igKey}</span>:{props.ingredients[igKey]}</li>);//props.ingredients[igKey]=value of key
  }) ; 
return(
<Aux>
    <h3>Your order</h3>
    <p>A delicious burger with thefollowing ingredients</p>
     <ul>
{ingredientSummary}
     </ul>
     <p>continue to checkout?</p>
</Aux>

);
};
export default orderSummary;
