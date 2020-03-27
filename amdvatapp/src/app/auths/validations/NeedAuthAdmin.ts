import {CanActivate, Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {SessionService} from '../../services/session/session.service';

@Injectable()
export class NeedAuthAdmin implements CanActivate{
    constructor(
        private sessionService: SessionService,
        private router: Router
    ) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const redirectUrl = route.url;

        if (this.sessionService.isLogged()) {
            return true;
        }

        this.router.navigateByUrl(
            this.router.createUrlTree(
                ['/needAuthAdmin'], {
                    queryParams: {
                        redirectUrl
                    }
                }
            )
        );

        return false;
    }

}
