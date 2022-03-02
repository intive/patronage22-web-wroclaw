export interface SearchItemId<T> {
  id: T;
}

export interface PresentationSearchItem extends SearchItemId<string> {
  title: string;
}
