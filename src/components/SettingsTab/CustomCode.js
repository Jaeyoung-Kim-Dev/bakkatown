import React from 'react';


const CustomCode = (props) => {
    const code = props.code;
    return (
        <div className="inner-promo-inputs custom-code-item">
            <div>{code.description}</div>
            <div>{code.code}</div>
            <div>{code.amount}</div>
            <label className="w-checkbox checkbox-field-3">
                <input type="checkbox" className="w-checkbox-input" name={code.description} defaultChecked={code.enabled} id={code.code}
                       disabled={false} onClick={event => props.enable(event)}/>
                <span className="checkbox-label-4 w-form-label">Enabled</span>
            </label>
            <label className="w-checkbox">
                <input type="checkbox" name={code.description} className="w-checkbox-input" defaultChecked={false} id={code.code}
                       disabled={false} onClick={event => props.remove(event, code)}/>
                <span className="checkbox-label-5 w-form-label">Delete</span>
            </label>
        </div>
    )


}

export default CustomCode;