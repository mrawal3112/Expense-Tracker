import React from 'react';
import ExpenseItem from './ExpenseItem';

function ExpenseDetails(props) {
    return (
        <div>
            {props.items.length === 0 && <p className='d-flex justify-content-center mt-4 text-light fs-5'>No Item Found For The Selected Year</p>}
            {props.items.length > 0 &&
                props.items.map(expenses => {
                    return (
                        <div className='m-3' key={expenses.id}>
                            <ExpenseItem key={expenses.id} item={expenses.item} date={new Date(expenses.date)} price={'$' + expenses.price} />
                        </div>
                    )
                })}

        </div>
    )
}



export default ExpenseDetails;