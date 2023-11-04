import { Component } from '@angular/core';

@Component({
  selector: 'app-text-styling',
  templateUrl: './text-styling.component.html',
  styleUrls: ['./text-styling.component.css']
})
export class TextStylingComponent {
  textColor: string = 'black';
  fontSize: number = 16;
  fontFamily: string = 'Arial'; 
  displayingText: string = 'This is a test !';

  updateTextStyles() {
    this.displayingText = 'This is a test !'; 
  }

  changeStyles() {
    this.updateTextStyles();
  }
}
