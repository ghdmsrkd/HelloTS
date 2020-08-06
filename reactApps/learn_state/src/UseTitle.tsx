import * as React from 'react';
import { useState, useEffect } from 'react';

const UseTitle = (initialTitle: string) => {
    const [title, setTitle] = useState(initialTitle);
    const updateTitle = () => {
        const htmlTitle: any = document.querySelector("title");
        htmlTitle.innerText = title;
    }
    useEffect(updateTitle, [title]);
    return setTitle;
}

export default UseTitle;