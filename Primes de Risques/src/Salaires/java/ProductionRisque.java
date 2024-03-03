package Salaires.java;

public class ProductionRisque extends Production implements EmployeARisque{
    public ProductionRisque(String nom, String prenom, int age, String date, int nbreDUniteVendu) {
        super(nom, prenom, age, date, nbreDUniteVendu);
    }

    public double calculerSalaire(){
        return nbreDUniteVendu * 5 + prime;
    }
}
