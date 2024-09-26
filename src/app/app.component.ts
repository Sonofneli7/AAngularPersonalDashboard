import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabsComponent } from "./tabs/tabs.component";
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TabsComponent],  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnim', [
      transition('* => *', [
        style({
          background: 'blue'
        }),
        animate(1000)     //passing in duration and animating to the end state
      ])
    ])
  ]
})
export class AppComponent {

  prepareRoute(outlet: RouterOutlet) {
    if (outlet.isActivated) {
      return outlet.activatedRoute.snapshot.url;
    }
    return null;
  }
}
