import React from 'react'
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
import './AddExpense.css';

const AddExpense = () => {


  const initialValues = {
    expense: '',
    amount: '',
    date: '',
    description: '',
    receipt: null,
  }

  const validationSchema =Yup.object(
    {
      expense :Yup.string()
        .required('Expense is required')
        .min(3, 'Expense must be at least 3 characters long')
        .max(20, 'Expense must be at most 20 characters long'),
      amount: Yup.number()
        .required('Amount is required'),
      date :Yup.date()
        .required('Date is required'),
      description :Yup.string()
        .min(3, 'Description must be at least 3 characters long')
        .max(20, 'Description must be at most 20 characters long'),
      category: Yup.string()
        .required('Category is required')
        .notOneOf([''], 'Please select a category') // disallow empty value
    }
  );

  const handleSubmit = (values, {resetForm}) => {
    console.log('Form submitted', values);
    resetForm();
    alert('Form submitted successfully!');
  }
  

  return (
    <div className="form-container">
      <h1>Add Expense</h1>
      <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      >
         <Form className="form-content">
          
         <div className="form-group">
            <label htmlFor="category">Category</label>
            <Field name="category" placeholder="category" type="text" as="select">
              <option value="">Select a category</option>
              <option value="food">Food</option>
              <option value="transportation">Transportation</option>
              <option value="entertainment">Entertainment</option>
              <option value="utilities">Utilities</option>
            </Field>
            <div className="error">
              <ErrorMessage name="category" component="div" className="error" />
            </div>
          </div>

         <div className="form-group">
            <label htmlFor="expense">Expense</label>
            <Field name="expense" placeholder="Expense" />
            <div className="error">
              <ErrorMessage name="expense" component="div" className="error" /> </div>
            </div>
          <div className="form-group">
            <label htmlFor="expense">Amount</label>
            <Field name="amount" placeholder="amount" type="number" />
            <div className="error">
              <ErrorMessage name="amount" component="div" className='error' />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <Field name="date" placeholder="date" type="date" />
            <div className="error">
              <ErrorMessage name="date" component="div" className="error" />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <Field name="description" placeholder="description" type="text" as="textarea" />
            <div className="error">
              <ErrorMessage name="description" component="div" className="error" />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="receipt">Upload Receipt</label>
            <Field name="receipt">
              {({ form }) => (
                <input
                  id="receipt"
                  name="receipt"
                  type="file"
                  onChange={(event) => {
                    form.setFieldValue("receipt", event.currentTarget.files[0]);
                  }}
                />
              )}
            </Field>
            <div className="error">
              <ErrorMessage name="receipt" component="div" className="error" />
            </div>
          </div>

          <button type='submit' className="submit-btn">Submit</button>
        </Form>
      </Formik>
    </div>
  )
}

export default AddExpense
