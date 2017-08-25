import React from 'react'
import InputSearch from '../common/inputsearch'
import VisibleTechieList from './visibletechielist'
import Loader from 'react-loader'
import { LOADER_OPTIONS } from '../../constants/constants'
import PropTypes from 'prop-types'
import { bindHandlers } from 'react-bind-handlers'

class SearchComponent extends React.PureComponent {

    componentDidMount() {
        this.manipulateSearchKey()
    }
    manipulateSearchKey() {
        this.props.actions.clearSearchKey();
        this.props.match.params.id &&
            this.props.actions.setSearchKey(this.props.match.params.id)
        !this.props.techies.length > 0 &&
        this.props.actions.getDataRequest()
    }
    render() {
         const {
            actions, 
            match, 
            techies, 
            isFetching, 
            visibleTechies, 
            searchKey
        } = this.props
        return (
            <Loader loaded={!isFetching} className='spinner' options={LOADER_OPTIONS}>
                {
                    techies.length > 0 &&
                    (<div className='component-block'>
                        <div className='col-md-12'>
                            <InputSearch setSearchKey={ actions.setSearchKey } searchKey={ searchKey } clearSearchKey={ actions.clearSearchKey }/>
                            <VisibleTechieList queryParam={ searchKey } visibleTechies={ visibleTechies } params={ match.params } />
                        </div>
                    </div>)
                }
            </Loader>
        )
    }
}
SearchComponent.propTypes = {
    actions: PropTypes.object.isRequired,
    isFetching: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string,
    techies: PropTypes.array.isRequired,
    visibleTechies: PropTypes.array.isRequired,
    searchKey: PropTypes.string.isRequired,
    match: PropTypes.object.isRequired,
}
export default bindHandlers(SearchComponent)
