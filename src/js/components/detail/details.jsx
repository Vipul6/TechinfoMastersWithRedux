import React from 'react'
import Loader from 'react-loader'
import { LOADER_OPTIONS } from '../../constants/constants'
import ErrorComponent from '../common/showerror'
import TechieDetails from './techiedetails'
import PropTypes from 'prop-types'

 class DetailsComponent extends React.Component {
    
    componentDidMount() {
        this.props.actions.getFilteredDataRequest(this.props.match.params.id);
    }
    render() {
        const {
            actions, 
            match, 
            errorMessage, 
            isFetching, 
            filteredTechie, 
        } = this.props
        return (
              <Loader loaded={ !isFetching } className='spinner' options={ LOADER_OPTIONS }>
              <ErrorComponent className='error' dataNotFetched={ !Object.keys(filteredTechie).length > 0 } errorMessage={ errorMessage }/>
                {
                   Object.keys(filteredTechie).length > 0
                    && 
                   <TechieDetails params={ match.params.id } isFetching={ isFetching } filteredTechie={ filteredTechie } actions={ actions }/>
                }
            </Loader>
        )
    }
}
DetailsComponent.propTypes = {
    actions:PropTypes.object.isRequired,
    match:PropTypes.object.isRequired,
    errorMessage: PropTypes.string,
    filteredTechie:PropTypes.object.isRequired,
    isFetching:PropTypes.bool.isRequired,
};
export default DetailsComponent
