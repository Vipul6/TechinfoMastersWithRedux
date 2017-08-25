import {makeGetVisibleTechies} from '../src/js/reselect/selectors'

describe('selector', () => {
   const mockedState = {
      techies: {
         techies: [{id:"11234",name:"amit"},{id:"2323",name:"jain"}]
      },
    };
    const mockedProps =  {
      match: {
         params: {name:""}
      },
    }

  let expectedResult = []
  const getVisibleTechies = makeGetVisibleTechies();
  it("selector unit test", () => {
    expect(getVisibleTechies(mockedState,mockedProps)).toEqual(expectedResult)
  })
})