export interface IRootGlobal {
  data: Data;
}

export interface Data {
  id: number;
  scripts: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  videoBg?: string;
  cssBg?: string;
  documentId: string;
  navbar: Navbar;
  logo: Logo[];
  favicon: Favicon;
  copyright: Copyright;
}

export interface Copyright {
  id: number;
  copyText: string;
  trademark: string;
  confPolicy?: string;
  userAgree?: string;
  dividerImage: LogoSign;
}

export interface Favicon {
  id: number;
  name: string;
  alternativeText?: string;
  caption?: string;
  width?: string;
  height?: string;
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

export interface Logo {
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
  scripts: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  videoBg?: string;
  cssBg?: string;
  documentId: string;
}

export interface Navbar {
  id: number;
  item1: Item1;
  item2: Item1;
  item3?: Item1;
  moreItems: string[];
  logoSign: LogoSign;
  moreIcon?: string;
}

export interface LogoSign {
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

export interface Item1 {
  id: number;
  url?: string;
  newTab?: string;
  text: string;
  type: string;
  goal?: string;
  modal?: string;
}