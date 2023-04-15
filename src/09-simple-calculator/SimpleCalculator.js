import { useReducer } from 'react';

const initialState = {
    num1: 2,
    num2: 2,
    result: 0,
};

function reducer(state, action) {
    switch (action.type) {
        case 'num1':
            return { ...state, num1: action.number };
        case 'num2':
            return { ...state, num2: action.number };
        case 'add':
            return { ...state, result: state.num1 + state.num2 };
        case 'subtract':
            return { ...state, result: state.num1 - state.num2 };
        case 'clear':
            return { ...state, result: 0, num1: 0, num2: 0 };
        default:
            throw new Error();
    }
}

export default function SimpleCalculator() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <div>
            <div>
                <h2>Number 1</h2>
                {numbers.map((number) => (
                    <button
                        type='button'
                        key={number}
                        onClick={(e) => {
                            dispatch({
                                type: 'num1',
                                number,
                                //payload: parseInt(e.target.innerText),
                            });
                            //initialState.num1 = e.target.innerText;
                        }}
                    >
                        {number}
                    </button>
                ))}
            </div>
            <div>
                <h2>Number 2</h2>
                {numbers.map((number) => (
                    <button
                        type='button'
                        key={number}
                        onClick={(e) =>
                            dispatch({
                                type: 'num2',
                                number,
                                //payload: parseInt(e.target.innerText),
                            })
                        }
                    >
                        {number}
                    </button>
                ))}
            </div>
            <div>
                <h2>Actions</h2>
                <button onClick={() => dispatch({ type: 'add' })}>+</button>
                <button onClick={() => dispatch({ type: 'subtract' })}>
                    -
                </button>
                <button onClick={() => dispatch({ type: 'clear' })}>c</button>
            </div>
            <div>
                <h2>Result:</h2>
                <p>{state.result}</p>
            </div>
        </div>
    );
}
