/**
 * Created by https://github.com/volkovpv on 07.2015.
 */

var Footer  = require('./Footer'),
    Wrap    = require('./Wrap');

var Select = require('react-select');

var Index = React.createClass({
    _logChange: function(val){
        alert("Selected: " + val)
    },

    render: function(){
        var options = [
            { value: 'one', label: 'One' },
            { value: 'two', label: 'Two' }
        ];

        return(
            <div id="main">
                <Wrap/>

                <Select
                    name="form-field-name"
                    value="one"
                    options={options}
                    onChange={this._logChange}
                    />

                <Footer/>

            </div>
        )
    }
});

module.exports = Index;