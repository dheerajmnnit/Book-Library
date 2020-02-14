import React from './../../../node_modules/react';
import { InputComponent } from './input.component';
import { TextareaComponent } from './textarea.component';
import { DatalistComponent } from './dataList.component';
import { labelText, fieldName } from '../../Constants/constant'
export const FormController = props => {
    return <form onSubmit={props.onSubmit}>
        <InputComponent onChange={props.onChange} labelText={labelText.Title} name={fieldName.Bookname} value={props.bookname}></InputComponent>
        <InputComponent onChange={props.onChange} labelText={labelText.Author} name={fieldName.Bookauthor} value={props.bookauthor}></InputComponent>
        <DatalistComponent bookcategory={props.bookcategory} labelText={labelText.Category} onChange={props.onChange} dropDownDataValue={props.dropDownDataValue}></DatalistComponent>
        <InputComponent onChange={props.onChange} labelText={labelText.ImageUrl} name={fieldName.Bookimage} value={props.bookimage}></InputComponent>
        <InputComponent onChange={props.onChange} labelText={labelText.Count} name={fieldName.Bookcount} value={props.bookcount}></InputComponent>
        <InputComponent onChange={props.onChange} labelText={labelText.Price} name={fieldName.Bookprice} value={props.bookprice}></InputComponent>
        <TextareaComponent onChange={props.onChange} labelText={labelText.Description} bookdescription={props.bookdescription}></TextareaComponent>
        <button className="buttonStyle" type="submit">Submit</button>
    </form>;
};