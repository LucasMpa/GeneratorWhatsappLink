import React from 'react'
import InputMask from 'react-input-mask'

export default function InputPhoneMask(props) {
        
    return (
        <div>
            <InputMask type="tel" mask="(999) 9 9999-9999" maskChar={null}  placeholder="(999) 9 9999-9999" className="form-control"/>
        </div>
    )
}
