export default {
    beforeMount(e, binding) {
        e.style.cursor = 'pointer';
        e.addEventListener('click', () => {
            e.style.backgroundColor = binding.value || 'yellow'
        });
    }, 
    unmounted(e) {
        e.removeEventListener('click', () => {
            e.style.backgroundColor = 'white'
        });
    }
}