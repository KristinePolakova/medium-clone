import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers/reducers';
import { EffectsModule } from '@ngrx/effects';
import { GetPopularTagsEffect } from './store/effects/getPopularTags.effect';
import { PopularTagsComponent } from './components/popular-tags/popular-tags.component';
import { LoadingModule } from '../loading/loading.module';
import { ErrorMessageModule } from '../errorMessage/error-message.module';
import { RouterModule } from '@angular/router';
import { PopularTagsService } from './services/popular-tags.service';

@NgModule({
  declarations: [PopularTagsComponent],
  exports: [PopularTagsComponent],
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetPopularTagsEffect]),
    StoreModule.forFeature('popularTags', reducers),
    LoadingModule,
    ErrorMessageModule,
    RouterModule,
  ],
  providers: [PopularTagsService],
})
export class PopularTagsModule {}
