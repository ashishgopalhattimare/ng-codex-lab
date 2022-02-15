import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ng-codex-lab-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {

  @Input() iconLink: string | undefined;
  @Input() showIcon = true;

  @Input() type = 'white-btn';
  @Input() isActive = true;

  @Output() isClicked = new EventEmitter();

  constructor() {}
  executeEvent = () => this.isClicked.emit();
}
