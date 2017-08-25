import React from 'react'
import PropTypes from 'prop-types'
import { bindHandlers } from 'react-bind-handlers'

class Modal extends React.PureComponent {
  onClose(e) {
    e.preventDefault()
    this.props.onClose()
  }
  render() {
     const {
            onClose, 
            header, 
            children, 
            isOpen, 
        } = this.props
        
      return isOpen ? (
          <div className='overlay'>
              <div className='popup'>
                <header className='retroshadow'>{ header }</header>
                <a className='close' onClick={ (e) => this.onClose(e) }>&times;</a>
                <div className='content'>{ children }</div>
              </div>
       </div>
    ):
    null
  }
}
 Modal.propTypes = {
   onClose: PropTypes.func.isRequired,
   isOpen: PropTypes.bool.isRequired,
   header: PropTypes.string,
  }
export default bindHandlers(Modal)
