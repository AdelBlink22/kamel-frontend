/**
 * Created by tawashy on 10/30/17.
 */

import React from 'react';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>

        <div>
            <input className="form-control" {...input} placeholder={label} type={type} />
            {touched && error && <span>{error}</span>}
        </div>
        <br/>
    </div>
);

export default renderField;