export default {
    data() {
        return {
            erreurs: {}
        }
    }, 
    methods: {
        validerRequis(champ, valeur) {
            if(!valeur) {
                this.erreurs[champ] = 'Ce champ est requis'
            } else {
                delete this.erreurs[champ]
            }
        }, 
        validerEmail(champ, valeur) {
            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            if(!emailRegex.test(valeur)) {
                this.erreurs[champ] = 'Le format Email n`est pas valide'
            } else {
                delete this.erreurs[champ]
            }
        }, 
        validerFormulaire(champs) {
            for(const c of champs) {
                const valeur = this[c];
                if(c === 'email') {
                    this.validerEmail(c, valeur);
                } else {
                    this.validerRequis(c, valeur);
                }
            }

            return Object.keys(this.erreurs).length === 0;
        }
    }
}