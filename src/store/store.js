// store 폴더 안에 store.js => 스토어를 생성한 후 리듀서를 등록한다.
import { legacy_createStore as createStore } from 'redux';
// import rootReducer from '../reducers/index'; // 합친 리듀서 불러오기
import rootReducer from '../reducers/todoReducer'; // 합친 리듀서 불러오기
const store = createStore(rootReducer); // 스토어 생성
export default store;
