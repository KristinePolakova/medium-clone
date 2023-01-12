import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagFeedComponent } from './components/tag-feed/tag-feed.component';
import { PopularTagsModule } from '../shared/modules/popular-tags/popular-tags.module';
import { FeedModule } from '../shared/modules/feed/feed.module';
import { FeedTogglerModule } from '../shared/feedToggler/feed-toggler.module';
import { BannerModule } from '../shared/modules/banner/banner.module';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: 'tags/:slug',
    component: TagFeedComponent,
  },
];

@NgModule({
  declarations: [TagFeedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PopularTagsModule,
    FeedModule,
    FeedTogglerModule,
    BannerModule,
  ],
})
export class TagFeedModule {}
