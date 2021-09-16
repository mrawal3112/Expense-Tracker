import React, { useState } from 'react';
import ExpenseFilter from './ExpenseFilter';
import ExpenseDetails from './ExpenseDetails';
import ExpenseChart from './ExpenseChart';


function AllExpenseItems(props) {

    const [filteredYear, setFilteredYear] = useState('2021');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }
    const filteredExpenses = props.items.filter(a => {
        return new Date(a.date).getFullYear().toString() === filteredYear
    }
    )

    return (
        <div>
            <ExpenseFilter onYearChange={filterChangeHandler} yearSelected={filteredYear} />
            <ExpenseChart expenses={filteredExpenses} />
            <ExpenseDetails items={filteredExpenses} />
        </div >
    )
}

export default AllExpenseItems;
