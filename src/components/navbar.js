import React from "react";
import { useSelector } from "react-redux";
import './navbar.css';

function Navbar(){
 const amount = useSelector(state=>state.amount);
 const save = useSelector(state=>state.save);

    return(
        <>
       <h1 className="nav">[REDUCER1] Changeable balance = {amount}</h1>
       <h1 className="nav">[REDUCER2]second reducer not changeable static pass value to state {save}</h1>
       </>
    );
}
export default Navbar;