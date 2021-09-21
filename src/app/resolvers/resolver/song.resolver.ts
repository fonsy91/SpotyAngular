
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve} from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ServiceService  } from 'src/app/resolvers/Servicios/service.service';
import { delay } from 'underscore';

@Injectable({
    providedIn: 'root'
})

export class SongResolver implements Resolve<Observable<any>>{

    constructor(private _api: ServiceService){}

    resolve(route: ActivatedRouteSnapshot){
        return this._api.getSong(route.paramMap.get('id'));
    }
}


