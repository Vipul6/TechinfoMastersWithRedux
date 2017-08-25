import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Techie = (props) => {
    const {
        id,
        name,
        avatar,
} = props.techie

    return (
        <Link to={`/details/${ id }`}>
            <div className='image-block'>
                <img className='techie-img avatar' src={ avatar }/>
                <p className='techie-name'> { name } </p>
            </div>
        </Link>
    )
}
Techie.propTypes = {
    techie: PropTypes.object.isRequired,
};
export default Techie
