import React from 'react';
import s from './Statistics.module.css'

const Statistics = ({ good, neutral, bad, total, positiveFeedback }) =>
    <div className={s.block}>
        <span className={s.title}> <p>Good:</p> <p>{good}</p></span>
        <span className={s.title}> <p>Neutral:</p> <p>{neutral}</p></span>
        <span className={s.title}> <p>Bad:</p> <p>{bad}</p></span>
        <span className={s.title}> <p>Total:</p> <p>{total}</p></span>
        <span className={s.title}> <p>Positive feedback:</p> <p>{positiveFeedback}</p></span>
    </div>;

export default Statistics;