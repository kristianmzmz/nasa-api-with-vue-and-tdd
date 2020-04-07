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

    expect(component.text()).toContain('Found images('+ currentNumberOfItems +')')
})

test('Should update the Found Images on submit with the query size', async () => {
    const component = shallowMount(Search)
    const query = "sun"

    await component.vm.doRequest(query)

    expect(component.text()).toContain('Found images('+ query.length +')')
})