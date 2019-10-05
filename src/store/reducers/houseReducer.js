const initState = {
    houses: [
        {it:'1', title: 'house 1', content: 'house1'},
        {it:'2', title: 'house 2', content: 'house2'},
        {it:'3', title: 'house 3', content: 'house3'}
    ]
}

const houseReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_HOUSE':
            console.log('created house', action.house)
            return state
        case 'CREATE_HOUSE_ERROR':
            console.log('create house error', action.err)
            return state
        default:
            return state 
    }
}

export default houseReducer