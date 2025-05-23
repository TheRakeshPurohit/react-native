/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

package com.facebook.react.bridge

/**
 * ViewCommands can throw this Exception. If this is caught during the execution of a ViewCommand
 * mounting instruction, it indicates that the mount item can be safely retried.
 */
internal class RetryableMountingLayerException : RuntimeException {

  constructor(msg: String) : super(msg)

  constructor(e: Throwable) : super(e)

  constructor(msg: String, e: Throwable?) : super(msg, e)
}
