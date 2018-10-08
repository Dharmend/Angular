import { TestBed, inject } from '@angular/core/testing';
import { TestHerosService } from './test-heros.service';
describe('TestHerosService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [TestHerosService]
        });
    });
    it('should be created', inject([TestHerosService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=test-heros.service.spec.js.map