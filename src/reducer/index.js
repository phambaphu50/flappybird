import { combineReducers } from 'redux'
import game from './game'
import bird from './bird'
export default combineReducers({
    game,
    bird
})