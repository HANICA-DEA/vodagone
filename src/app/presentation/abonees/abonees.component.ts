import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {Abonnee} from '../../models/abonnee/abonnee.interface';
import {AbonneeService} from '../../services/abonee/abonee.service';

@Component({
  selector: 'app-abonnees',
  templateUrl: './abonnees.component.html',
  styleUrls: ['./abonees.component.scss']
})
export class AbonneesComponent implements OnInit {

  public abonnees: Abonnee[];
  public selectedAbonnee: Abonnee;

  constructor(private abonneeService: AbonneeService,
              private dialogRef: MatDialogRef<AbonneesComponent>) {
  }

  ngOnInit(): void {
    this.abonneeService.getAbonnementen().then(abonnees => this.setAbonees(abonnees));
  }

  public onOk(): void {
    this.dialogRef.close(this.selectedAbonnee);
  }

  public onAbonneeSelected(selectedAbonnee: Abonnee): void {
    console.log('Selecting abonee: ', selectedAbonnee);
    this.selectedAbonnee = selectedAbonnee;
  }

  private setAbonees(abonnees: Abonnee[]): void {
    this.abonnees = abonnees;
  }
}

