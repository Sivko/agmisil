export interface IRootPage {
  data: Datum[];
  meta: Meta;
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface Datum {
  id: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  shortname: string;
  slug: string;
  documentId: string;
  metaData: MetaData;
  sections: Section[];
}

export interface Section {
  __component: string;
  id: number;
  header?: string;
  description?: string;
  media?: Media[];
  buttons?: Button[];
  cards?: Card[];
}

export interface Card {
  id: number;
  header: string;
  description: string;
  style?: string;
  media: Media2[];
  buttons?: Button[];
}

export interface Media2 {
  id: number;
  name: string;
  alternativeText?: string;
  caption?: string;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: string;
  provider: string;
  provider_metadata?: string;
  createdAt: string;
  updatedAt: string;
  documentId: string;
  publishedAt: string;
}

export interface Formats {
  small: Small;
  thumbnail: Small;
  medium?: Small;
  large?: Small;
}

export interface Small {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: string;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
}

export interface Button {
  id: number;
  url?: string;
  newTab?: string;
  text: string;
  type: string;
  goal?: string;
  modal?: string;
  icon: Icon;
}

export interface Icon {
  id: number;
  name: string;
  alternativeText?: string;
  caption?: string;
  width: number;
  height: number;
  formats?: string;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: string;
  provider: string;
  provider_metadata?: string;
  createdAt: string;
  updatedAt: string;
  documentId: string;
  publishedAt: string;
}

export interface Media {
  id: number;
  name: string;
  alternativeText?: string;
  caption?: string;
  width: number;
  height: number;
  formats?: string;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: string;
  provider: string;
  provider_metadata?: string;
  createdAt: string;
  updatedAt: string;
  documentId: string;
  publishedAt: string;
  related: Related[];
}

export interface Related {
  __type: string;
  id: number;
  header?: string;
  description: string;
}

export interface MetaData {
  id: number;
  metaTitle: string;
  metaDescription: string;
  datePublication?: string;
  dateUpdate?: string;
  preview_url?: string;
  view?: string;
  isPage?: string;
  preview?: string;
}