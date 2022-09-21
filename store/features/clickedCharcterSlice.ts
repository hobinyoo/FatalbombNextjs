import { createSlice, PayloadAction } from '@reduxjs/toolkit'


// Define a type for the slice state
interface CounterState {
    value: string
}

// Define the initial state using that type
const initialState: CounterState = {
    value: "IDOL",
}

export const clickedCharcterSlice = createSlice({
    name: 'clickedCharcter',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        clickedCharcter: (state, action: PayloadAction<string>) => {
            state.value = action.payload
        }
    }
})

export const { clickedCharcter } = clickedCharcterSlice.actions
export default clickedCharcterSlice.reducer