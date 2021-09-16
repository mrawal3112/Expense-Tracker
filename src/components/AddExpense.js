import React from 'react';
import ExpenseForm from './ExpenseForm';
import './ExpenseContainer.css'
import { useState } from 'react/cjs/react.development';

function AddExpense(props) {
    const [showForm, setShowForm] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const newExpenseData = {
            ...enteredExpenseData, id: (Math.floor(Math.random() * 100) + 1).toString()
        };
        props.onAddExpense(newExpenseData);
        setShowForm(false);
    }
    function showFormHandler() {
        setShowForm(true);
    }
    function hideExpenseForm() {
        setShowForm(false);
    }
    return (
        <div className='add-expense justify-content-evenly mx-auto rounded'>
            {!showForm &&
                <button type='button' className='addButton p-2 fw-bold mb-2' onClick={showFormHandler}>Add New Expense</button>
            }
            {showForm && <ExpenseForm newData={saveExpenseDataHandler} showForm={hideExpenseForm} />}
        </div>
    )
}

export default AddExpense;