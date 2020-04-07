import { shallowMount } from '@vue/test-utils'
import Search from '@/components/Search'

test('A results string is rendered', () => {
    const component = shallowMount(Search)

    expect(component.text()).toContain('Found images(0)')
})

test('Should render the provided data value', async () => {
    const component = shallowMount(Search)
    const currentNumberOfItems = 23

    component.setData({
        numberOfImages: currentNumberOfItems
    })
    await component.vm.$nextTick

    expect(component.text()).toContain('Found images(' + currentNumberOfItems + ')')
})

import axios from 'axios'

jest.mock('axios', () => ({
    get: jest.fn(() => Promise.resolve({ 
        data: { 
            collection: {
                items: [
                    {
                        links : [
                            {
                                href: 'http://www.this-is-a-link-com'
                            }
                        ]
                    },
                    {
                        links : [
                            {
                                href: 'http://www.this-is-another-link-com'
                            }
                        ]
                    }
                ]
            }  
        }
     }))
}))

test('Should call the API on submit', async () => {
    const component = shallowMount(Search)
    const query = "sun"

    component.setData({ query })
    await component.find('form').trigger('submit')

    expect(axios.get).toBeCalledWith('https://images-api.nasa.gov/search?media_type=image&q=' + query)
})

test('Should call the API on submit and update the results array', async () => {
    const component = shallowMount(Search)
    const query = "sun"

    component.setData({ query })
    await component.find('form').trigger('submit')

    expect(component.vm.numberOfImages).toBe(2)
})

