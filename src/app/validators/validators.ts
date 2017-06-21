import { FormControl } from '@angular/forms';
import { regexp } from "./regexp";

export class GlobalValidator {

    static mailFormat(control: FormControl): ValidationResult {

        if (control.value != "" && (control.value.length <= 5 || !regexp.email.test(control.value))) {
            return { "incorrectMailFormat": true };
        }

        return null;
    }

}


interface ValidationResult {
    [key: string]: boolean;
}