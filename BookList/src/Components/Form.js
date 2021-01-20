import React from 'react';

const Form  = (props)=>{

const { title,
        setTitle,
        author,
        setAuthor,
        isbn,
        setIsbn,
        bookId,
        handleSubmit,
        cancelEdit, } = props;


return(
    <form onSubmit ={handleSubmit}>
    <label>Title</label>
    <input type = "text" required value={title} onChange={(e)=> setTitle(e.target.value)}/>
    <label>Auther</label>
    <input type = "text" required value={author} onChange={(e)=> setAuthor(e.target.value)}/>
    <label>ISBN#</label>
    <input type = "text" required value={isbn} onChange={(e)=> setIsbn(e.target.value)} />
    <button type="submit"> {bookId !== null? "Update" : "Add"} </button>
    {bookId !== null? <button onClick = {cancelEdit}>Cancel</button>: null}
    </form>
);
}

export default Form;