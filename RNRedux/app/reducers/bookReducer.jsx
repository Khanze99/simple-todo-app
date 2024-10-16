import uuid from 'react-native-uuid'

import {ADD_BOOK, DELETE_BOOK} from '../actions'


const initialState = {
    books: [{name: 'East of Eden', author: "John Steinbeck", id: uuid.v4()}]
}

const bookReducer = (state = initialState, action) => {
    console.log('STAAAAAAART', action)
    console.log(state.books)
    switch (action.type) {
        case ADD_BOOK:
            return {
                books: [
                    ...state.books,
                    action.book
                ]
            }
        case DELETE_BOOK:
            books = {
                books: [...state.books.filter((book) => (book.id !== action.book.id))]
            }
            console.log('DELETEEEEED', books)
            return books
        default:
            return state
    }
}

export default bookReducer
