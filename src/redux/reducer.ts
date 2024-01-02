interface AppState {
    myData: string | null;
}

const initialState: AppState = {
    myData: null,
};

type Action = { type: 'SET_DATA'; payload: string };

const rootReducer = (state = initialState, action: Action): AppState => {
    switch (action.type) {
        case 'SET_DATA':
            return { ...state, myData: action.payload };
        default:
            return state;
    }
};

export default rootReducer;
