import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';
import { User } from '../shared/models/user.model';
import { MatDialog } from '@angular/material/dialog';
import { ModalCustomComponent } from '../shared/components/modals/modal-custom.component';

@Component({
  selector: 'app-users',
  templateUrl: './user.html',
  styleUrls: ['./user.scss'],
  providers: [UserService]
})

export class UserComponent implements OnInit {

  users: User[];
  displayedColumns: string[] = ['email', 'name', 'role', 'options'];

  constructor( private router: Router,
               public dialog: MatDialog,
               private userService: UserService ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers<any>().subscribe(
      users => {
        this.users = users.users as User[];
      }
    );
  }

  viewUser( user: User ): void {
    this.dialog.open(ModalCustomComponent, {
      data: { user }
    });
  }

}
