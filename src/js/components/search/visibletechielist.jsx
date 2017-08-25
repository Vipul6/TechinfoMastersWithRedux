import React from 'react'
import Techie from '../common/techie'
import PropTypes from 'prop-types'
import ErrorComponent from '../common/showerror'
import _ from 'lodash'

const VisibleTechieList = (props) => {
   
    let noData = props.params.id ? (!(props.queryParam.trim().length>0)  || !(props.visibleTechies.length > 0)) :false
    return (
        <div>
            {props.visibleTechies.length > 0 ?
                _.map(props.visibleTechies, (techie) => (
                    <Techie key={techie.id} techie={techie} />
                )) :
                (<ErrorComponent noDataFound={noData} />)}
        </div>
    )

}

VisibleTechieList.propTypes = {
    visibleTechies: PropTypes.array.isRequired,
    queryParam: PropTypes.string.isRequired,
    params:PropTypes.object
};
export default VisibleTechieList
