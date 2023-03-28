export const setData = (HouseData)=>{
    return{
        type:"SET_DATA",
        payload:HouseData
    }
}

export const blockHouse = (blockedHouse)=>{
    return{
        type:"BLOCK_HOUSE",
        payload:blockedHouse
    }
}

export const deleteHouse =(deletedHouse)=>{
    return{
        type:"DELETE_BLOCKED_HOUSE",
        payload:deletedHouse
    }
}