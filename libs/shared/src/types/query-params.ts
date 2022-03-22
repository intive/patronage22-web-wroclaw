export interface BaseQueryParams {
  lang?: string;
}

export interface PaginationQueryParams extends BaseQueryParams {
  page?: string;
  size?: string;
}
