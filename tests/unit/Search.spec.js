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

test('Should update the Found Images when the query is changed with the query size', async () => {
    const component = shallowMount(Search)
    const query = "sun"

    await component.vm.doRequest(query)

    expect(component.text()).toContain('Found images(' + query.length + ')')
})

test('Should update the Found Images on submit with the query size', async () => {
    const component = shallowMount(Search)
    const query = "sun"

    component.setData({ query })
    await component.find('form').trigger('submit')

    expect(component.text()).toContain('Found images(' + query.length + ')')
})


import axios from 'axios'

jest.mock('axios', () => ({
    get: jest.fn()
}))

test('Should call the API on submit', async () => {
    const component = shallowMount(Search)
    const query = "sun"

    component.setData({ query })
    await component.find('form').trigger('submit')

    expect(axios.get).toBeCalledWith('https://images-api.nasa.gov/search?media_type=image&q=' + query)
})

