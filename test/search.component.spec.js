import React from 'react'
import { mount,shallow } from 'enzyme'
import SearchComponent from '../../src/js/components/search/search.jsx'


function setup() {
    const props = {
      clearSearchKey:jest.fn(),
      setSearchKey:jest.fn(),
      techies:[],
      isFetching:false,
      visibleTechies:[],
      searchKey:"test",
      match:{
          params:{
              id:3
          }
      },
      getDataRequest:jest.fn()
    }
  
    const enzymeWrapper = mount(<SearchComponent {...props} />)
  
    return {
      props,
      enzymeWrapper
    }
  }

    describe('SearchComponent', () => {
      it('should render self and subcomponents', () => {
        const { enzymeWrapper } = setup()
        expect(enzymeWrapper.find('Loader').hasClass('spinner')).toBe(true)
        const todoInputProps = enzymeWrapper.find('InputSearch').props()
        expect(todoInputProps.searchKey).toBe("test")
        const visibleTechiesProps = enzymeWrapper.find('VisibleTechieList').props()
        expect(visibleTechiesProps.queryParam).toEqual('test')
        expect(visibleTechiesProps.params).toEqual({id:3})
      })
  
      it('should call handleSearchKey', () => {
        const { enzymeWrapper, props } = setup()
        const input = enzymeWrapper.find('InputSearch')
        input.props().setSearchKey('')
        expect(props.setSearchKey.mock.calls.length).toBe(0)
        input.props().setSearchKey('Use Redux')
        expect(props.setSearchKey.mock.calls.length).toBe(1)
      })
    })
  
