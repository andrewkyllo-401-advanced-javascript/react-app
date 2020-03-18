import React from 'react'
import Footer from './footer.js'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

describe('<Footer />', () => {
  it('It renders correctly', () => {
    const tree = renderer.create(<Footer />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Is alive at application start', () => {
    const component = shallow(<Footer />)
    expect(component.find('footer')).toExist()
    expect(component.find('footer')).toIncludeText('\u00A9 2018 Code Fellows')
  })
})
