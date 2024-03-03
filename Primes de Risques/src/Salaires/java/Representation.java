package Salaires.java;

public class Representation extends Employe{
    private double chiffreAffaire;

    public Representation (String nom, String prenom, int age, String date, double chiffreAffaire) {
        super(nom, prenom, age, date);
        this.chiffreAffaire = chiffreAffaire;
    }

    public double calculerSalaire(){
        return chiffreAffaire*20/100 + 800;
    }
}
