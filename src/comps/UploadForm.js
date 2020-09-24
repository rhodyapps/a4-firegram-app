import React, { useState} from 'react';

const UploadForm = () => {
    const [file, setFile] = useState(null);

    const types =['image/png', 'image/jpeg'];

const changeHandler = (e) => {
   // show that the form is working console.log("changed"); then remove this line and add the following
   let selected = e.target.files[0];
   if (selected && types.includes(selected.type)) {
       setFile(selected);
       console.log(selected); // this will display the metadata for the selected file
   } else {
       setFile(null);
   }
}

    return (
        <form>
        <input type="file" onChange={ changeHandler} />
        </form>
    )
}

export default UploadForm;