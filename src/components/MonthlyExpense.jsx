import React from 'react';
import MonthlyExpenseBar from './MonthlyExpenseBar';
import './ExpenseContainer.css'

function MonthlyExpense(props) {
    const valArr = props.months.map(data => data.value)
    console.log(valArr)
    const maximumValue = Math.max(...valArr)
    return (
        <div className='monthly-expense'>
            {props.months.map(month => {
                return (
                    <MonthlyExpenseBar key={month.label} value={month.value} maxValue={maximumValue} label={month.label} />
                )
            })}
        </div>
    )
}

export default MonthlyExpense;