import {
    animate,
    AnimationEntryMetadata,
    style,
    transition,
    trigger
} from '@angular/core';

export const slideInDownAnimation: AnimationEntryMetadata =
    trigger('routeAnimation', [
        transition(':enter', [
            style({
                transform: 'translateX(-100%)'
            }),
            animate('0.3s ease-in')
        ]),
        transition(':leave', [
            animate('0.4s ease-out', style({
                transform: 'translateX(100%)'
            }))
        ])
    ]);
