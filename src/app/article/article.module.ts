import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleService } from '../shared/services/article.service';
import { EffectsModule } from '@ngrx/effects';
import { GetArticleEffect } from './store/effects/getArticle.effect';
import { ArticleComponent } from './components/article/article.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { LoadingModule } from '../shared/modules/loading/loading.module';
import { ErrorMessageModule } from '../shared/modules/errorMessage/error-message.module';
import { TagListModule } from '../shared/modules/tagList/tag-list.module';

const routes = [
  {
    path: 'articles/:slug',
    component: ArticleComponent,
  },
];

@NgModule({
  declarations: [ArticleComponent],
  providers: [ArticleService],
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetArticleEffect]),
    RouterModule.forChild(routes),
    StoreModule.forFeature('article', reducers),
    LoadingModule,
    ErrorMessageModule,
    TagListModule,
  ],
})
export class ArticleModule {}
