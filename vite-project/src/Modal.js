import React from 'react'
import ReactDom from 'react-dom'

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  backgroundColor: 'transparent',
  border:"8px solid green",
  transform: 'translate(-50%, -50%)',
  zIndex: 1000,
  height: '80%',
  width: '90%',
  maxHeight:'500px',
}

const OVERLAY_STYLES = {
  position: 'fixed',

  display:'flex',
  alignItems:"centre",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backdropFilter:'blur(5px)',
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
}

export default function Modal({ children, onClose }) {

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <button className='close-modal'  onClick={onClose}> X </button>
        {children}
      </div>
    </>,
    document.getElementById('form-root')
  )
}