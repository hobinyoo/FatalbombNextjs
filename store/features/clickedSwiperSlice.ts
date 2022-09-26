import { createSlice, PayloadAction } from '@reduxjs/toolkit'


// Define a type for the slice state
interface CounterState {
    value: string
    stillImage: string
    trailer: string
}

// Define the initial state using that type
const initialState: CounterState = {
    value: "IDOL",
    stillImage: "1",
    trailer: "1"
}

export const clickedSwiperSlice = createSlice({
    name: 'clickedSwiper',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        clickedCharcter: (state, action: PayloadAction<string>) => {
            state.value = action.payload
        },
        stillImage: (state, action: PayloadAction<string>) => {
            state.stillImage = action.payload
        },
        trailer: (state, action: PayloadAction<string>) => {
            state.trailer = action.payload
        }
    }
})

export const { clickedCharcter, stillImage, trailer } = clickedSwiperSlice.actions
export default clickedSwiperSlice.reducer