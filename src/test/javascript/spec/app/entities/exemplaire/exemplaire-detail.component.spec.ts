import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { JhdemoTestModule } from '../../../test.module';
import { ExemplaireDetailComponent } from 'app/entities/exemplaire/exemplaire-detail.component';
import { Exemplaire } from 'app/shared/model/exemplaire.model';

describe('Component Tests', () => {
  describe('Exemplaire Management Detail Component', () => {
    let comp: ExemplaireDetailComponent;
    let fixture: ComponentFixture<ExemplaireDetailComponent>;
    const route = ({ data: of({ exemplaire: new Exemplaire(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [JhdemoTestModule],
        declarations: [ExemplaireDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(ExemplaireDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(ExemplaireDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load exemplaire on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.exemplaire).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
