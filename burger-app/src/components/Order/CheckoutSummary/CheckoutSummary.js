import React from 'react';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css'
import Burger from '../../Burger/Burger';
const  checkoutSummary=(props)=>{
return(
    <div className={classes.CheckoutSummary}>
        <h1>we hope it tastes well</h1>
<div style={{width:'100%' ,height:'300px',margin:'auto'}}>
<Burger ingredients={props.ingredients}/>
</div>
<Button btnType="Danger" clicked={props.checkoutCancelled} >cancel</Button>
<Button btnType ="Success" clicked={props.checkoutContinued}>continue</Button>  
    </div>

);
}
export default checkoutSummary;  