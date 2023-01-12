import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YourFeedComponent } from './components/your-feed/your-feed.component';
import { PopularTagsModule } from '../shared/modules/popular-tags/popular-tags.module';
import { FeedModule } from '../shared/modules/feed/feed.module';
import { FeedTogglerModule } from '../shared/feedToggler/feed-toggler.module';
import { BannerModule } from '../shared/modules/banner/banner.module';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: 'feed',
    component: YourFeedComponent,
  },
];

@NgModule({
  declarations: [YourFeedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PopularTagsModule,
    FeedModule,
    FeedTogglerModule,
    BannerModule,
  ],
  exports: [YourFeedComponent],
})
export class YourFeedModule {}
