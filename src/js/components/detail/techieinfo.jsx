import React from 'react'
import PropTypes from 'prop-types'


const TechiInfo = (props) => {
    const {
        name,
        title,
        organisation,
        follower,
        following,
        country,
        avatar,
} = props.techie

    return (
        <div className='container'>
            <div className='image-block'>
                <img className='techie-img avatar' src={ avatar } />
            </div>
            <div className='well well-lg table-striped table-bordered table-responsive'>
                <div className='row'>
                    <div className='col-md-12 row-block'>
                        <label className='col-md-2 col-md-offset-3'>Name:</label>
                        <div className='col-md-4'>{name}</div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12 row-block'>
                        <label className='col-md-2 col-md-offset-3'>Title</label>
                        <div className='col-md-4'>{title}</div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12 row-block'>
                        <label className='col-md-2 col-md-offset-3'>Organisation</label>
                        <div className='col-md-4'>{organisation}</div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12 row-block'>
                        <label className='col-md-2 col-md-offset-3'>Follower</label>
                        <div className='col-md-4'>{follower}</div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12 row-block'>
                        <label className='col-md-2 col-md-offset-3'>Following</label>
                        <div className='col-md-4'>{following}</div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12 row-block'>
                        <label className='col-md-2 col-md-offset-3'>Country</label>
                        <div className='col-md-4'>{country}</div>
                    </div>
                </div>
            </div>
        </div>

    )
}

TechiInfo.propTypes = {
    techie: PropTypes.object.isRequired,
}
export default TechiInfo
