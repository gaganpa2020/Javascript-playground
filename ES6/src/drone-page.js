import {Page} from './framework/page.js';
import {DataTable} from './ui/data-table.js';
import {application} from './app.js';

export class DronePage extends Page {
    
    constructor() {
        super('Drone');
    }
    
    createElement() {
        super.createElement();
        
        let headers = 'License Model airTimeHours Base'.split(' ');
        let t = new DataTable(headers, application.dataService.drone);
        t.appendToElement(this.element);

    }
    
    getElementString() {
        return '<div style="margin: 20px;"><h3>Drone</h3></div>';
    }
}