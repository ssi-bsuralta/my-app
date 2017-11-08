import { Component, HostBinding } from '@angular/core';
import { slideInDownAnimation } from '../../shared/animations';

@Component({
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.scss'],
    animations: [slideInDownAnimation]
})
export class CreateComponent {
    @HostBinding('@routeAnimation') routeAnimation = true;
    @HostBinding('style.display') display = 'block';
}
