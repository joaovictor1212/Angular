import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { runInThisContext } from 'vm';

@Injectable({
  providedIn: 'root'
})
export class CuriositiesService {
  bypassSecurityTrustResourceUrl(url: any) {
    throw new Error('Method not implemented.');
  }
  collection: AngularFirestoreCollection;


  constructor(private db: AngularFirestore) { }

  registraCuriosidade(curiosidade){
    curiosidade.id = this.db.createId();
    this.collection = this.db.collection('curiosidade');
    return this.collection.doc(curiosidade.id).set(curiosidade)
  }

  lista(tipo){
    this.collection = this.db.collection('curiosidade', (ref)=>ref.where('tipo', '==', tipo));
    return this.collection.valueChanges();
  }

  remove(curiosidade){
    this.collection = this.db.collection('curiosidade');
    this.collection.doc(curiosidade.id).delete();
  }

  edita(curiosidade){
    this.collection = this.db.collection('curiosidade');
    this.collection.doc(curiosidade.id).update(curiosidade);
  }

}
