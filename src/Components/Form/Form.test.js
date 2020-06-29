import React from 'react'
import { shallow } from 'enzyme'
import Form from './Form'

it('expect to render Form component', () => {
    expect(shallow(<Form />)).toMatchSnapshot();
})

