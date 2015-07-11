/**
 * Created by https://github.com/volkovpv on 07.2015.
 */

var Footer  = require('./Footer'),
    Wrap    = require('./Wrap');

var Index = React.createClass({
    render: function(){
        return(
            <div id="main">
                <Wrap/>
                <Footer/>
            </div>
        )
    }
});

module.exports = Index;