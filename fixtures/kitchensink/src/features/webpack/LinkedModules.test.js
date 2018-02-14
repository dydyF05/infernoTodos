/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

import Inferno from 'inferno'; // eslint-disable-line
import InfernoDOM from 'inferno-dom';
import { test, version } from 'test-integrity';
import LinkedModules from './LinkedModules';

describe('linked modules', () => {
    it('has integrity', () => {
        expect(test()); // eslint-disable-line
        expect(version()).toEqual('2.0.0');
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        InfernoDOM.render(<LinkedModules />, div);
    });
});
