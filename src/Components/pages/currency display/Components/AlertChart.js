import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { CryptoState } from '../CryptoContext';
import './AlertChart.css'
const AlertChart = ({symbol}) => {
const {currency}=CryptoState()
  return (
    <Form className='alertChartFormp' >
       <div className='alertChartp'>
       <div className='alertChart_subGroupp'>
       <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">هشدار اول</Form.Label>
          <Form.Control id="disabledTextInput" type='number' placeholder={`هشدار اول ${symbol}${currency.toLowerCase()}`} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">هشدار دوم</Form.Label>
          <Form.Control id="disabledTextInput" type='number' placeholder={`هشدار دوم ${symbol}${currency.toLowerCase()}`} />
        </Form.Group></div>
       <div className='alertChart_subGroupp'>
       <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">هشدار سوم</Form.Label>
          <Form.Control id="disabledTextInput" type='number' placeholder={`هشدار سوم ${symbol}${currency.toLowerCase()}`} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">هشدار چهارم</Form.Label>
          <Form.Control id="disabledTextInput" type='number' placeholder={`هشدار چهارم ${symbol}${currency.toLowerCase()}`} />
        </Form.Group></div>
       </div>
        <Button type="submit">تایید</Button>
    </Form>
  )
}

export default AlertChart