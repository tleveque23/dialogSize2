import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  display: boolean = false;
  reorderModalDisplay: boolean = false;

  content: string = null;
  docHeader: string = null;

  get width(): number {
    return window.innerWidth * 0.9;
  }

  showDialog() {
    this.content = null;
    this.docHeader = 'No doc';
    this.display = true;
  }


  showDialogLarge() {
    this.docHeader = 'The doc';
    this.content = 'Content\nline 2\nline 2\nline 2\nline 2\nline 2\nline 2\nline 2\nline 2\n\nline 2\nline 2\nline 2\nline 2\nline 2\nline 2\nline 2\nline 2\n\nline 2\nline 2\nline 2\nline 2\nline 2\nline 2\nline 2\nline 2\n\nline 2\nline 2\nline 2\nline 2\nline 2\nline 2\nline 2\nline 2\n\nline 2\nline 2\nline 2\nline 2\nline 2\nline 2\nline 2\nline 2\n\nline 2\nline 2\nline 2\nline 2\nline 2\nline 2\nline 2\nline 2\n\nline 2\nline 2\nline 2\nline 2\nline 2\nline 2\nline 2\nline 2\n\nline 2\nline 2\nline 2\nline 2\nline 2\nline 2\nline 2\nline 2\n\nline 2\nline 2\nline 2\nline 2\nline 2\nline 2\nline 2\nline 2';
    this.display = true;
  }

  showReorderModal() {
    this.reorderModalDisplay = true;
  }

  close() {
    this.reorderModalDisplay = false;
  }
}
