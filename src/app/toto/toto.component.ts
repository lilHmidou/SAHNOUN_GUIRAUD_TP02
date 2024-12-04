import {Component, OnInit} from '@angular/core';
import {CurrencyPipe, LowerCasePipe, NgClass, PercentPipe, UpperCasePipe} from "@angular/common";
import EventEmitter from "node:events";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {ExponentialStrenghtPipe} from "../pipes/exponential-strenght.pipe";
import {ServiceCoursService} from "../service/service-cours.service";

@Component({
    selector: 'app-toto',
    standalone: true,
    templateUrl: './toto.component.html',
    imports: [
        NgClass,
        RouterLink,
        RouterLinkActive,
        UpperCasePipe,
        LowerCasePipe,
        CurrencyPipe,
        PercentPipe,
        ExponentialStrenghtPipe
    ],
    styleUrl: './toto.component.scss'
})
export class TotoComponent implements OnInit{

    public valeurService:string = '';

    // @Output() colorChange = new EventEmitter();

    constructor(private service: ServiceCoursService) {
    }

    ngOnInit() {
        this.valeurService = this.service.variableDuService;
    }

    // public changeColor() {
    //     this.colorChange.emit('blue');
    // }
    //
    // public changeColorRed() {
    //     this.colorChange.emit('red');
    // }
}
