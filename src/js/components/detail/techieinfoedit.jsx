import React from 'react'
import PropTypes from 'prop-types'

const TechieInfoEdit = (props) => {
    const {
        name,
        title,
        organisation,
        country,
} = props.techie
const {
  onChange,
  onUpdate,
  onClose,
  hasError 
} = props

    return (
        <div className='container-fluid'>
            <form className='form-horizontal'>
                <div className='form-group'>
                    <label>Name:</label>
                    <div>
                        <input className='form-control' name='name' type='text' value={ name } onChange={ onChange } required/>
                    </div>
                </div>
                <div className='form-group'>
                    <label >Title:</label>
                    <div>
                        <input className='form-control' name='title' type='text' value={ title } onChange={ onChange } required/>
                    </div>
                </div>
                <div className='form-group'>
                    <label>Organisation:</label>
                    <div>
                        <input className='form-control' name='organisation' type='text' value={ organisation } onChange={ onChange } required/>
                    </div>
                </div>
                <div className='form-group'>
                    <label>Country:</label>
                    <div>
                        <input className='form-control' name='country' type='text' value={ country } onChange={ onChange } required/>
                    </div>
                </div>
                <div className='input-group'>
                    <button type='button' className='btn btn-info' value='save' onClick={ onUpdate } disabled={ hasError }>SAVE</button>
                    <button type='button' className='btn btn-default' value='cancel' onClick={ onClose }> CANCEL </button>
                </div>
            </form>
        </div>
    )}

TechieInfoEdit.propTypes = {
    techie: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onUpdate:PropTypes.func.isRequired,
}

export default TechieInfoEdit
