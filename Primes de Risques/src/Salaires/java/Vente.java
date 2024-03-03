package Salaires.java;

public class Vente extends Employe{
    private double chiffreAffaire;

    public Vente(String nom, String prenom, int age, String date, double chiffreAffaire) {
        super(nom, prenom, age, date);
        this.chiffreAffaire = chiffreAffaire;
    }

    public double calculerSalaire(){
        return chiffreAffaire*20/100 + 400;
    }
}
