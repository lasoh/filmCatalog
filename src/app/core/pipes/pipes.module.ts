import { NgModule } from '@angular/core';
import { TruncatePipe } from './truncate.pipe';

const sharedPipes = [TruncatePipe];

@NgModule({
  imports: [],
  exports: [...sharedPipes],
  declarations: [...sharedPipes],
  providers: [],
})
export class PipesModule {}
