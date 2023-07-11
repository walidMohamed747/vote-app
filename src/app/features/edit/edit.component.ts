import { HttpClient } from '@angular/common/http';
import { Component ,  ViewChild, ViewChildren, QueryList, ChangeDetectorRef } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import { uservote, vots, votsDetail } from 'src/app/models/votings';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { editData } from 'src/app/models/user';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  



  constructor(private http: HttpClient , private auth :HttpService ) {}

    ngOnInit() {
    //  this.editVoting()
    }

    editVoting(){
      // this.auth.editVote({}).subscribe(()=>{


      // })
    }
}
