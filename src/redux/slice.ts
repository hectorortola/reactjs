import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Wine {
    id: number;
    wine: string;
    winery: string;
    location: string;
    image: string;
    rating: {
        average: string;
        reviews: string;
    };
}

interface AppState {
    myData: Wine[] | null;
    itemData: Wine | null;
}

const initialState: AppState = {
    myData: null,
    itemData: null,
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setData: (state, action: PayloadAction<Wine[]>) => {
            state.myData = action.payload;
        },
        setItemData:(state, action: PayloadAction<Wine>) => {
            state.itemData = action.payload;
        },
    },
});

export const { setData } = appSlice.actions;
export const { setItemData } = appSlice.actions;

export default appSlice.reducer;
