import React from "react";
import './shop.css';
import { useDispatch} from 'react-redux'
import { bindActionCreators } from "redux";
import { actionCreator } from "../state";

function Shop(){
    const dispatch = useDispatch();
    const {depositMoney,withdrawMoney} = bindActionCreators(actionCreator, dispatch);
    return(
<>
{/*<button onClick={()=> {dispatch(actionCreator.depositMoney(100))}}>+</button>
<button onClick={()=> {dispatch(actionCreator.withdrawMoney(100))}}>-</button>*/}
<h1 className="shop">
<button className="add" onClick={()=> {depositMoney(100)}}>+</button>
<button className="remove" onClick={()=> {withdrawMoney(100)}}>-</button>
</h1>
</>
    );
}
export default Shop;