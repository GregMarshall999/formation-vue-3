export default {
    methods: {
        validerRequis(valeur) {
            if(!valeur) {
                return 'Ce champ est requis';
            }

            return true;
        },
        validerEmail(valeur) {
            const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
            if(!regex.test(valeur)) {
                return 'Ce champ doit être un email valide';
            }

            return true;
        }
    }
}