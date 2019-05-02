'use strict';

chrome.devtools.panels.create(
    'My Panel',
    '',
    'panel.html',
    (panel) => { }
);

var page_getProperties = function() {
    var data = window.jQuery && $0 ? jQuery.data($0) : {};
    // Make a shallow copy with a null prototype, so that sidebar does not
    // expose prototype.
    var props = Object.getOwnPropertyNames(data);
    var copy = { __proto__: null };
    for (var i = 0; i < props.length; ++i)
      copy[props[i]] = data[props[i]];
    return copy;
  }

chrome.devtools.panels.elements.createSidebarPane(
    'My Sidebar Pane',
    function(sidebar) {
        sidebar.setPage('sidebarpane.html');
    }
);

chrome.devtools.panels.sources.createSidebarPane(
    'My Sidebar Pane2',
    function(sidebar) {
        sidebar.setPage('sidebarpane.html');
    }
);
