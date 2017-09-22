import { Directive, forwardRef, Input, ExistingProvider,
         OnChanges,OnInit, SimpleChanges } from '@angular/core';
import { NG_VALIDATORS, Validators, Validator, AbstractControl, ValidatorFn } from '@angular/forms';
import {BudgetMgrValidators} from './budget-mgr-validators';

const DATERANGE_VALIDATOR : ExistingProvider = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => DaterangeValidator),
  multi: true
}

@Directive({
  selector: '[startsWith]',
  providers: [DATERANGE_VALIDATOR]
})

export class DaterangeValidator implements Validator, OnInit, OnChanges {
        ngOnInit(): void {
 
        }

  @Input() from : string;
  @Input() till : string;
  private validator = Validators.nullValidator;

  ngOnChanges(changes: SimpleChanges) {
    const from = changes['from'];
    const till = changes['till'];
    if (from && till) {
      this.validator = BudgetMgrValidators.daterange(new Date( from.currentValue),new Date(till.currentValue));
    }
  }


 validate(control: AbstractControl): {[key: string]: any} {
   return this.validator(control);
 }
}