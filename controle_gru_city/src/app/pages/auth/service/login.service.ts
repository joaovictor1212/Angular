import { Injectable } from '@angular/core';
import firebase from 'firebase/compat';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NavController, ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
@Injectable({
	providedIn: 'root'
})
export class LoginService {

	isLoggedIn: Observable<firebase.User>;

	constructor(

		private toast: ToastController,
		private nav: NavController,
		private auth: AngularFireAuth,
		
		) { 
			this.isLoggedIn = this.auth.authState;
		}

	login(user){
		this.auth.signInWithEmailAndPassword(user.email, user.password).then(()=> this.nav.navigateForward('registros')).catch((error) => this.showError());
	}
	
	private async showError(){
		const crtl = await this.toast.create({
			message: "Dados de acesso incorretos",
			duration: 3000
		});


		crtl.present();
	}

	recoverPass(data){
		this.auth.sendPasswordResetEmail(data.email).then(()=>this.nav.navigateBack('auth')).catch(error=>{
			console.log(error);
		});
	}

	createUser(user){
		this.auth.createUserWithEmailAndPassword(user.email, user.password).then(credentials => console.log(credentials));
	}

	logout(){
		this.auth.signOut().then(()=>
		this.nav.navigateBack('auth'));
	}
}
