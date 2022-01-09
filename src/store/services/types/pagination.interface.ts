export interface PageInfo {
  endCursor: string;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string;
  totalCount: number;
}

export interface PaginationArgs {
  first?: number;
  after?: string;
  last?: number;
  before?: string;
}

export interface Paginated<Model> {
  edges: ModelEdge<Model>[];
  pageInfo: PageInfo;
}

export interface ModelEdge<Model> {
  cursor: string;
  node: Model;
}
