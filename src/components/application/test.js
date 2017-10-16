import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import PropTypes from 'prop-types';

import Field from "./field"

export default class UploadForm extends Component {
    constructor(props) {
        super(props);
        this.state = { valid: false, isUploading: false };
        this.onFileChange = this.onFileChange.bind(this);
        this.submit = this.submit.bind(this);
        this.fieldOnChange = this.fieldOnChange.bind(this);
    }
    onFileChange(e) {
        if (e.target.files[0]) {
            const file = e.target.files[0];
            const name = e.target.name;
            this.setState({valid: true, isUploading: true });
            // send the file to the application controller with the name to upload the file

        } else {
            this.setState( {valid: false, isUploadedPhoto: false } )
        }

        // console.log(e.target.files);
        // upload file function from application component
        // onChange = uploadFile(fieldName, and file: formData)


        // on change check name and file of target if equal to photo
        // then update state isUploadingPhoto to true
        // then upload the file to AWS s3 with a function from application controller
        //from the application component set a props of photoURL to the form component

        // on the render method set a function that checks if the photoURL is set
        // then render the photo. if not, render the original input field
    }

    fieldOnChange(name, file) {
        console.log(name, file)
        // this.props.onChange(name, file);
    }

    submit(e) {
        e.preventDefault();
        // const myFile = findDOMNode(this.refs.insurance).files[0];
        var formData = new FormData();
        Object.keys(this.refs).forEach((key) => {
            formData.append(key, findDOMNode(this.refs[key]).files[0]);
            // console.log(key, "", data[key])
        });

        this.props.handleSubmit(formData)
    }

    render() {
        return (
            <form className='add-product' onSubmit={this.submit}>

                {/*<Field*/}
                {/*title={"Photo"}*/}
                {/*subtitle={"Upload your personal photo"}*/}
                {/*onChange={this.props.handleSubmit(this.fieldOnChange)}*/}
                {/*fieldName="photo"*/}
                {/*data={""}/>*/}
                {/* Photo */}
                <div className="white-block kamel-form">
                    <div className="row">
                        <div className="col-xs-3"><img alt="personal" src={require("../../utils/images/user.png")} width="60px;"/></div>
                        <div className="col-xs-9">
                            <p><strong>Photo</strong></p>
                            <p className="btmmargin">Upload your personal photo</p>
                            <div>
                                <input
                                    name="photo"
                                    type='file'
                                    ref='photo'
                                    onChange={this.onFileChange} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* ID */}
                <div className="white-block kamel-form">
                    <div className="row">
                        <div className="col-xs-3"><i className="fa fa-id-card"></i></div>
                        <div className="col-xs-9">
                            <p><strong>ID</strong></p>
                            <p className="btmmargin">Upload your ID</p>
                            <div>
                                <input
                                    name="photo"
                                    type='file'
                                    ref='photo'
                                    onChange={this.onFileChange} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* license */}
                <div className="white-block kamel-form">
                    <div className="row">
                        <div className="col-xs-3"><i className="fa fa-id-card"></i></div>
                        <div className="col-xs-9">
                            <p><strong>Driver License</strong></p>
                            <p className="btmmargin">Upload your driver license</p>
                            <div>
                                <input
                                    name="photo"
                                    type='file'
                                    ref='photo'
                                    onChange={this.onFileChange} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* permit */}
                <div className="white-block kamel-form">
                    <div className="row">
                        <div className="col-xs-3"><i className="fa fa-id-card"></i></div>
                        <div className="col-xs-9">
                            <p><strong>Driver Permit</strong></p>
                            <p className="btmmargin">Upload your driver permit</p>
                            <div>
                                <input
                                    type='file'
                                    ref='permit'
                                    onChange={this.onFileChange} />
                            </div>
                        </div>
                    </div>
                </div>


                <button
                    type='submit'
                    disabled={!this.state.valid}
                    className='btn btn-success' >
                    Upload
                </button>
            </form>
        );
    }
}

UploadForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired
}