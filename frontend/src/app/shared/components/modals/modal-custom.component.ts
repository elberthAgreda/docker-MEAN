import {Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { User } from '../../models/user.model';
import { UserService } from '../../../user/user.service';

@Component({
  selector: 'app-modal-custom',
  templateUrl: './modal-custom.html',
  styleUrls: ['./modal-custom.scss'],
  providers: [UserService]
})

export class ModalCustomComponent {

  user: User = new User();

  constructor(
    public dialogRef: MatDialogRef<ModalCustomComponent>,
    @Inject( MAT_DIALOG_DATA ) public data: any,
    private userService: UserService ) { this.user = data.user; }


  onNoClick(): void {
    this.dialogRef.close();
  }

  editUser(): void {
    this.userService.editUser(this.user).subscribe(
      res => {
        console.log(res);
      }
    );
  }

}
