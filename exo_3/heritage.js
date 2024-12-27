class Vehicule {
    constructor(marque, modele, annee) {
        this.marque = marque;
        this.modele = modele;
        this.annee = annee;
    }
}

class Voiture extends Vehicule {
    constructor(marque, modele, annee, couleur) {
        super(marque, modele, annee);
        this.couleur = couleur;
    }
    showDetails() {
        let details = `${this.marque}, ${this.modele}, ${this.annee}, ${this.couleur}`;
        console.log(details);
    }
}

const voiture1 = new Voiture("Corvette", "C3", 1975, "Orange");

voiture1.showDetails();

