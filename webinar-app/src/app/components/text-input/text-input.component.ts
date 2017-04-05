import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bp-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit {

  @Output() textInputted = new EventEmitter();
  @Input() buttonLabel = '';

  constructor() { }

  ngOnInit() {
  }

  inputTask(textInput: HTMLInputElement) {
    this.textInputted.emit(textInput.value);
    textInput.value = '';
  }

}
