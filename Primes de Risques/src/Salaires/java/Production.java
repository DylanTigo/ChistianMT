package Salaires.java;

public class Production extends Employe implements EmployeARisque{
    protected int nbreDUniteVendu;
    public Production (String nom, String prenom, int age, String date, int nbreDUniteVendu) {
        super(nom, prenom, age, date);
        this.nbreDUniteVendu = nbreDUniteVendu;
    }

    public double calculerSalaire(){
        return nbreDUniteVendu * 5 ;
    }
}
