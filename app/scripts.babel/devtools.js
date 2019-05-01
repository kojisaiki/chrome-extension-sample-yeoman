'use strict';

chrome.devtools.panels.create(
    'My Panel',
    '',
    'panel.html',
    (panel) => { }
);