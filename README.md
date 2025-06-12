# Angular

- Install angular cli globall `npm install -g @angular/cli` if you want to specify any version use `npm install -g @angular/cli@14.1.0`
- To create a project `ng new sample-project`


## Structural Directives

- These directives change the structure of the DOM, so they are called strucutral directives e.g. `*ngIf`, `*ngFor`
- You can not use two strucutral directives on a same HTML element like `<div *ngFor * ngIf />` this can't be done

## Conditional Rendering

- There are two approaches for this. First one is two separate `*ngIf` blocks with opposite conditions
- Second one is using `<ng-template>`. You define the templates and use them in `*ngIf="items.length === 0 then noShow else showRows`

## Property Binding

- It is denoted with `[]`
- It is a way to bind the values from your component to the properties of HTML elements e.g. `<img [src]="imageUrl" />`
- This is one way binding

## Event Binding

- It is denoted with `()`
- Event binding lets you listen for user actions (like clicks, key presses, form submissions) and call a method in your component when those events happen.
- E.g. `<button (click)="increment()">Click Me</button>`. If you want to pass the actual event object use $event `<input (input)="onInputChange($event)">`

