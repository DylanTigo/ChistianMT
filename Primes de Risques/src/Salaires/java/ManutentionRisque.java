package Salaires.java;

public class ManutentionRisque extends Manutention implements EmployeARisque{
    public ManutentionRisque(String nom, String prenom, int age, String date, int nbreDHeure) {
        super(nom, prenom, age, date, nbreDHeure);
    }

    public double calculerSalaire(){
        return this.nbreDHeure * 65 + prime;
    }
}
