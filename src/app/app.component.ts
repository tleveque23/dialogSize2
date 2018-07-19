import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  display: boolean = false;

  content: string = null;
  docHeader: string = null;

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
}
