import React from 'react'
import { shallow } from 'enzyme'
import TaskDetails from './TaskDetails'

it('expect to render TaskDetails component', () => {
    const mocktaskDetails = ['event', '_bg'];
    const mocktask = {
        task_content: 'Content',
        task_due_date: '2020-06-28',
        date_created: new Date()
    }
    expect(shallow(<TaskDetails mocktaskDetails={mocktaskDetails} mocktask={mocktask} />)).toMatchSnapshot()
})

// it('toggles the edit state', () => {
//     const mocktaskDetails = ['event', '_bg'];
//     const mocktask = {
//         task_content: 'Content',
//         task_due_date: '2020-06-28',
//         date_created: new Date()
//     }
//     const wrapper = shallow(<TaskDetails mocktaskDetails={mocktaskDetails} mocktask={mocktask} />)

//     wrapper.find('[id="toggleEdit"]').hostNodes().simulate('click');
//     expect(wrapper.state()).toEqual({ isEdit:false });
// })