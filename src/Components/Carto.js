import React, {Component} from 'react'
import '../Carto.css';


class CartoDx extends Component{
    render(){
        return(
        <div className='f1 tc' id='wraps'>
            <h1> {this.props.lamp}</h1>
        </div> 
        );
    }
}

export default CartoDx