import { Component, OnInit, Inject } from '@angular/core';
import { InhabitantService } from './services/inhabitant.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  inhabitant: any;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [InhabitantService],
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  inhabitants!: any[];
  displayedColumns = ["name", "gender", "birthDate", "age"];
  constructor(private InhabitantService: InhabitantService, public dialog: MatDialog) {}
  ngOnInit(): void{
    this.InhabitantService.getInfo().subscribe(inhabitants => {
      console.log(inhabitants);
      this.inhabitants = inhabitants.results;
      console.log(this.inhabitants)
    })
  }
  
onRowClicked(row: any): void {
  console.log(row);
  const dialogRef = this.dialog.open(DialogData, {
    width: '400px',
    data: {inhabitant: row}
  });
}
}

@Component({
selector: 'dialog-data',
templateUrl: './dialog-data.html',
})
export class DialogData {
constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
