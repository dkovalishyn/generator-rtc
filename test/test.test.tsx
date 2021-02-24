import { shallow } from 'enzyme';
import React from 'react';

import { Test } from './test';

describe('Test', () => {
    it('should render test', () => {
        expect(shallow(Test).render()).toMatchInlineSnapshot();
    });
});
