/**
 * Created by https://github.com/volkovpv on 07.2015.
 */

var fieldConstants  = require('../../constants/fieldConstants'),
    InputForm       = require('./InputForm'),
    SelectForm      = require('./SelectForm');

var Form = React.createClass({
    getInitialState: function(){
        return{
            section: fieldConstants
        }
    },

    componentDidMount: function(){
        //this.state.section = fieldConstants;
    },

    render: function(){
        return(
            <div className="form-content">
                {this.state.section.map(function(data){
                    var renderComponent  = null;

                    if(data.TYPE === "select") {
                        renderComponent = <SelectForm data={data}/>;
                    } else {
                        renderComponent = <InputForm data={data}/>;
                    }

                    return renderComponent;
                })}
            </div>
        )
    }
});

module.exports = Form;