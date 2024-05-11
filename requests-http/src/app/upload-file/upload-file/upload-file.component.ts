import { Component } from '@angular/core';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent {

  constructor() { }

  onChange(event: any) {
    console.log(event);

    const selectedFiles = <FileList>event.srcElement.files;
    //(document.getElementById('customFileLabel') as HTMLElement).innerHTML = selectedFiles[0].name;

    const fileNames = [];
    for (let i=0; i<selectedFiles.length; i++) {
      fileNames.push(selectedFiles[i].name);
    }
    (document.getElementById('customFileLabel') as HTMLElement).innerHTML = fileNames.join(', ');
  }

}
