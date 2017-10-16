import React from 'react';
import PropTypes from 'prop-types';

export default class Field extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isUploading: false };
        this.onFileChange = this.onFileChange.bind(this);

    }



    onFileChange(e) {
        if (e.target.files[0]) {
            const file = e.target.files[0];
            const name = e.target.name;
            this.setState({valid: false, isUploading: true});
            // send the file to the application controller with the name to upload the file
            // console.log(e.target.name);
            this.props.onChange(name, file);

        } else {
            this.setState({valid: false, isUploadedPhoto: false})
        }
    }


    renderField() {
        if (this.props.data){
            return(<img src={this.getData} />);
        } else {
            if (this.state.isUploading) {
                return(<h3> is uploading... </h3>)
            } else {
                return(<input name={this.props.fieldName} type='file' ref={this.props.data} onChange={this.onFileChange} />);
            }
        }

    }
    render() {
        return (
            <div className="white-block kamel-form">
                <div className="row">
                    <div className="col-xs-3"><img alt="personal" src={require("../../utils/images/user.png")} width="60px;"/></div>
                    <div className="col-xs-9">
                        <p><strong> {this.props.title} </strong></p>
                        <p className="btmmargin">{this.props.subtitle}</p>
                        <div>
                            {this.renderField()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

Field.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    fieldName: PropTypes.string.isRequired,
    data: PropTypes.string.isRequired,
};