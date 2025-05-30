/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

import type {RootTag} from '../Types/RootTagTypes';
import type {ResolvedAssetSource} from './AssetSourceResolver';
import type {ImageProps as ImagePropsType} from './ImageProps';
import type {ImageSource} from './ImageSource';
import typeof ImageViewNativeComponent from './ImageViewNativeComponent';
import typeof TextInlineImageNativeComponent from './TextInlineImageNativeComponent';

import * as React from 'react';

export type ImageSize = {
  width: number,
  height: number,
};

export type ImageResolvedAssetSource = ResolvedAssetSource;

type ImageComponentStaticsIOS = $ReadOnly<{
  getSize(uri: string): Promise<ImageSize>,
  getSize(
    uri: string,
    success: (width: number, height: number) => void,
    failure?: (error: mixed) => void,
  ): void,

  getSizeWithHeaders(
    uri: string,
    headers: {[string]: string, ...},
  ): Promise<ImageSize>,
  getSizeWithHeaders(
    uri: string,
    headers: {[string]: string, ...},
    success: (width: number, height: number) => void,
    failure?: (error: mixed) => void,
  ): void,

  prefetch(url: string): Promise<boolean>,

  prefetchWithMetadata(
    url: string,
    queryRootName: string,
    rootTag?: ?RootTag,
  ): Promise<boolean>,

  queryCache(
    urls: Array<string>,
  ): Promise<{[url: string]: 'memory' | 'disk' | 'disk/memory', ...}>,

  /**
   * @see https://reactnative.dev/docs/image#resolveassetsource
   */
  resolveAssetSource(source: ImageSource): ?ImageResolvedAssetSource,
}>;

type ImageComponentStaticsAndroid = $ReadOnly<{
  ...ImageComponentStaticsIOS,
  abortPrefetch(requestId: number): void,
}>;

export type AbstractImageAndroid = component(
  ref?: React.RefSetter<
    | React.ElementRef<TextInlineImageNativeComponent>
    | React.ElementRef<ImageViewNativeComponent>,
  >,
  ...props: ImagePropsType
);

export type ImageAndroid = AbstractImageAndroid & ImageComponentStaticsAndroid;

export type AbstractImageIOS = component(
  ref?: React.RefSetter<React.ElementRef<ImageViewNativeComponent>>,
  ...props: ImagePropsType
);

export type ImageIOS = AbstractImageIOS & ImageComponentStaticsIOS;

export type ImageType = ImageIOS | ImageAndroid;

export type {ImageProps} from './ImageProps';
