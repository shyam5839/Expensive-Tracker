import React from 'react'
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
  } from 'recharts';
  const data = [
    { time: 'Jan', debit: 400, credit: 240 },
    { time: 'Feb', debit: 300, credit: 139 },
    { time: 'Mar', debit: 200, credit: 980 },
    { time: 'Apr', debit: 278, credit: 390 },
    { time: 'May', debit: 189, credit: 480 },
  ];
const Chart = () => {
  return (
    <ResponsiveContainer width='100%' height={300} >
        <BarChart data={data} margin={{ top:20, right: 30,left: 20,bottom: 5}}>
<CartesianGrid strokeDasharray='3 3'>

</CartesianGrid>
<XAxis dataKey='time'>

</XAxis>
<YAxis/>
<Tooltip/>
<Legend/>
<Bar dataKey='debit' fill='#fc008b' name='debit' />
<Bar dataKey='credit' fill='#4000fc' name='credit' />
        </BarChart>

    </ResponsiveContainer>
  )
}

export default Chart
