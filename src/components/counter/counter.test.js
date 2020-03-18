import React from 'react';
import Counter from './counter.js';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

describe('<Counter />', () => {
  it('renders correctly', () => {
    renderer.create(<Counter />).toJSON()
    const tree = renderer.create(<Counter />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('changes state on up click', () => {
    const component = mount(<Counter />)
    const button = component.find('.up')
    button.simulate('click')
    expect(component).toHaveState({ count: 1 })
    expect(component.find('.count')).toIncludeText(1)
  })
  it('changes state on down click', () => {
    const component = mount(<Counter />)
    const button = component.find('.down')
    button.simulate('click')
    expect(component).toHaveState({ count: -1 })
    expect(component.find('.count')).toIncludeText(-1)

  })
})