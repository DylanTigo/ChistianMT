package Salaires.java;

public class Manutention extends Employe {
    protected int nbreDHeure;
    public Manutention (String nom, String prenom, int age, String date, int nbreDHeure) {
        super(nom, prenom, age, date);
        this.nbreDHeure = nbreDHeure;
    }

    public double calculerSalaire(){
        return nbreDHeure * 65 ;
    }
}
