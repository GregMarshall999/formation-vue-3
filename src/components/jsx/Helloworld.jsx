import { h, ref } from 'vue'

export default {
    name: 'HelloWorld', 
    setup() {
        const compte = ref(0);
        const increment = () => {
            compte.value++;
        };

        return () => h('div', [
            h('h1', 'Hellow World avec JSX'), 
            h('p', `Compte: ${compte.value}`), 
            h('button', { onClick: increment }, 'Incrementer')
        ])
    }
}