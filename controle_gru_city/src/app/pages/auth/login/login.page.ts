import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';
import { LoginService } from '../service/login.service';


@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
	loginForm: FormGroup;

	constructor(
		private nav: NavController,
		private service: LoginService,
		private builder: FormBuilder
	) { }

	ngOnInit() {
		this.isUserLoggedIn();
	
		this.loginForm = this.builder.group({
		  email:['', [Validators.email, Validators.required]],
		  password:['',[Validators.minLength(8), Validators.required]]
		});
	  }
	
	isUserLoggedIn(){
	this.service.isLoggedIn.subscribe(user => {
			if(user){
			// usuário logado
				this.nav.navigateForward('registros');
			}
		}

		);
	}
	
	login(){
		const user = this.loginForm.value;
		this.service.login(user);
		console.log(user);
	  }
	

}
