import React, { useState } from 'react';

function ExpenseForm(props) {
    const [itemName, setItemName] = useState('');
    const [amountSpend, setAmountSpend] = useState('');
    const [expenseDate, setExpenseDate] = useState('');

    function itemNameHandler(event) {
        setItemName(event.target.value)
    }
    function amountSpendHandler(event) {
        setAmountSpend(event.target.value);
    }
    function expenseDateHandler(event) {
        setExpenseDate(event.target.value)

    }
    function submitExpense(event) {
        event.preventDefault();
        const expenseData = {
            item: itemName,
            price: amountSpend,
            date: expenseDate
        }
        props.newData(expenseData);
        setItemName('');
        setAmountSpend('');
        setExpenseDate('');
    }
    return (
        <form onSubmit={submitExpense} className=''>
            <div className='d-flex mb-4' >
                <div>
                    <label>Item Name:</label>
                    <input type='text' onChange={itemNameHandler} value={itemName} className='p-1'></input>
                </div>
                <div>
                    <label>Date of Purchase:</label>
                    <input type='date' value={expenseDate} className='p-1'
                        min={new Date().toISOString().split("T")[0]} max='2025-12-31' onChange={expenseDateHandler}></input>
                </div>
                <div>
                    <label>Amount Paid:</label>
                    <input type='number' value={amountSpend} className='p-1' min='0.01' step='0.01' onChange={amountSpendHandler} ></input>
                </div>
            </div>
            <div className='d-flex justify-content-evenly'>
                <button type='submit' className='p-2 rounded fw-bold' >Add Expense</button>
                <button type='button' className=' p-2 rounded fw-bold' onClick={props.showForm}>Cancel</button>
            </div>
        </form>

    )
}

export default ExpenseForm;


// new Date().toISOString().split("T")[0]