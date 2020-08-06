import * as React from 'react';
import { useState } from 'react';

const UseInput = (initialValue: string, validator: Function) => {
    const [value, setValue] = useState(initialValue);
    const onChange = (event: any) => {
        const {
            target: { value }
        } = event;
        let willUpdate = true;
        //if (typeof validator === "function") {
        willUpdate = validator(value);
        //}
        if (willUpdate) {
            setValue(value);
        }
    };
    return { value, onChange };
};

export default UseInput;