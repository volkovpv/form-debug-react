/**
 * Created by https://github.com/volkovpv on 07.2015.
 */

var Header          = require('./Header'),
    fieldConstants  = require('../constants/fieldConstants'),
    Form            = require('./form/Form');

var Wrap = React.createClass({
    getInitialState: function(){
        return{
            textFill: "Заполните: ",
            fieldConstants: fieldConstants
        }
    },

    render: function(){
        return(
            <div id="wrap">
                <Header/>
                <div className="content">
                    <div className="fill">
                        <span>{this.state.textFill}</span>
                        {this.state.fieldConstants.map(function(data){
                            return(
                                <span className="fill-name" key={data.FIELD_NUMBER}>{data.FIELD_NAME}</span>
                            )
                        })}
                    </div>
                    <div className="form-and-list">
                        <Form/>
                    </div>


                </div>
            </div>
        )
    }
});

module.exports = Wrap;