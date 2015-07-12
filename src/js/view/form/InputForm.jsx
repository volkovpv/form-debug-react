/**
 * Created by https://github.com/volkovpv on 07.2015.
 */

var InputForm = React.createClass({
    render: function(){
        return(
            <section key={this.props.data.FIELD_NUMBER}>
                <label htmlFor={this.props.data.FIELD_NUMBER}>{this.props.data.FIELD_NAME}</label>
                <input id={this.props.data.FIELD_NUMBER} type="text"/>
            </section>
        )
    }
});

module.exports = InputForm;