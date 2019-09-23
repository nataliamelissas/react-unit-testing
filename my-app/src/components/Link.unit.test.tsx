import React from 'react'
import { shallow } from 'enzyme';
import Link from './Link';

describe('Link', () => {
    test('Renders link to Google', () => {
        const link = shallow(<Link href="http://www.google.com">Link to Google</Link>);
        expect(link).toMatchSnapshot();
    });
    test('Renders link to Google with classname', () => {
        const link = shallow(<Link href="http://www.google.com" className="link-class">Link to Google</Link>);
        expect(link).toMatchSnapshot();
    })
});