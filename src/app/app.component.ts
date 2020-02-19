import {Component} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form: FormGroup;

  days = [
    {id: 0, name: 'Lundi'},
    {id: 1, name: 'Mardi'},
    {id: 2, name: 'Mercredi'},
    {id: 3, name: 'Jeudi'},
    {id: 4, name: 'Venderedi'},
    {id: 5, name: 'Samedi'},
    {id: 6, name: 'Dimanche'}
  ];

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      days: new FormArray([])
    });

    this.addCheckboxes();
  }

  private addCheckboxes() {
    this.days.forEach((o, i) => {
      const control = new FormControl();
      (this.form.controls.days as FormArray).push(control);
    });
  }

  getControls() {
    return (this.form.controls.days as FormArray).controls;
  }

  get someChecked() {
    return !this.form.value.days.some((v, i) => (v ? this.days[i].id : null));
  }

  submit() {
    const selectedDaysIds = this.form.value.days
      .map((v, i) => (v ? this.days[i].id : null))
      .filter(v => v !== null);
    console.log(selectedDaysIds);
  }

}
