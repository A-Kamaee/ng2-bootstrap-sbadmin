import {
  TestComponentBuilder,
  describe,
  expect,
  injectAsync,
  it,
} from 'angular2/testing';
import {Component, View} from 'angular2/angular2';
import {DOM} from 'angular2/src/core/dom/dom_adapter';
import {AuthPage} from './auth';

export function main() {

  describe('auth component', () => {
    it('should work',
      injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        return tcb.overrideTemplate(TestComponent, '<div><auth></auth></div>')
          .createAsync(TestComponent)
          .then((rootTC) => {
            let authDOMEl = rootTC.debugElement.componentViewChildren[0].nativeElement;

            expect(DOM.querySelectorAll(authDOMEl, 'h1')[0].textContent).toEqual('Howdy!');
          });
      }));
  });
}

@Component({selector: 'test-cmp'})
@View({directives: [AuthPage]})
class TestComponent {}
