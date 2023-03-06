import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Compte } from '../../models/compte.model';
import { Subscription } from 'rxjs/internal/Subscription';
import { CrudService } from 'src/app/services/crud.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-ext-compte',
  templateUrl: './ext-compte.component.html',
  styleUrls: ['./ext-compte.component.css']
})
export class ExtCompteComponent implements OnInit {

  constructor(
    private crud: CrudService,
    private router: Router,
    private tokenStorage: TokenStorageService
  ) { }

  orderHead: any;
  isDescOrder: any;
  comptes: Compte[] = [];
  searshInput = { titre: '' };
  hideOff: boolean = false;
  hideDem: boolean = true;

  sort(head: any) {
    this.isDescOrder = !this.isDescOrder;
    this.orderHead = head;
  }
  goDetails(id: string) {
    this.router.navigate(['detailsServiceDem/', id]);
  }
  ngOnInit(): void {
    // this.crud.getAllAccounts().subscribe((data) => {
    //   this.comptes = data;
    // });
  }
}