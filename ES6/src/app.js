import $ from 'jquery';
import {fleet} from './fleet-data.js';
import {FleetDataService} from './services/fleet-data-service.js';
import {ApplicationBase} from './framework/application-base.js';
import {HomePage} from './home-page.js';
import {CarsPage} from './cars-page.js';
import {DronePage} from './drone-page.js';
import {MapPage} from './map-page.js';

export class App extends ApplicationBase {
    
    constructor() {
        super('Fleet Manager');
        this.dataService = new FleetDataService();
        this.dataService.loadData(fleet);

        this.addRoute('Home', new HomePage(), true);
        this.addRoute('Cars', new CarsPage(), false);
        this.addRoute('Drone', new DronePage(), false);
        this.addRoute('Map', new MapPage(), false);
    }
}

export let application = new App();
application.show($('body'));
