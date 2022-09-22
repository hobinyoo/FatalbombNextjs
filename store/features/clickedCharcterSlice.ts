import { createSlice, PayloadAction } from '@reduxjs/toolkit'


// Define a type for the slice state
interface CounterState {
    value: string
    stillImage: string
}

// Define the initial state using that type
const initialState: CounterState = {
    value: "IDOL",
    stillImage: "1"
}

export const clickedCharcterSlice = createSlice({
    name: 'clickedCharcter',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        clickedCharcter: (state, action: PayloadAction<string>) => {
            state.value = action.payload
        },
        stillImage: (state, action: PayloadAction<string>) => {
            state.stillImage = action.payload
        }
    }
})

export const { clickedCharcter, stillImage } = clickedCharcterSlice.actions
export default clickedCharcterSlice.reducer