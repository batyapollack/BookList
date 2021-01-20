import React from 'react';

const TableField = ({fieldName,settingsField,removeBook, editBook})=>{

return(
    <div className="tableField">
    {fieldName}
    {
        settingsField &&
    <>
    <i className="far fa-edit" onClick={editBook}></i>
    <i className="far fa-trash-alt" onClick={removeBook}></i>
   </>
    }
    </div>
);
};

export default TableField;