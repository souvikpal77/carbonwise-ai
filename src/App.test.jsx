import { render, screen } from '@testing-library/react'
import { describe, test, expect } from 'vitest'
import App from './App'

describe('CarbonWise AI', () => {
  test('renders application', () => {
    render(<App />)
    expect(document.body).toBeTruthy()
  })

  test('shows calculator button', () => {
    render(<App />)
    const buttons = screen.getAllByRole('button')
    expect(buttons.length).toBeGreaterThan(0)
  })
})