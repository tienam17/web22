import PropTypes from 'prop-types';
import React from 'react';
import Select from 'react-select';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import {PHOTO_CATELOGY_OPTIONS} from '../../../../contants/global';
import Images from "../../../../compoment/images";

PhotoForm.PropTypes ={
    onSubmit:PropTypes.func,
};

PhotoForm.defaultProps ={
    onSubmit:null,
}

function PhotoForm (props) {
    return (
        <Form>
            <PormGroup>
                <Label for="titleId">Title</Label>
                <Input name ="title" id="titleId" placeholder =" Eg:Wow nature ..."/>
            </PormGroup>

            <PormGroup>
                <Label for="categoryId"> Category </Label>
                <Select
                id="catagoryId"
                name="catagoryId"

                plaaceholder="What's your photo catagory?"
                option={PHOTO_CATELOGY_OPTIONS}
                />
            </PormGroup>

            <FormGroup>
                <Label for ="categoryId">Photo</Label>
                <div><Button type="button" outline color="primary">Radom a photo </Button></div>
                <div>
                    <img width="200px" height="200px" src={Images.COLORFUL_BG} alt="colorfu" ></img>
                </div>
            </FormGroup>

            <PhotoForm>
                <Button color="primary"> Add to album </Button>
            </PhotoForm>
        </Form>
    );

}

export default PhotoForm;