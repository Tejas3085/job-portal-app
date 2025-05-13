import React from 'react'

export default function Button({btn,allfilter, onClick}) {
  const isSelected = allfilter.includes(btn);

  return (
    <div>
        <div style={{ margin: '5px' }}>
      <button
        style={{
          backgroundColor: isSelected ? 'green' : '#f0f0f0',
          color: isSelected ? '#fff' : '#000',
          border: '1px solid #ccc',
          padding: '8px 16px',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
        onClick={() => onClick(btn)}
      >
        {btn}
      </button>
    </div>
    </div>
  )
}
