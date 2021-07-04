export const reducer = (state, action) => {
  switch (action.type) {
    case 'change-theme':
      /// rozpakowuje state dzieki destrukturyzacji,
      //a nastepnie zmieniam 1 wlasciwosc
      return {
        ...state,
        theme: state.theme === 'danger' ? 'primary' : 'danger',
      };

    //dluzsza wersja
    // const newState = {...state};
    // newState.theme = state.theme === 'danger' ? 'primary' : 'danger'
    // return newState
    //powinnismy kopiowac stan anizeli modyfikowac oryginalny
    // state.theme = state.theme === 'danger' ? 'primary' : 'danger'
    //return state

    case 'set-isauthenticated':
      return { ...state, isAuthenticated: action.isAuthenticated };
    case 'login':
      return { ...state, isAuthenticated: true };
    case 'logout':
      return { ...state, isAuthenticated: false };
    default:
      throw new Error('Nie ma takiej akcji: ', action.type);
  }
};

export const initialState = {
  theme: '',
  isAuthenticated: true,
};
