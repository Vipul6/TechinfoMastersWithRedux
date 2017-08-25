import React from 'react'
import PropTypes from 'prop-types'
import Modal from '../common/modal'
import TechieInfoEdit from './techieinfoedit'
import TechiInfo from './techieinfo'
import { HEADER } from '../../constants/constants'
import _ from 'lodash'

class TechieDetails extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            techie: {},
            hasError: false
        }
        this.onOpenModal = this.onOpenModal.bind(this)
        this.onCloseModal = this.onCloseModal.bind(this)
        this.onChange = this.onChange.bind(this)
        this.onUpdate = this.onUpdate.bind(this)
        this.validateForm = this.validateForm.bind(this)
    }

    componentDidMount() {
        this.setState({ techie: Object.assign({}, this.props.filteredTechie) })
    }

    onUpdate() {
        this.props.actions.updatDataRequest(this.state.techie.id, this.state.techie)
        this.onCloseModal()
    }
    validateForm() {
        let flag = (_.isEmpty(this.state.techie.name)  || _.isEmpty(this.state.techie.title) 
                    ||  _.isEmpty(this.state.techie.organisation)  || _.isEmpty(this.state.techie.country) )
                    
       flag ?this.setState({ hasError: true })
       :
       this.setState({ hasError: false })
    }
    onChange(e) {
        const temp = this.state.techie
        const key = e.target.name
        temp[key] = e.target.value
        this.setState({ techie: Object.assign({}, temp) })
        this.validateForm()
    }
    onOpenModal() {
        this.setState({ isModalOpen: true, techie: Object.assign({}, this.props.filteredTechie), hasError: false })
    }
    onCloseModal() {
        this.setState({ isModalOpen: false })
    }

    render() {
        return (
            <div>
                {
                    Object.keys(this.props.filteredTechie).length > 0 && (
                        <div>
                            <TechiInfo techie={ this.props.filteredTechie }/>
                            <button type='button' className='btn btn-info col-md-offset-5' value='edit' onClick={() => this.onOpenModal()}>Edit</button>
                            <Modal header={HEADER} isOpen={ this.state.isModalOpen } onClose={() => this.onCloseModal()}>
                                <TechieInfoEdit onChange={ this.onChange } techie={ this.state.techie } onUpdate={ this.onUpdate } onClose={ this.onCloseModal } hasError={ this.state.hasError }/>
                            </Modal>
                        </div>
                    )
                }
            </div>
        )
    }

}
TechieDetails.propTypes = {
    actions: PropTypes.object.isRequired,
    filteredTechie: PropTypes.object.isRequired,
}
export default TechieDetails
