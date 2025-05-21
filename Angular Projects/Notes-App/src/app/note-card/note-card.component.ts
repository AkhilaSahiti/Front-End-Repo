import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit {

  @ViewChild('truncator') truncator!: ElementRef<HTMLElement> ;
  @ViewChild('bodyText')  bodyText!: ElementRef<HTMLElement>;
  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    //if there is a text overflow else hide the truncator
    let style = window.getComputedStyle(this.bodyText.nativeElement, null);
    let viewableHeight = parseInt(style.getPropertyValue("height"), 10);

    if(this.bodyText.nativeElement.scrollHeight > viewableHeight){
      // text overflow occurs , show the fade out truncator
      this.renderer.setStyle(this.truncator.nativeElement, 'display', 'block');
    } else {
      // text overflow occurs, hide the fade out truncator 
      this.renderer.setStyle(this.truncator.nativeElement, 'display', 'none');
    }
  }


}
