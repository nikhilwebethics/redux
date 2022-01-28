export const depositMoney = (amount)=>{
    return (dispatch) => {
        dispatch({
            type:'deposite',
            payload:amount
        })
    }
}

export const withdrawMoney = (amount)=>{
    return (dispatch) => {
        dispatch({
            type:'withdraw',
            payload:amount
        })
    }
}

export const saveMoney = (save)=>{
    return (dispatch) => {
        dispatch({
            type:'save',
            payload:save
        })
    }
}