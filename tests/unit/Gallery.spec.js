import { shallowMount } from '@vue/test-utils'
import Gallery from '@/components/Gallery'

test('Should print empty message when no results found.', () => {
    const gallery = shallowMount(Gallery, {
        propsData: {
            results: []
        }
    })

    expect(gallery.text()).toContain('No items found')
})

test('Should print each result item.', () => {
    const link = 'http://www.this-is-a-link-com'
    const anotherLink = 'http://www.this-is-another-link-com'
    const resultsData = [
        {
            links: [
                {
                    href: link
                }
            ]
        },
        {
            links: [
                {
                    href: anotherLink
                }
            ]
        }
    ]

    const gallery = shallowMount(Gallery, {
        propsData: {
            results: resultsData
        }
    })

    expect(gallery.findAll('img').at(0).attributes().src).toEqual(link)
    expect(gallery.findAll('img').at(1).attributes().src).toEqual(anotherLink)
})
