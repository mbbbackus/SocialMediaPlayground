// Editable.js
import '../Post/Title/Title.css';
import React, { useState } from "react";

type EditableProps = {
    text: string;
    type: string;
    placeholder: string;
    children: any;
    editCallback: any;
}

// Component accept text, placeholder values and also pass what type of Input - input, textarea so that we can use it for styling accordingly
export const Editable = ({
  text,
  type,
  placeholder,
  children,
  editCallback,
  ...props
}: EditableProps) => {
    // Manage the state whether to show the label or the input box. By default, label will be shown.
    // Exercise: It can be made dynamic by accepting initial state as props outside the component 
    const [isEditing, setEditing] = useState(false);

    // Event handler while pressing any key while editing
    // const handleKeyDown = (event: any, type: any) => {
    //     editCallback(event.target.value)
    //     // Handle when key is pressed
    // };

    /*
    - It will display a label is `isEditing` is false
    - It will display the children (input or textarea) if `isEditing` is true
    - when input `onBlur`, we will set the default non edit mode
    Note: For simplicity purpose, I removed all the classnames, you can check the repo for CSS styles
    */
    const content = isEditing ?
        <div
            onBlur={() => {setEditing(false); console.log('what')}}
            // onKeyDown={e => handleKeyDown(e, type)}
        >
            {children}
        </div>
    :
        <div onClick={() => setEditing(true)}>
            <span className="post-title">
                {text || placeholder || "Editable content"}
            </span>
        </div>;
    
    return (
        <section {...props}>
            {content}
        </section>
    )
};

export default Editable;