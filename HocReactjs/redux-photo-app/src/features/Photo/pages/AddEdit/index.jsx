import React from "react";
import Banner from '../../../../compoments/Banner';
import PhotoForm from '../../../../compoments/PhotoForm';
import './style.scss';

AddEditPage.protoType = {};

function AddEditPage(props) {
    return (
        <div className="photo-edit">
            <Banner title="Pink you amazing photo"/>

            <div className="photo-edit_form">
                <PhotoForm onSubmit={values =>console.log('Form submit: ',values)} />
            </div>
        </div>
    );
}

export default AddEditPage;