import React from 'react';

const state = [
    "Знання HTML5/CSS;",
    "Знання JavaScript;",
    "Знання React.js, Redux, Redux Thunk;",
    "Практичний досвід верстки макетів сайту;",
    "Знання GIT;",
    "Готовність виконати тестове завдання"
]

const Skills = () => {
    return (
        <div className="skills">
            <ul>
                {state.map(list => <li>{list}</li>)}
            </ul>

        </div>
    )
}

export default Skills;