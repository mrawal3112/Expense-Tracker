import React from 'react';
import AllExpenseItems from './AllExpenseItems';
import './ExpenseContainer.css';
function ExpenseContainer(props) {
    return (
        <div className="mx-auto expense-container rounded">
            <AllExpenseItems items={props.items} ></AllExpenseItems>
        </div>
    )
}

export default ExpenseContainer;