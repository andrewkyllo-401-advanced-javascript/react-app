import React from 'react'
import Header from './header.js'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

describe('<Header />', () => {
  it('It renders correctly', () => {
    const tree = renderer.create(<Header />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Is alive at application start', () => {
    const component = shallow(<Header />)
    expect(component.find('header')).toExist()
  })
})