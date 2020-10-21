import React ,{Component} from 'react';
import Button from '../../../components/UI/Button/Button';  
import classes from './ContactData.css';
class ContactData extends Component{
    state={
        name:'',
        email:'',
        address:{
            street:'',
            PostalCode:''
        }
    }
    render(){
        return(
            <div className={classes.ContactData}> 
                <h4>Enter your Contact Data</h4>
                <form>
                    <input className={classes.Input} type="email" name="email" placeholder="your email"/>
                    <input className={classes.Input}type="text" name="name" placeholder="your name"/>
                    <input className={classes.Input}type="text" name="street" placeholder="street"/> 
                    <input className={classes.Input}type="text" name="postal" placeholder="postal code"/>   
                
 <Button btnType="Success">Order</Button>             
   </form>
            </div>
        );

    }
}
export default ContactData;