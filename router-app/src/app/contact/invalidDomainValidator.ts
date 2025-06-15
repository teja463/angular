import { AbstractControl } from "@angular/forms";

export function invalidDomainValidator(control: AbstractControl) {
  const hosts = ['@gmail.com', '@yahoo.com'];
  const value = control.value?.toLowerCase();
  if (!value) {
    return null;
  }

  console.log('control', value);

  const matches = hosts.some(host => value.indexOf(host) > -1)

  return matches ? { invalidDomain: true } : null;
}