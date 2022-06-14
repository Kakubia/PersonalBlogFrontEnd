import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Topic } from 'src/app/model/Topic';
import { TemaService } from 'src/app/service/tema.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-tema-edit',
  templateUrl: './tema-edit.component.html',
  styleUrls: ['./tema-edit.component.css']
})
export class TemaEditComponent implements OnInit {

  topic: Topic = new Topic()

  constructor(
    private temaService: TemaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if(environment.token == ''){
      this.router.navigate(['/login'])
    }

    let id = this.route.snapshot.params['id']
    this.findByIdTema(id)
  }

  findByIdTema(id: number){
    this.temaService.getByIdTema(id).subscribe((resp: Topic) => {
      this.topic = resp
    })
  }

  atualizar(){
    this.temaService.putTema(this.topic).subscribe((resp: Topic) => {
      this.topic = resp
      alert('Tema atualizado com sucesso!')
      this.router.navigate(['/topic'])
    })
  }
}
