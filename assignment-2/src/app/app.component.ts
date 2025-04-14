import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  heroPauseSolid,
  heroPlaySolid,
  heroStopSolid,
} from '@ng-icons/heroicons/solid';
import { startWith } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [CommonModule, ReactiveFormsModule, NgIcon],
  providers: [
    provideIcons({
      heroPlaySolid,
      heroPauseSolid,
      heroStopSolid,
    }),
  ],
})
export class AppComponent {
  // 재생 속도 상태 관리를 위한 FormControl
  speedCtrl = new FormControl(1, { nonNullable: true });
  speed$ = this.speedCtrl.valueChanges.pipe(startWith(this.speedCtrl.value));
}
