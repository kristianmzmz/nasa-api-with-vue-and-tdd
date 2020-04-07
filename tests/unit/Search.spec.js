import { shallowMount } from '@vue/test-utils'
import Search from '@/components/Search'

test('A results string is rendered', () => {
    const component = shallowMount(Search)

    expect(component.text()).toContain('Found images(0)')
})