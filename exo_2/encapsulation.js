class Voiture {
    #marque;
    #modele;
    #annee;
    #couleur;

    constructor(marque, modele, annee, couleur) {
        this.#marque = marque;
        this.#modele = modele;
        this.#annee = annee;
        this.#couleur = couleur;
    }

    get marque() {
        return this.#marque;
    }
    set marque(value) {
        this.#marque = value;
    }
    get modele() {
        return this.#modele;
    }
    set modele(value) {
        this.#modele = value;
    }
    get annee() {
        return this.#annee;
    }
    set annee(value) {
        this.#annee = value;
    }
    get couleur() {
        return this.#couleur;
    }
    set couleur(value) {
        this.#couleur = value;
    }


    afficherDetails() {
        let details = `${this.marque}, ${this.modele}, ${this.annee}, ${this.couleur}`
        console.log(details);
    }
}
const voiture1 = new Voiture("Opel", "Corsa", 2006, "Rouge");

voiture1.afficherDetails();