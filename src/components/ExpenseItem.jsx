import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ExpenseContainer.css'
import ExpenseDate from './ExpenseDate'

function ExpenseItem(props) {
    return (
        <div className='w-100 m-auto'>
            <div className="card  m-auto">
                <div className="card-body">
                    <div className='d-flex'>
                        <div className='p-1 rounded expense-date'>
                            <ExpenseDate date={props.date}></ExpenseDate>
                        </div>
                        <div className='d-flex justify-content-between w-100 align-items-center'>
                            <div className='p-2'>
                                <h6>{props.item}</h6>
                            </div>
                            <div className='p-2 border border-dark h-50 rounded'>
                                <h6 className='fw-bold'>{props.price}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default ExpenseItem;