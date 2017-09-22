import { AbstractControl, ValidatorFn, FormGroup } from '@angular/forms';

export class BudgetMgrValidators {
     
     static digit(control :AbstractControl):{[key:string]:any}{

        let reg = RegExp("/^\d+$/");

        if(!(reg.test(control.value)))
                return {
                    digit:true
                }
            return null;
     }

     static date(dateFormat: string):ValidatorFn {
      return (control: AbstractControl) : {[key: string]: any} => {
          
          let date = new Date(control.value);
        if (date!=null) {
        return  {
            date: dateFormat
                 }
             }
    
    return null;
        } 
    }

    static daterange(from : Date, till:Date) : ValidatorFn {
    return (control: AbstractControl) : {[key: string]: any} => {
        debugger;
        if (control.value ) {
            debugger;

        return  {
        daterange:true
                 }
             }
     
    return null;
        } 
    }

static dateRangeRequired(group : FormGroup) {
    const fromCtrl = group.controls['from'];
    const tillCtrl = group.controls['till'];
    
    const error ={
            dateRangeRequired: true
            }; 
 
    if(!tillCtrl || !fromCtrl)
      return error;

      const from = new Date (fromCtrl.value);
      const till = new Date (tillCtrl.value);  

    if(!till || !from)
         return error;

    if (from <= till) 
        return null;
        
   return error;
    }

    static oneRequired(group : FormGroup) {
        const fields = [];
        for (let field in group.controls) {
        fields.push(group.controls[field]);
        }
    
        if (!fields.some(control => control.value && control.value !== '')) {
        return {
            oneRequired: true
            };
        }
        return null;
    }

        private static dateIsValid(date: string) {
        let regexp = new RegExp('^[0-9]{4}\-[0-9]+\-[0-9]+$');
        
        return regexp.test(date);
    }
}
