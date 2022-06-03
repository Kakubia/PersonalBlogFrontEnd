import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  userLogin: UserLogin = new UserLogin()

  constructor(
    private authService: AuthService,
    private router: Router

  ) { }

  ngOnInit(): void {
      window.scroll(0,0)
  }

  entrar() {
    this.authService.login(this.userLogin).subscribe((resp: UserLogin) => {
      this.userLogin = resp

      environment.token = this.userLogin.token
      environment.name = this.userLogin.name
      environment.id = this.userLogin.id
      environment.photo = this.userLogin.photo

      this.router.navigate(['/home'])
    }, erro => {
      if(erro.status == 500){
        alert('Usuário ou senha estão incorretos!')
      }
    })
  }
  

}
