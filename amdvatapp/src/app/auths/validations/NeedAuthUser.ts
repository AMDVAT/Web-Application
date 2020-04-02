import {CanActivate, Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {SessionService} from '../../services/session/session.service';

@Injectable()
export class NeedAuthUser implements CanActivate {
    constructor(
        private sessionService: SessionService,
        private router: Router
    ) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const redirectUrl = route.url;
        this.sessionService.getUserToken((user) => {
            if (user === undefined) {
                this.router.navigateByUrl(
                    this.router.createUrlTree(
                        ['/needAuthUser'], {
                            queryParams: {
                                redirectUrl
                            }
                        }
                    )
                );
            }
        });
        return true;
    }

}
