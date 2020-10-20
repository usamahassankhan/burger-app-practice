import React from 'react';
import Button from '../../UI/Button/Button';
const  checkoutSummary=(props)=>{
return(
    <div className={classes.checkoutSummary}>
        <h1>we hope it tastes well</h1>
<div style={{width:'100%' ,height:'300px',margin:'auto'}}>
<Burger ingredient={props.ingredients}/>
</div>
<Button btnType="Danger" clicked >cancel</Button>
<Button btnType ="Success" clicked>continue</Button>  
    </div>

)
}
export default checkoutSummary;  