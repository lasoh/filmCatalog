import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { BadgeFilterComponent } from './badge-filter/badge-filter.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const sharedComponents = [PageNotFoundComponent, BadgeFilterComponent];

@NgModule({
  imports: [CommonModule],
  exports: [...sharedComponents],
  declarations: [...sharedComponents],
  providers: [],
})
export class ComponentsModule {}
