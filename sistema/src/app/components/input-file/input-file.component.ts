import { Component, EventEmitter, forwardRef, input, model, Output, output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-file',
  standalone: true,
  imports: [
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputFileComponent),
      multi: true
    }
  ],
  templateUrl: './input-file.component.html',
  styleUrl: './input-file.component.css'
})
export class InputFileComponent implements ControlValueAccessor {

  protected value = model<any>();
  protected onChange: any = (value: any) => { };
  protected onTouched: any = () => { };
  protected isDisabled: boolean = false;

  labelInput = input<string>();
  tabIndex = input<number>(0);

  @Output() fileChange = new EventEmitter<File>();

  writeValue(value: any): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;

    if (input?.files?.[0]) {
      const file = input.files[0];
      this.fileChange.emit(file);
    }
  }

}
