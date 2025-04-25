import React, { useEffect, useState } from 'react'
import '../style/Dashboard.scss'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'
import Chart from './Chart';

const mockData = {
    balance: 4520.75,
    income: 6200,
    expenses: 1680.25,
    recentTransactions: [
        { id: 1, name: 'Grocery', amount: -120.55, date: 'Apr 18' },
        { id: 2, name: 'Salary', amount: 6200, date: 'Apr 15' },
        { id: 3, name: 'Netflix', amount: -15.99, date: 'Apr 13' },
        { id: 4, name: 'Gym', amount: -60, date: 'Apr 10' },
    ]
};


const Dashboard = () => {

    const [expenseData, setExpenseData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then((res) => res.json())
          .then((data) => {
            setExpenseData(data);
            console.log(data);
          })
          .catch((err) => {
            console.error('Fetch failed:', err);
          });
      }, []);
      


    return (
        <div className='dashboard'>
            <h1>Dashboard</h1>
            <div className='summary-cards'>
                <div className='card balance'>
                    <p>Current Balance</p>
                    <h2>₹{mockData.balance}</h2>
                </div>
                <div className='card income'>
                    <div>
                        <p>Income</p>
                        <h2>₹{mockData.income.toFixed(2)}</h2>
                    </div>

                    <FaArrowDown />
                </div>
                <div className='card expenses'>
                    <div>
                        <p>Expenses</p>
                        <h2>₹{mockData.expenses}</h2>
                    </div>

                    <FaArrowUp />
                </div>
            </div>


<Chart/>

            <div className='transactions'>
<h3>Recent Transactions</h3>
<ul>
    {expenseData.map((x)=> (
        <li key={x.id}>
            <span>{x.name}</span>


            {typeof x.amount === 'number' && (
        <span className={x.amount < 0 ? 'negative' : 'positive'}>
          ₹{x.amount}
        </span>
      )}
        </li>
    ))}
</ul>
            </div>
        </div>
    )
}

export default Dashboard
