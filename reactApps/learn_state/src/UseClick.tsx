import * as React from 'react';
import { useEffect, useRef } from 'react';


const UseClick = (onClick: any) => {
    const element: any = useRef();

    useEffect(() => {
        if (element.current) {
            element.current.addEventListener("click", onClick)
        }

        return () => {
            if (element.current) {
                element.current.removeEventListener("click", onClick);
            }
        }
    }, []);

    return element;
}

export default UseClick;