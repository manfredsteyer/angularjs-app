import angular from 'angular';

angular.module('app', []).component('helloComponent', { 
  controller: function () {
    this.message = 'AngularJS';
    this.version = require('./package.json').dependencies.angular;
  },
  template: `
    <h1>
      {{$ctrl.message}}
      <img src="https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg" height="30">
    </h1>
    <p>
      AngularJS Version: {{$ctrl.version}}
    </p>
  `
});

// Note: You can also wrap a controller or a directive 
// in a Custom Element!

export class MfeAngularJs extends HTMLElement {
  connectedCallback() {
    const root = document.createElement('hello-component');
    this.appendChild(root);
    angular.bootstrap(root, ['app']);
  }
}

customElements.define('angularjs-element', MfeAngularJs);