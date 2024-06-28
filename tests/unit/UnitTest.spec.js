import { shallowMount } from "@vue/test-utils";
import UnitTest from "@/vue/UnitTest.vue";

describe('UnitTest.vue', () => {
    it('Afficher props.msg quand msg est parametré', () => {
        const msg = 'Un message';
        const wrapper = shallowMount(UnitTest, { props: { msg } })

        expect(wrapper.text()).toMatch(msg)
    })

    it('Incrementer compte quand bouton cliqué', async () => {
        const wrapper = shallowMount(UnitTest)
        expect(wrapper.find('p').text()).toBe('0')

        await wrapper.find('button').trigger('click')
        expect(wrapper.find('p').text()).toBe('1')
    })
})