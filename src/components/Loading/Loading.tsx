import React from 'react'
import './loading.css'

const Loading = ({ children }) => (
  <div className="loading">
    {children}
    {/* fallback to loading text if needed */}
    <div className="loader">Loading...</div>
  </div>
)

export default Loading
