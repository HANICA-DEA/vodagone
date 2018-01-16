import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {AbonnementenService} from '../../services/abonnementen/abonnementen.service';
import {Abonnement} from '../../models/abonnement/abonnement.interface';
import {Aanbieder} from '../../models/abonnement/enums/aanbieder.enum';

@Component({
  selector: 'app-select-abonnement',
  templateUrl: './select-abonnement.component.html',
  styleUrls: ['./select-abonnement.component.scss']
})
export class SelectAbonnementComponent implements OnInit {

  public abonnementen: Abonnement[];
  public selectedAbonnement: Abonnement;
  public aanbieder = Aanbieder;

  constructor(private abonnementenService: AbonnementenService,
              private dialogRef: MatDialogRef<SelectAbonnementComponent>) {
  }

  ngOnInit(): void {
    this.abonnementenService.getAllAbonnementen('').then(abonnementen => this.setAbonnementen(abonnementen));
  }

  public onOk(): void {
    this.dialogRef.close(this.selectedAbonnement);
  }

  public onAbonnementSelected(selectedAbonnement: Abonnement): void {
    this.selectedAbonnement = selectedAbonnement;
  }

  private setAbonnementen(abonnementen: Abonnement[]): void {

    this.abonnementen = abonnementen;
  }
}
