import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Topic } from '../model/Topic';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  topic: Topic = new Topic()
  topicList: Topic[]

  constructor(
    private router: Router,
    private temaService: TemaService
  ) { }

  ngOnInit() {
    if(environment.token = '') {
      this.router.navigate(['/login'])   
    }

    this.findAllTopics()
  }

  findAllTopics(){
    this.temaService.getAllTema().subscribe((resp: Topic[])=>{
      this.topicList = resp
    })
  }

  register(){
    this.temaService.postTema(this.topic).subscribe((resp: Topic)=> {
      this.topic = resp
      alert('Tema cadastrado com sucesso!')
      this.findAllTopics()
      this.topic = new Topic()
    })
  }
}
