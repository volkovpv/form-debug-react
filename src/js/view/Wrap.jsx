/**
 * Created by https://github.com/volkovpv on 07.2015.
 */

var Header          = require('./Header'),
    fieldConstants  = require('../../constants/fieldConstants');

var Wrap = React.createClass({
    getInitialState: function(){
        return{
            textFill: "Заполнить: ",
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
                                <span>{data.fieldName} </span>
                            )
                        })}
                    </div>


                </div>
            </div>
        )
    }
});

module.exports = Wrap;