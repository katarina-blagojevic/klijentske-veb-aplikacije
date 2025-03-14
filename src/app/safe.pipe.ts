import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {

  }
  //ovako mozemo da imamo putanju ka mapi jer je bez toga on fejlovao da ucita eksterni linkovi u sors tagu zbog bezbednosti
  transform(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url)
  }

}
