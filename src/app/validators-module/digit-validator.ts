import { Directive, forwardRef ,ExistingProvider} from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';
import { BudgetMgrValidators } from './budget-mgr-validators';


const DIGITS_VALIDATOR :ExistingProvider = {
provide: NG_VALIDATORS,
useExisting : forwardRef(()=> DigitValidator),
multi:true
}

@Directive({
selector:'[digits][formControlName],[digis][formControl][digis][ngModel]',
providers: [DIGITS_VALIDATOR]
})

export class DigitValidator implements Validator {
        validate(c: AbstractControl): { [key: string]: any; } {
            return BudgetMgrValidators.digit(c);
        }
   }
