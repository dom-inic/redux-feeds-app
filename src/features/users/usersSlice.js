import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '0', name: 'elon musk ' },
  { id: '1', name: 'Mack zuckerberg' },
  { id: '2', name: 'Tim cook' }
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {

  }
})

export default usersSlice.reducer