export interface BaseQueryParams {
  lang?: string;
  search?: string;
}

export interface PaginationQueryParams extends BaseQueryParams {
  page?: string;
  size?: string;
}
