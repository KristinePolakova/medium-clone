import { createSelector } from '@ngrx/store';
import { AppStateInterface } from 'src/app/auth/types/appState.interface';
import { EditArticleStateInterface } from '../types/editArticleState.interface';

export const editArticleFeatureSelector = (
  state: AppStateInterface
): EditArticleStateInterface => state.editArticle;

export const articleSelector = createSelector(
  editArticleFeatureSelector,
  (editArticleState: EditArticleStateInterface) => editArticleState.article
);

export const isLoadingSelector = createSelector(
  editArticleFeatureSelector,
  (editArticleState: EditArticleStateInterface) => editArticleState.isLoading
);

export const isSubmittingSelector = createSelector(
  editArticleFeatureSelector,
  (editArticleState: EditArticleStateInterface) => editArticleState.isSubmitting
);

export const validationErrorsSelector = createSelector(
  editArticleFeatureSelector,
  (editArticleState: EditArticleStateInterface) =>
    editArticleState.validationErrors
);
