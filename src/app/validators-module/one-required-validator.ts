import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, FormGroup } from '@angular/forms';
import {BudgetMgrValidators} from './budget-mgr-validators';
 
const ONE_REQUIRED_VALIDATOR : any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => OneRequiredValidator),
  multi: true
}
 
@Directive({
  selector: '[oneRequired][ngModelGroup]',
  providers: [ONE_REQUIRED_VALIDATOR]
})
 
export class OneRequiredValidator implements Validator {
  validate(group : AbstractControl) : {[key : string] : any} {
    return BudgetMgrValidators.oneRequired(group as FormGroup);
  } 
}