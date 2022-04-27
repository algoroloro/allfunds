import { NgModule } from '@angular/core';
import { LayoutModule } from './layout/layout.module';
import { CoreService } from './services/core.service';

@NgModule({
  imports: [LayoutModule],
  exports: [LayoutModule],
  providers: [CoreService]
})
export class CoreModule { }
