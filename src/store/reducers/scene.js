const initialState = {}

const scene = (state = initialState, action)=> {
    switch (action.type) {
        case 'SET_SCENE':
            return action.scene
            break
    }
    return state;
}

export default scene;