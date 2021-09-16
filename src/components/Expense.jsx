import React, { useState } from 'react'
import './ExpenseContainer.css'
import AddExpense from './AddExpense';
import ExpenseContainer from './ExpenseContainer';

const data = [
    {
        id: '1',
        price: '59.99',
        date: new Date(2021, 8, 15),
        item: 'Sneakers',
    },
    {
        id: '2',
        price: '29.99',
        date: new Date(2025, 8, 15),
        item: 'Formal Shirt',
    },
    {
        id: '3',
        price: '649.99',
        date: new Date(2024, 11, 31),
        item: 'Apple Watch Series-6',
    },
    {
        id: '4',
        price: '329.99',
        date: new Date(2021, 11, 31),
        item: 'Apple Airpods Pro',
    },
]

function Expense() {

    const [expenses, setExpenses] = useState(data);

    const addExpenseHandler = expense => {
        setExpenses(prevExpenses => {
            return ([expense, ...prevExpenses])
        })
    }
    return (
        <div className='expense rounded '>
            <AddExpense onAddExpense={addExpenseHandler} />
            <ExpenseContainer items={expenses} />
        </div>
    )
}

export default Expense;