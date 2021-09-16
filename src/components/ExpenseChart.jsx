import React from 'react';
import MonthlyExpense from './MonthlyExpense';

function ExpenseChart(props) {
    const months = [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sept', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 }
    ]
    for (const expense of props.expenses) {
        const expenseMonth = new Date(expense.date).getMonth();
        console.log(expenseMonth);
        months[expenseMonth].value += +(expense.price.replace('$', ""));
        // console.log(months[expenseMonth])

    }
    return (
        <MonthlyExpense months={months} />
    )
}

export default ExpenseChart;