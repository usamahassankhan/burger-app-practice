import React from 'react';
import Aux from '../../../hoc/Auxilary';
import Button from '../../UI/Button/Button';
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
     <p><strong>Total Price:{props.price.toFixed(2)}</strong></p>
     <p>continue to checkout?</p>
     <Button btnType="Danger" clicked={props.purchaseCancled}>CANCEL</Button>
     <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
</Aux>

);
};
export default orderSummary;
