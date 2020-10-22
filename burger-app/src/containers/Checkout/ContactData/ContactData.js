import React ,{Component} from 'react';
import Button from '../../../components/UI/Button/Button';  
import classes from './ContactData.css';
  import axios from '../../../axios-orders';
  import  Spinner from '../../../components/UI/Spinner/Spinner';
class ContactData extends Component{
    state={
        name:'',
        email:'',
        address:{
            street:'',
            PostalCode:''
        },
        loading:false
    }
    orderHandler=(event)=>{
        event.preventDefault();
        this.setState( { loading: true } );
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.Price,
            customer: {
                name: 'usama hassan khan',
                address: {
                    street: 'shadman ',
                    zipCode: '0881',
                    country: 'pakistan'
                },
                email: 'usaama.uhk@gmail.com'
            },
            deliveryMethod: 'fastest'
        }
        axios.post( 'https://burger-app-cb137.firebaseio.com/orders.json', order )
            .then( response => {
                this.setState( { loading: false } );
               this.props.history.push('/');
            } )
            .catch( error => {
                this.setState( { loading: false} );
            } );

    }
    render(){
        let form =( <form>
            <input className={classes.Input} type="email" name="email" placeholder="your email"/>
            <input className={classes.Input}type="text" name="name" placeholder="your name"/>
            <input className={classes.Input}type="text" name="street" placeholder="street"/> 
            <input className={classes.Input}type="text" name="postal" placeholder="postal code"/>   
        
<Button btnType="Success" clicked={this.orderHandler}>Order</Button>             
</form>);
        if(this.state.loading)
        form=  <Spinner/>;
        return(
            <div className={classes.ContactData}> 
                <h4>Enter your Contact Data</h4>
               {form}
            </div>
        );

    }
}
export default ContactData;