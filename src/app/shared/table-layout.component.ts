import { Component, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import {ColumnSetting} from './layout.model'
import {Params, Response} from '../data-model';
import 'rxjs/add/operator/switchMap';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
@Component({
    selector: 'ct-table',
    templateUrl: './table-layout.component.html',
    styleUrls: ['./table-layout.component.css']
 })

export class TableLayoutComponent implements OnChanges { 



    column: string = 'CategoryName';
    @Input() records: Params;
    @Input() caption: string;
    @Input() settings: ColumnSetting[];

    @Input() index: number;

    @Input() flag: boolean;
    @Output() trigger: EventEmitter<number> = new EventEmitter<number>();

    constructor(
        private route: ActivatedRoute,
        private router: Router
    ){}
    
    columnMaps: ColumnSetting[]; 
    selectedRow: number;

    ngOnChanges() {


        if (this.settings) { 
            this.columnMaps = this.settings;
        } else { // no settings, create column maps with defaults
            this.columnMaps = Object.keys(this.records[0])

                .map( key => {
                     return {
                         primaryKey: key,
                         header: key.slice(0, 1).toUpperCase() + 
                            key.replace(/_/g, ' ' ).slice(1),
                        format: 'default'
                }
            });
        }
    }



    sortCol(i: number){
        this.selectedRow = i;

        console.log(i);
        this.index = i;
          
          this.trigger.emit(this.index);
    }
    passIt(pid: number): void{

this.router.navigate(['/viewproduct', pid]);
        console.log(pid, "NOOOO");
    }



}