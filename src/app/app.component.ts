import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'accsetup';

  array: string[] =  ["Wendy", "Salsabil", "Florian"];
  array_2: Array<string> = new Array<string>();
  clicked: boolean = false;


  // getZuperTitle(): string {
  //   return 'Zuper title mais dans la fonction'
  // }
  getZuperTitle(line: number =10): string {
    return 'Zuper title mais dans la fonction' + line;
  }

  changeTitle(): void {
    this.clicked = true;
  }
}
