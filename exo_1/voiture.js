class Voiture {
    constructor(marque, modele, annee, couleur) {
        this.marque = marque;
        this.modele = modele;
        this.annee = annee;
        this.couleur = couleur;
    }
    afficherDetails() {
        let details = `${this.marque}, ${this.modele}, ${this.annee}, ${this.couleur}`
        console.log(details);
    }
}

const Voiture1 = new Voiture("Opel", "Corsa", 2005, "Verte");
const Voiture2 = new Voiture("Renault", "Megane", 2008, "Rouge");

Voiture1.afficherDetails();
Voiture2.afficherDetails();