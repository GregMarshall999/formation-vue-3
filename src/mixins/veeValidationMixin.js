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
        }, 
        validerMdp(valeur) {
            const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
            if(!regex.test(valeur)) {
                return 'Le mot de passe doit contenir une Majuscule, une minuscule, des caractères numériques et un caractère spécial';
            }

            return true;
        }
    }
}