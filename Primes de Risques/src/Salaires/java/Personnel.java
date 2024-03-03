package Salaires.java;

import java.util.ArrayList;

public class Personnel {
    private ArrayList<Employe> collectionEmploye;
    public Personnel(){
        collectionEmploye = new ArrayList<>();
    }

    public void ajouterEmploye(Employe employe){
        collectionEmploye.add(employe);
    }

    public void  afficherSalaires(){
        for (Employe e: collectionEmploye) {
            System.out.println( e.getNom() + " : " + e.calculerSalaire());
        }
    }
    public double salaireMoyen (){
        double salaireTotal = 0;
        for (Employe e : collectionEmploye){
            salaireTotal += e.calculerSalaire();
        }
        return salaireTotal/collectionEmploye.size();
    }
}
