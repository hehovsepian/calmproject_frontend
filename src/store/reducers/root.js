import {combineReducers} from 'redux';
import userData from "./userData";
import scene from "./scene"

const rootReducer = combineReducers({
    userData: userData,
    scene:scene,
})

export default rootReducer