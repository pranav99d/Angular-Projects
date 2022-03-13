import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appActive1]'
})
export class Active1Directive {

  constructor(el:ElementRef) {

          el.nativeElement.style.font = "italic bold 20px arial,serif";
          el.nativeElement.style.backgroundColor = 'Red';
  }

}
