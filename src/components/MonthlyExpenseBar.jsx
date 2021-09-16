import React from 'react';


function MonthlyExpenseBar(props) {
    let filledBar = '0%';
    if (props.maxValue > 0) {
        filledBar = Math.round((props.value / props.maxValue) * 100) + '%';
    }
    console.log(filledBar)
    return (
        <div className='monthly-expense-bar'>
            <div className='monthly-expense__inner'>
                <div className='monthly-expense__fill' style={{ height: filledBar }}>

                </div>
            </div>
            <div className='monthly-expense__label '>{props.label}</div>

        </div>
    )
}

export default MonthlyExpenseBar;