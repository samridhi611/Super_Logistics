import {combineReducers} from "redux";

const initialState = {
    sidebarShow: "responsive",
  }

  const userDataInitialState = {
    userData: []
  };

  const adminDataInitialState = {
    adminData : []
  }; 
  
  const changeState = (state = initialState, { type, ...rest }) => {
    switch (type) {
      case 'set':
        return { ...state, ...rest }
      default:
        return state
    }
  }

  const userDataReducer = (state = userDataInitialState, action) => {
    switch (action.type) {
      case 'ADD_USER_DATA':
        return {
          ...state,
          userData: [...state.userData, action.payload]
        };
       
      default:
        console.log(state)
        return state;
    }
  };

  const adminDataReducer = (state = adminDataInitialState, action) => {
    switch (action.type) {
      case 'ADD_ADMIN_DATA':
        return {
          ...state,
          adminData: [...state.adminData, action.payload] 
        };
      default:
        return state;
    }
  };

const rootReducer = combineReducers({
   nav : changeState,
   userData : userDataReducer,
   adminData : adminDataReducer

})

export default rootReducer;
