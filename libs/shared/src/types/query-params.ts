export interface BaseQueryParams {
  lang?: string;
}

export interface PaginationQueryParams extends BaseQueryParams {
  page?: string | number;
  size?: string | number;
}
