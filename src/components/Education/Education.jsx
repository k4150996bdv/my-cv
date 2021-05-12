import React from 'react';
import style from './Education.module.css'

const state = [
    "Організація виробництва в Коледжі Київського університету ринковіх відносин (молодший спеціаліст, з відзнакою)",
    "Менеджмент в Київському університеті ринкових відносин (бакалавр, з відзнакою)",
    "Публічне управління та адміністрування (магістр)"
]

const Education = () => {
    return (
        <div className={style.education}>
            {state.map(paragraf => <p>{paragraf}</p>) }
       
        </div>
    )
}

export default Education;