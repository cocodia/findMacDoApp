import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import Position from '../Position';
import { PositionService } from '../position.service';

@Component({
  selector: 'app-mcdo-get',
  templateUrl: './mcdo-get.component.html',
  styleUrls: ['./mcdo-get.component.css']
})

export class McdoGetComponent implements OnInit {

  positions: Position[];
  angForm: FormGroup;
  
  constructor(private ps: PositionService, 
    private route: ActivatedRoute,
    private fb: FormBuilder) {
      this.createForm();
    }
  
    createForm() {
      this.angForm = this.fb.group({
        state_code: ['', [Validators.required,
        Validators.pattern(/^[A-Z]{2}$/), //pattern for only two capital lettres
        Validators.maxLength(2)]]
      });
    }

  ngOnInit() {
    
  }

  /**find mcdo locate in the state by state code */
  findPosition(state_code) {
    this.ps.getPositions(state_code)
    .subscribe((data: Position[]) => {
      this.positions = data;
    });
  }

      /** send positions to subscribers via observable subject**/
  sendLocations(): void {
    this.ps.sendLocations(this.positions);
}

}
