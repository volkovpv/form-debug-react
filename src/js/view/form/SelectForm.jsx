/**
 * Created by https://github.com/volkovpv on 07.2015.
 */

var SelectForm = React.createClass({
    render: function(){
        return(
            <section key={this.props.data.FIELD_NUMBER}>
                <label htmlFor={this.props.data.FIELD_NUMBER}>{this.props.data.FIELD_NAME}</label>
                <select>
                    {this.props.data.OPTION.map(function(data){
                        return(
                            <option value={data.ID}>{data.SEX}</option>
                        )
                    })}
                </select>
            </section>
        )
    }
});

module.exports = SelectForm;