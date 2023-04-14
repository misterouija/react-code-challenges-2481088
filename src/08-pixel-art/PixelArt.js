import { useContext } from 'react';
import React from 'react';
import { colorChoice } from '../App';

function ColorPicker() {
    const colorContext = useContext(colorChoice);
    const [color, setColor] = colorContext;
    console.log(color);
    const colors = [
        'red',
        'blue',
        'yellow',
        'green',
        'black',
        'white',
        'purple',
    ];
    return (
        <div>
            <h1>Choose a color</h1>
            {colors.map((color) => (
                <button
                    key={color}
                    style={{
                        backgroundColor: color,
                        border: '1px solid black',
                    }}
                    onClick={() => setColor(color)}
                />
            ))}
        </div>
    );
}

function Pixel() {
    return (
        <div
            style={{
                height: '20px',
                width: '20px',
                backgroundColor: 'lightGrey',
                margin: '1px',
            }}
        />
    );
}

function Pixels() {
    const colorContext = useContext(colorChoice);
    const [color] = colorContext;
    const pixels = [];
    for (let i = 0; i < 100; i++) pixels.push(<Pixel key={i} />);
    return (
        <div
            onClick={(e) => {
                e.target.style.backgroundColor = color;
            }}
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(10, 1fr)',
                width: '210px',
                margin: '0 auto',
            }}
        >
            {pixels}
        </div>
    );
}

export default function PixelArt() {
    return (
        <div>
            <ColorPicker />
            <Pixels />
        </div>
    );
}
