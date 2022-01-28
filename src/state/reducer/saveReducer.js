const save = (state=10, action) =>{
    if(action.type === "save"){
        return state + action.payload
    }

    else{
        return state;
    }
}
export default save;