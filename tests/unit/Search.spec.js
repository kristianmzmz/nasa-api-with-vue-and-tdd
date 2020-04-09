import { shallowMount } from '@vue/test-utils'
import Search from '@/components/Search'

test('A results string is rendered', () => {
    const search = shallowMount(Search)

    expect(search.text()).toContain('Found images(0)')
})

test('Should render the provided data value', async () => {
    const search = shallowMount(Search)
    const currentNumberOfItems = 23

    search.setData({
        numberOfImages: currentNumberOfItems
    })
    await search.vm.$nextTick()

    expect(search.text()).toContain('Found images(' + currentNumberOfItems + ')')
})

import axios from 'axios'

axios.get = jest.fn(() => Promise.resolve(
    {
        data: {
            collection: {
                items: [
                    {
                        links: [
                            {
                                href: 'http://www.this-is-a-link-com'
                            }
                        ]
                    },
                    {
                        links: [
                            {
                                href: 'http://www.this-is-another-link-com'
                            }
                        ]
                    }
                ]
            }
        }
    }
))

test('Should call the API on submit', async () => {
    const search = shallowMount(Search)
    const query = "sun"

    search.setData({ query })
    search.find('form').trigger('submit')
    await search.vm.$nextTick()

    expect(axios.get).toBeCalledWith(
        'https://images-api.nasa.gov/search',
        {
            params: {
                media_type: "image",
                q: query
            }
        }
    )
})

test('Should call the API on submit and update the results array', async () => {
    const search = shallowMount(Search)
    const query = 'sun'

    search.setData({ query })
    search.find('form').trigger('submit')
    await search.vm.$nextTick()

    expect(search.vm.numberOfImages).toBe(2)
})
