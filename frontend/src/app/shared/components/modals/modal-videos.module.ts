import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalCustomComponent } from './modal-custom.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [ModalCustomComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],
  entryComponents: [ModalCustomComponent],
  exports: [ModalCustomComponent]
})
export class ModalCustomModule { }
