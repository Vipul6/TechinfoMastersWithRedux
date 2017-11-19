import React from 'react'
import { mount,shallow } from 'enzyme'
import SearchComponent from '../src/js/components/search/search.jsx'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

function setup() {
    const props = {
      actions:{
        clearSearchKey:jest.fn(),
        setSearchKey:jest.fn(),
        getDataRequest:jest.fn()
      },
      planets:[{id:1,text:"da"}],
      isFetching:false,
      visiblePlanets:[],
      searchKey:"test",
      match:{
          params:{
              id:3
          }
      }
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
        const todoInputProps = enzymeWrapper.find('InputSearch').props()
        expect(todoInputProps.searchKey).toBe("test")
        const visibleTechiesProps = enzymeWrapper.find('VisiblePlanets').props()
        expect(visibleTechiesProps.queryParam).toEqual('test')
        expect(visibleTechiesProps.params).toEqual({id:3})
        
      })
  
      it('should call handleSearchKey', () => {
        const { enzymeWrapper, props } = setup()
        const input = enzymeWrapper.find('InputSearch')
        console.log(input.props().actions)
        input.props().setSearchKey('')
        expect(props.actions.setSearchKey).toHaveBeenCalledTimes(1)
        input.props().setSearchKey('fedu')
        expect(props.actions.setSearchKey).toHaveBeenCalledTimes(2)
      })
      it('it should render the expected HTML', () => {
        const { enzymeWrapper, props } = setup()
        expect(
          enzymeWrapper.html()
        ).toMatchSnapshot();
      });
    })
  
