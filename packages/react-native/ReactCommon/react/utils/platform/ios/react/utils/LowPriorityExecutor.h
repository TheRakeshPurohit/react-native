/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#pragma once

#include <functional>

namespace facebook::react::LowPriorityExecutor {

void execute(std::function<void()>&& workItem);

} // namespace facebook::react::LowPriorityExecutor
