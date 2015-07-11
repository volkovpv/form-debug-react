/**
 * Created by https://github.com/volkovpv on 07.2015.
 */

window.React = require('react');

var Index = require('./view/Index');

React.render(
    React.createElement(Index),
    document.getElementById('mainReact')
);