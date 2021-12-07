const initialState = {}

const userData = (state = initialState, action)=> {
    switch (action.type) {
        case 'UPDATE_DATA':
            return action.userData
            break
    }
    return state;
}

export default userData;
