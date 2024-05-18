import { EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

export abstract class FormHelperBase {
    formGroup!: FormGroup;
    constructor() {}

    setFormGroup(formGroup: FormGroup) {
      console.log('setFormGroup', formGroup);
      
      this.formGroup = formGroup;
    }
  
    focusOnInvalidField() {
      if (!this.formGroup) {
        console.error('FormGroup is not set');
        return;
      }
  
      for (const key of Object.keys(this.formGroup.controls)) {
        const control = this.formGroup.get(key);
        if (control && control.invalid) {
          const invalidControl = document.querySelector(`[formControlName="${key}"]`);
          if (invalidControl) {
            (invalidControl as HTMLElement).focus();
            control.markAsTouched();
            break;
          }
        }
      }
    }
}