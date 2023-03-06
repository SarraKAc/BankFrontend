import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClAddEditComponent } from '../cl-add-edit/cl-add-edit.component';
import { ClientService } from '../services/client.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CoreService } from '../services/core.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'Prenom',
    'Nom',
    'dob',
    'email',
    'IndicatifPays',
    'NumTel',
    'CIN',
    'agence',
    'Identifiant',
    'MDP',
    'solde',
    'action',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog: MatDialog,
    private _clService: ClientService,
    private _coreService: CoreService
  ) {}

  ngOnInit(): void {
    this.getClientList();
  }

  openAddEditClForm() {
    const dialogRef = this._dialog.open(ClAddEditComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getClientList();
        }
      },
    });
  }

  getClientList() {
    this._clService.getClientList().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteClient(id: number) {
    this._clService.deleteClient(id).subscribe({
      next: (res) => {
        this._coreService.openSnackBar('Client deleted!', 'done');
        this.getClientList();
      },
      error: console.log,
    });
  }

  openEditForm(data: any) {
    const dialogRef = this._dialog.open(ClAddEditComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getClientList();
        }
      },
    });
  }
}
