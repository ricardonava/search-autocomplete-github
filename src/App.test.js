// import React from 'react'
// import { render } from '@testing-library/react'
// import App from './App'

import contrastText from './utils/contrastText'

// Expected return 'white' or 'black'
test('contrastText', () => {
  const value = contrastText('#d8d8d8')
  expect(value).toMatch(/^(white|black)$/)
})
