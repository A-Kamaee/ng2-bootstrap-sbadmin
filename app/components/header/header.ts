import {Component, ElementRef, CORE_DIRECTIVES} from 'angular2/angular2';
import {Dropdown, DropdownMenu, DropdownToggle, Accordion, AccordionGroup, AccordionHeading} from 'ng2-bootstrap/ng2-bootstrap';
import {ROUTER_DIRECTIVES} from 'angular2/router';
@Component({
  selector: 'header-notification',
  templateUrl: './components/header/header-notification.html',
  directives: [Dropdown, DropdownMenu, DropdownToggle, ROUTER_DIRECTIVES, CORE_DIRECTIVES],
  viewProviders: [Dropdown, DropdownMenu, DropdownToggle, ElementRef]
})
export class HeaderNotification {
  toggled(open:boolean):void {
    console.log('Dropdown is now: ', open);
  }
}

@Component({
  selector: 'sidebar',
  templateUrl: './components/header/sidebar.html',
  directives: [ROUTER_DIRECTIVES, Accordion, AccordionGroup, AccordionHeading]
})
export class Sidebar {
}

@Component({
  selector: 'header',
  templateUrl: './components/header/header.html',
  directives: [Sidebar, HeaderNotification]
})
export class Header {

}

@Component({
  selector: 'wrapper',
  template: `<div id="wrapper">
      <header></header>
      <div id="page-wrapper" style="min-height: 561px;">
        <ng-content></ng-content>
      </div>
    </div>`,
  directives: [Header, CORE_DIRECTIVES]
})
export class WrapperCmp {
}
