import {TestBed} from '@angular/core/testing';

import {DemoService} from './demo.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';

describe('DemoService', () => {
    let demoService: DemoService;
    beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [HttpClientModule],
                providers: [DemoService]
            });

            demoService = TestBed.get(DemoService);
        }
    );

    it('Creacion de instancia de servicio', () => {
        expect(demoService).toBeTruthy();
    });

    it('Respuesta Valida', (done: DoneFn) => {
        demoService.getDemos()
            .subscribe(res => {
                expect(res.length).toEqual(4);
                done();
            });
    });

});
