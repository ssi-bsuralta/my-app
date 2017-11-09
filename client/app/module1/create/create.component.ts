import { Component, HostBinding, OnInit } from '@angular/core';
import { slideInDownAnimation } from '../../shared/animations';

declare const $;

@Component({
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.scss'],
    animations: [slideInDownAnimation]
})
export class CreateComponent implements OnInit {
    @HostBinding('@routeAnimation') routeAnimation = true;
    @HostBinding('style.display') display = 'block';

    ngOnInit() {
        $('#sortable').sortable();
        $('#sortable').disableSelection();
    }
}
