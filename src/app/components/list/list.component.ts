import { Component ,OnInit} from '@angular/core';
import { Student } from 'src/app/models/student/Student';
import { ServerHttpService } from 'src/app/Services/server-http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  public students: Student[] = [];

  constructor(
    private serverHttp: ServerHttpService
  ) {
    // this.age = common.age;
  }

  ngOnInit(): void {
    this.serverHttp.getStudents().subscribe((data) => {
      console.log('student', data);
      this.students = data;
    });
  }
}


