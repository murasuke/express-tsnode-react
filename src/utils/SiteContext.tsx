import React , { useReducer } from 'react';

export type Action ={ type: 'CHANGE_PAGE_NAME' | 'CHANGE_USER' , strValue: string, numValue: number }
export type SiteContextDataType = {
  pageName: string,
  userId: number,
  userName: string,
};

const initialState: SiteContextDataType = {
  pageName: "",
  userId: 123,
  userName: "user123",
}

function reducer(state:SiteContextDataType,  action: Action) {
  switch (action.type) {
    case 'CHANGE_PAGE_NAME':
      return {
        ...state,
        pageName: action.strValue,
      };
    case 'CHANGE_USER':
      return {
        ...state,
        userId: action.numValue,
        userName: action.strValue,
      };
    default:
      return state
  }
}

export const SiteContext = React.createContext({} as {
  state: SiteContextDataType
  dispatch: React.Dispatch<Action>
});

export const ContextProvider: React.FC = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return <SiteContext.Provider value={{state, dispatch}}>
    {/* eslint-disable-next-line react/destructuring-assignment */}
    {props.children}
  </SiteContext.Provider>
}
