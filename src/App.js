import './App.css';
import PixelArt from './08-pixel-art/PixelArt';
import { createContext, useState } from 'react';

export const colorChoice = createContext();

function App() {
    const [color, setColor] = useState('pink');

    return (
        <div className='App'>
            <colorChoice.Provider value={[color, setColor]}>
                <PixelArt />
            </colorChoice.Provider>
        </div>
    );
}

export default App;
