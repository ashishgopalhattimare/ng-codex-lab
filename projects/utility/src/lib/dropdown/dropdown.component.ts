import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';

type InputType = string | number;

@Component({
  selector: 'ng-codex-lab-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {

  @Output() clicked = new EventEmitter < InputType > ();
  @Input() dropdownList: InputType[] = [];
  @Input() isDefault = true;

  eventListener = {
    focus: false,
    click: false
  };
  isHidden = true;

  constructor() {}

  selectDefaultDropdown(option: InputType, index: number): void {
    this.isHidden = true;
    this.clicked.emit(option);
  }
  hideDropdown = () => this.isHidden = true;

  @HostListener('click')
  clickInside(): void {
    this.eventListener.focus = true;
    this.eventListener.click = true;
  }

  @HostListener('document:click')
  clickout(): void {
    if (!this.eventListener.focus && this.eventListener.click) {
      this.eventListener.click = false;
      this.isHidden = true;
    }
    this.eventListener.focus = false;
  }
}
