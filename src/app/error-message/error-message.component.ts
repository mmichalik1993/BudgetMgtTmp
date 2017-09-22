import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ValidationService } from './validation.service';
 
@Component({
  moduleId: module.id,
  selector: 'error-message',
  templateUrl: './error-message.component.html'
})
 
export class ErrorMessageComponent {
  @Input() control: FormGroup | FormControl;
 
  get errorMessage() {

    for (let key in this.control.errors) {
      if (this.control.errors.hasOwnProperty(key) && this.control.dirty) {
        return ValidationService.getValidationMessage(key, this.control.errors[key]);
      }
    }
    return null;
  }
}