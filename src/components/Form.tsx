import * as React from 'react';

export const Form = () => {
    return (
        <div>
            <button type="button" /*id="add"*/ onClick={AddForm} className="button"><i className="fa fa-plus-square"></i></button>
            <select id="sortList" >            
                <option /*selected="selected" disabled="disabled"*/>---Sort---</option>
                <option value="complete">Complete</option>
                <option value="incomplete">Incompete</option>
                <option value="default">Default</option>
            </select>
        </div>
    );
};

export const AddForm = () => {
    console.log("here");
    
    // this.setState({
    //     visibility: 'visible'
    // });
    return (
        <div id="addItem">
            <form className="form-inline" id="forms">
                <input type="text" id="item" placeholder="Enter your text here" className="form-control text"/>
                <button type="button" className="button"><i className="fa fa-arrow-right"></i></button>
            </form>
        </div>
    );
};