import {createStore} from 'redux'
import reducer from '../src/reducers/index'


//стор
//принимает созданный ранее стор в редюсере
const store = createStore(reducer)
export default store