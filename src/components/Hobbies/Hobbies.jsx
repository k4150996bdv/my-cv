import React from 'react';

const state = [
    "Катання на лижах",
    "Детейлінг авто",
    "Спорт",
    "Література"
]

const Hobbies = () => {

    return (
        <div>
            <ul>
                {state.map(list => <li>{list}</li>)}
            </ul>
        </div>
        
    )

}

export default Hobbies;
