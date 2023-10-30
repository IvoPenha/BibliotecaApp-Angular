import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmprestimoModalComponent } from './emprestimo-modal.component';

describe('EmprestimoModalComponent', () => {
  let component: EmprestimoModalComponent;
  let fixture: ComponentFixture<EmprestimoModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmprestimoModalComponent]
    });
    fixture = TestBed.createComponent(EmprestimoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
