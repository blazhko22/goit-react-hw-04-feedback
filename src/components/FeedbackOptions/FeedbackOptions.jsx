import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
      <div className={s.listFeedback}>
        {options.map((option, index) => (
          
            <button key={index} className={s.buttonFeedback} onClick={onLeaveFeedback}>
              {option}
            </button>
          
        ))}
      </div>
    );
  }
  
  export default FeedbackOptions;

  FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func.isRequired,
  };

  