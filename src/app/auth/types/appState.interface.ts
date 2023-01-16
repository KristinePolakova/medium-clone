import { ArticleStateInterface } from 'src/app/article/types/articleState.interface';
import { CreateArticleStateInterface } from 'src/app/createArticle/types/createArticleState.interface';
import { FeedStateInterface } from 'src/app/shared/modules/feed/types/feedState.interface';
import { PopularTagsStateInterface } from 'src/app/shared/modules/popular-tags/types/popularTagsState.interface';
import { AuthStateInterface } from './authState.interface';

export interface AppStateInterface {
  auth: AuthStateInterface;
  feed: FeedStateInterface;
  popularTags: PopularTagsStateInterface;
  article: ArticleStateInterface;
  createArticle: CreateArticleStateInterface;
}
