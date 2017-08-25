import React from 'react'
import Techie from '../common/techie'
import InputSearch from '../common/inputsearch'
import ErrorComponent from '../common/showerror'
import { LOADER_OPTIONS } from '../../constants/constants'
import Loader from 'react-loader'
import PropTypes from 'prop-types'
import _ from 'lodash'

export default class Home extends React.PureComponent {

    componentDidMount() {
        this.props.actions.getDataRequest();
        this.props.actions.clearSearchKey();
    }

    render() {
         const {
            actions, 
            match, 
            errorMessage, 
            isFetching, 
            techies, 
            searchKey
        } = this.props
        return (
            <Loader loaded={!isFetching} className='spinner' options={LOADER_OPTIONS}>
                <div className='component-block'>
                    {<ErrorComponent className='error' errorMessage={ errorMessage } dataNotFetched={ !techies.length > 0 } />}
                    {techies.length > 0 && (
                        <div className='col-md-12'>
                            <InputSearch setSearchKey={ actions.setSearchKey } searchKey={ searchKey } clearSearchKey={ actions.clearSearchKey } />
                            {
                                _.map(techies, (techie) => (
                                    <Techie key={ techie.id } techie={ techie }/>
                                ))
                            }
                        </div>
                    )
                    }
                </div>
            </Loader>
        )
    }
}

Home.propTypes = {
    actions: PropTypes.object.isRequired,
    errorMessage: PropTypes.string,
    techies: PropTypes.array.isRequired,
    searchKey: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
};
