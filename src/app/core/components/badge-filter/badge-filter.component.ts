import { Component, forwardRef, Input, OnInit } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

export const BADGE_FILTER_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => BadgeFilterComponent),
  multi: true,
};

@Component({
  selector: 'app-badge-filter',
  templateUrl: './badge-filter.component.html',
  providers: [BADGE_FILTER_VALUE_ACCESSOR],
})
export class BadgeFilterComponent implements ControlValueAccessor {
  @Input() formControl: FormControl;

  private allElements: { name: string; active: boolean }[];

  @Input() public set elements(data) {
    this.allElements = data.map((el) => {
      return { name: el, active: true };
    });
    this.updateValue();
  }
  public get elements(): any {
    return this.allElements;
  }
  private value: string[];

  constructor() {}

  onChange = (_: any) => {};

  onTouch = () => {};

  toggleButton(elem): void {
    elem.active = !elem.active;
    this.updateValue();
  }

  private updateValue(): void {
    this.value = this.allElements
      .filter((el) => el.active)
      .map((el) => el.name);
    this.onChange(this.value);
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  public setDisabledState(isDisabled: boolean): void {}

  public writeValue(obj: any): void {
    this.value = obj;
    this.onChange(this.value);
  }
}
