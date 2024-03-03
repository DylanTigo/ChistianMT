package Salaires.java;

public abstract class Employe {
    private String nom;
    private String prenom;
    private int age;
    private String dateEntre;

    public Employe(String nom, String prenom, int age, String date){
        this.nom= nom;
        this.prenom = prenom;
        this.age = age;
        this.dateEntre = date;
    }

    public String getNom() {
        return "L'employé " + nom + prenom;
    }

    public abstract double calculerSalaire();
}
