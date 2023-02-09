import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Incidencias } from '../interfaces/Incidencias';

@Injectable({
  providedIn: 'root'
})
export class ServicioCrudService {

  private Coleccion ="incidencias";
  constructor(private firebase:AngularFirestore) { }



  getIncidencia(id:string){
    return this.firebase.collection(this.Coleccion).doc(id).snapshotChanges();
    
  }


  getAll(){
    return this.firebase.collection(this.Coleccion).snapshotChanges();
  }


  newIncidencia(incidencias:Incidencias){

    return this.firebase.collection(this.Coleccion).add(incidencias);

  }

  updateIncidencia(documentId:string,incidencias:Incidencias){

    return this.firebase.collection(this.Coleccion).doc(documentId).update(incidencias);

  }

  delete(documentId:string){

    return this.firebase.collection(this.Coleccion).doc(documentId).delete();
  }

 
}

