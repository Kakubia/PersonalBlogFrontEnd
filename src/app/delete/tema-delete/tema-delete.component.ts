import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Topic } from 'src/app/model/Topic';
import { TemaService } from 'src/app/service/tema.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-tema-delete',
  templateUrl: './tema-delete.component.html',
  styleUrls: ['./tema-delete.component.css']
})
export class TemaDeleteComponent implements OnInit {

  topic:Topic = new Topic
  idTema: number

  constructor(
    private temaService: TemaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if(environment.token == ''){
      this.router.navigate(['/login'])
    }

    this.idTema = this.route.snapshot.params['id']
    this.findByIdTema(this.idTema)
  }

  findByIdTema(id: number){
    this.temaService.getByIdTema(id).subscribe((resp: Topic) => {
      this.topic = resp
    })
  }

  apagar(){
    this.temaService.deleteTema(this.idTema).subscribe(() => {
      alert('Tema deletado com sucesso!')
      this.router.navigate(['/topic'])
    })
  }

}
