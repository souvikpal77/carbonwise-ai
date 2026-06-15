import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import { describe, test, expect, afterEach } from 'vitest'
import App from './App'

afterEach(() => {
cleanup()
})

describe('CarbonWise AI', () => {

test('renders application title', () => {
render(<App />)
expect(screen.getByText(/CarbonWise AI/i)).toBeTruthy()
})

test('renders transport selector', () => {
render(<App />)
expect(screen.getByLabelText(/Transport Method/i)).toBeTruthy()
})

test('renders electricity input', () => {
render(<App />)
expect(screen.getByLabelText(/Monthly Electricity Usage/i)).toBeTruthy()
})

test('renders diet selector', () => {
render(<App />)
expect(screen.getByLabelText(/Diet Type/i)).toBeTruthy()
})

test('renders calculate button', () => {
render(<App />)
expect(
screen.getByRole('button', {
name: /Calculate Carbon Footprint Score/i,
})
).toBeTruthy()
})

test('allows entering electricity usage', () => {
render(<App />)


const input = screen.getByLabelText(/Monthly Electricity Usage/i)

fireEvent.change(input, {
  target: { value: '50' }
})

expect(input.value).toBe('50')

})

test('allows selecting transport method', () => {
render(<App />)

const transport = screen.getByLabelText(/Transport Method/i)

fireEvent.change(transport, {
  target: { value: 'car' }
})

expect(transport.value).toBe('car')

})

test('allows selecting diet type', () => {
render(<App />)

const diet = screen.getByLabelText(/Diet Type/i)

fireEvent.change(diet, {
  target: { value: 'veg' }
})

expect(diet.value).toBe('veg')

})

})