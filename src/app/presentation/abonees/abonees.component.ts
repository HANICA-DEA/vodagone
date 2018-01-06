import {Component} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {Abonnee} from '../../models/abonnee/abonnee.interface';

@Component({
  selector: 'app-abonnees',
  templateUrl: './abonnees.component.html',
  styleUrls: ['./abonees.component.scss']
})
export class AbonneesComponent {

  public abonnee: Abonnee;

  constructor(private dialogRef: MatDialogRef<AbonneesComponent>) {
  }

  public onOk(): void {
    this.dialogRef.close(this.abonnee);
  }
}

