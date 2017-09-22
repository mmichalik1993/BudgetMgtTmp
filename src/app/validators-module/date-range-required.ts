import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, FormGroup } from '@angular/forms';
import {BudgetMgrValidators} from './budget-mgr-validators';
 
const DATE_RANGE_REQUIRED : any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => DateRangeRequired),
  multi: true
}
 
@Directive({
  selector: '[dateRangeRequired][dateRangeRequired]',
  providers: [DATE_RANGE_REQUIRED]
})
 
export class DateRangeRequired implements Validator {
  validate(group : AbstractControl) : {[key : string] : any} {
    return BudgetMgrValidators.dateRangeRequired(group as FormGroup);
  } 
}