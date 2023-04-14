
import { AbstractControl, ValidatorFn } from '@angular/forms';


export function compareValidator(controlName: string, compareControlName: string): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const controlValue = control.value;
    const compareControlValue = control.parent?.get(compareControlName)?.value;
    const compareControl = control.parent?.get(controlName);

    if (controlValue && compareControlValue && compareControl && controlValue !== compareControlValue) {
      compareControl.setErrors({ compare: true });
      return { compare: true };
    }

    if (compareControl) {
      compareControl.setErrors(null);
    }

    return null;
  };
}

export function whitespaceValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const controlValue = control.value;

    if (controlValue && /\s/.test(controlValue)) {
      return { whitespace: true };
    }

    return null;
  };
}

export function patternValidator(pattern: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const controlValue = control.value;

    if (controlValue && !pattern.test(controlValue)) {
      return { pattern: true };
    }

    return null;
  };
}
