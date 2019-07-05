import React, { useState, useEffect } from 'react'
import { api } from '../api';

const testBookmarks = [
    { title: 'Google', url: 'http://google.com/' },
    { title: 'Amazon', url: 'http://amazon.com/' }
]

export const BookmarkContext = React.createContext()
export const BookmarkConsumer = BookmarkContext.Consumer

export default function BookmarkProvider({ children }) {
    const [bookmarks, setBookmarks] = useState([])

    const fetchBookmarks = () => {
        api.get('/bookmarks').then(result => {
            setBookmarks(result.data)
        })
    }

    useEffect(() => {
        console.log(bookmarks)
    })

    return (
        <BookmarkContext.Provider value={{ bookmarks, fetchBookmarks }}>
            {children}
        </BookmarkContext.Provider>
    )
}
