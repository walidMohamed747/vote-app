import { HttpClient } from '@angular/common/http';
import { Component ,  ViewChild, ViewChildren, QueryList, ChangeDetectorRef } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import { uservote, vots, votsDetail } from 'src/app/models/votings';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  @ViewChild('outerSort', { static: true }) sort!: MatSort;
  @ViewChildren('innerSort') innerSort!: QueryList<MatSort>;
  @ViewChildren('innerTables') innerTables!: QueryList<MatTable<uservote>>;
  users!: any[];
  votings !: votsDetail[];
  usersData: votsDetail[] = [];
  dataSource!: MatTableDataSource<votsDetail>;
  columnsToDisplay = ['ID', 'startDateTime', 'image','name','createdAt','updatedAt'];
  innerDisplayedColumns = ['uservotes'];
  expandedElement!: votsDetail | null;




  constructor(private http: HttpClient , private auth :HttpService , private cd: ChangeDetectorRef
    ) {}

    ngOnInit() {
      this.getVotings()
    }

  getVotings( ){
    this.auth.getVotings().subscribe((res)=>{
    this.votings=res; 
    console.log(res)
    this.votings.forEach( (vot:any) => {
      if (vot.voteCount && Array.isArray(vot.voteCount) && vot.voteCount.length) {
        this.usersData = [...this.usersData, {...vot, voteCount: new MatTableDataSource(vot.voteCount)}];
      } else {
        this.usersData = [...this.usersData, vot];
      }
    });
    this.dataSource = new MatTableDataSource(this.usersData);
    console.log(this.dataSource)
    this.dataSource.sort = this.sort;
``
    })
  }
  toggleRow(element: votsDetail) {
    element.uservotes && (element.uservotes as MatTableDataSource<uservote>).data.length ? (this.expandedElement = this.expandedElement === element ? null : element) : null;
    this.cd.detectChanges();
    this.innerTables.forEach((table, index) => (table.dataSource as MatTableDataSource<uservote>).sort = this.innerSort.toArray()[index]);
  }
}
