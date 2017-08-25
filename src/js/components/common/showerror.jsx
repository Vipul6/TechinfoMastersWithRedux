import React from 'react'
import PropTypes from 'prop-types'
import { DATA_FOUND, TRY_AGAIN } from '../../constants/constants'
const ErrorComponent = (props) => {
    if(props.noDataFound){
        return  (
            <div className='alert alert-info'>
                <strong>{ DATA_FOUND }</strong>
            </div>
        )
    }
    if(props.dataNotFetched && props.errorMessage)
        return (
            <div className='alert alert-danger'>
                <strong>{ props.errorMessage }! {TRY_AGAIN}</strong>
            </div>
        )
    return null
}
ErrorComponent.propTypes = {
    dataNotFetched: PropTypes.bool,
    noDataFound: PropTypes.bool,
    errorMessage: PropTypes.string,
};
export default ErrorComponent
