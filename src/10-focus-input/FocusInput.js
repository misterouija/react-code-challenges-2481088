import { useRef, useEffect } from 'react';
export default function FocusInput() {
    useEffect(() => {
        focusPoint.current.focus();
    }, []);
    const focusPoint = useRef(null);

    return (
        <div>
            <label htmlFor='focused-input'>Focus main on page load!</label>

            <input name='focused-input' ref={focusPoint}></input>

            <label htmlFor='other-input'>Focus other on page load!</label>
            <input name='other-input'></input>
        </div>
    );
}
