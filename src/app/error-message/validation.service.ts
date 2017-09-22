import { Injectable } from '@angular/core';

export class ValidationService {

 static getValidationMessage(validator : string, validatorValue? : any) {
  debugger;
    const messages = {
      'required': 'This field is required',
      'oneRequired': 'At least one field is required',
      'minlength': `Min length is ${validatorValue.requiredLength} characters`,
      'startsWith': `This field must start with ${validatorValue}`,
      'digits': 'This field must be a digit',
      'date': `Use date format ${validatorValue}`,
      'min': `Value should not be negative`,
      'dateRangeRequired':`Date till should be greather than from`
    };

    return messages[validator];
  }
}
