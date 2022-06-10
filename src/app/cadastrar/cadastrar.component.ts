import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  user: User = new User
  confirmPassword: string
  userType: string

  constructor(
    private authService: AuthService,

    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
  }

  confirmSenha(event: any) {

    this.confirmPassword = event.target.value
  }

  tipoUser(event: any) {

    this.userType = event.target.value
  }

  cadastrar() {
    this.user.type = this.userType
    if (this.user.password != this.confirmPassword) {
      alert('As senhas estão diferentes')
    } else {
      this.authService.register(this.user).subscribe({
        next: (resp: User) => {
          this.user = resp
          this.router.navigate(['/entrar'])
          alert('Usuário cadastrado com sucesso')
        }
      })
    }
  }
}
