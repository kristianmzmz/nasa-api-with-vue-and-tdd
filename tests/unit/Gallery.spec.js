import { shallowMount } from '@vue/test-utils'
import Gallery from '@/components/Gallery'

test('Should print empty message when no results found.', () => {
    const wrapper = shallowMount(Gallery)

    expect(wrapper.text()).toContain("No items found")
})