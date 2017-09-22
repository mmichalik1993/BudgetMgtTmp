import { Directive, forwardRef, Input, ExistingProvider,
         OnChanges,OnInit, SimpleChanges } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, Validators } from '@angular/forms';
import { BudgetMgrValidators } from './budget-mgr-validators';


const DATE_VALIDATOR: ExistingProvider = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => DateValidator),
    multi: true
};

@Directive({
    selector: '[date][formControlName],[date][formControl],[date][ngModel]',
    providers: [DATE_VALIDATOR]
})

export class DateValidator implements Validator, OnChanges{
 validate(control: AbstractControl): {[key: string]: any} {
   return this.validator(control);
 }

  @Input() dateFormat : string;
  private validator = Validators.nullValidator;

   ngOnChanges(changes: SimpleChanges) {
    const dateFormat = changes['dateFormat'];
    if (dateFormat) {
      this.validator = BudgetMgrValidators.date(dateFormat.currentValue);
    } 
  }
}