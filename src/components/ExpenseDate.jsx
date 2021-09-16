import React from 'react';

function ExpenseDate(props) {
    // console.log(typeof props.date)
    const month = props.date.toLocaleString('en-GB', { timeZone: 'UTC', month: 'long' });
    const day = props.date.toLocaleString('en-GB', { timeZone: 'UTC', day: 'numeric' })
    const year = props.date.toLocaleString('en-GB', { timeZone: 'UTC', year: 'numeric' });
    return (
        <div className='text-center fw-bold px-1'>
            <p className='fs-6 m-0'>{month}</p>
            <p className='fs-6 m-0'>{day}</p>
            <p className='fs-6 m-0'>{year}</p>
        </div>
    )
}

export default ExpenseDate;