import uuid  from "react-native-uuid"

export const ADD_BOOK = 'ADD_BOOK'
export const DELETE_BOOK = 'DELETE_BOOK'


export function addBook(book) {
    return {
        type: ADD_BOOK,
        book: {
            ...book,
            id: uuid.v4()
        }
    }
}

export function deleteBook(book){
    return {
        type: DELETE_BOOK,
        book
    }
}