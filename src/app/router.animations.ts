import {trigger, animate, style, group, query, transition, animateChild} from '@angular/animations';
 export const slideInAnimation = trigger('routeAnimations', [
  transition('* => RecipesPage', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' })
      , { optional: true }),
    group([
      query(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(0%)', opacity: 1 }))
      ], { optional: true }),
      query(':leave', [
        style({ transform: 'translateX(0%)', opacity: 1 }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(100%)', opacity: 0 }))
      ], { optional: true }),
    ])
  ]),
  transition('* => ShoppingListPage', [
    group([
      query(':enter, :leave', style({ position: 'fixed', width: '100%' })
      , { optional: true }),
      query(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(0%)', opacity: 1 }))
      ], { optional: true }),
      query(':leave', [
        style({ transform: 'translateX(0%)', opacity: 1 }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)', opacity: 0 }))
      ], { optional: true }),
    ])
  ])
]);
