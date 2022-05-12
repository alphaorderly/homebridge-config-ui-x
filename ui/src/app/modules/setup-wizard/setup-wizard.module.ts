import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { SetupWizardRoutingModule } from './setup-wizard-routing.module';
import { SetupWizardComponent } from './setup-wizard.component';
import { SetupWizardGuard } from './setup-wizard.guard';


@NgModule({
  declarations: [
    SetupWizardComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    SetupWizardRoutingModule,
  ],
  providers: [
    SetupWizardGuard,
  ],
})
export class SetupWizardModule { }
