import { Component, OnInit } from '@angular/core';
import {Session} from "../../models/session";

@Component({
  selector: 'app-session-view',
  templateUrl: './session-view.component.html',
  styleUrls: ['./session-view.component.scss']
})
export class SessionViewComponent implements OnInit {

  session: Session = new Session();

  imageCarSrc = 'assets/images/multiplat_builder_02_blueprint.png'
   imageCarAlt = 'car'

  ngOnInit(): void {

  }

  colorBlack() {

  }

}
