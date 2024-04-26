import { Component, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.scss']
})
export class AlertModalComponent {
  bsModalRef: BsModalRef;

  @Input() message: string;
  @Input() type = 'success';

  constrcutor(bsModalRef: BsModalRef) { }

  onClose() {
    this.bsModalRef.hide();
  }
}
