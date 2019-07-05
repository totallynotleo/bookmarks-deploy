import React, { useState } from 'react'
import { BookmarkConsumer } from '../providers/BookmarkProvider'

export default function BookmarkList() {
    return (
        <BookmarkConsumer>
            {({ bookmarks }) => (
                <ul>
                    <h1>Bookmarks</h1>
                    {bookmarks.map(bookmark => (
                        <li><a href={bookmark.url}>{bookmark.title}</a></li>
                    ))}
                </ul>
            )}
        </BookmarkConsumer>
    )
}
