import React from 'react';
import ReactDOM from 'react-dom';
import ScreensAbout from './About';

it('AboutPage renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ScreensAbout />, div);
    ReactDOM.unmountComponentAtNode(div);
});