import { Component } from '@angular/core';

@Component({
    template: '<h2>Page not found</h2>',
    styles: [`
    h2 {
      font-family: Georgia, "Times New Roman", Times, serif;
      font-size: 2em;
      margin-top: 80px;
      margin-bottom: 20px;
      text-align: center;
      font-weight: normal;
      color: #222;
     }`]
})
export class PageNotFoundComponent {
}
