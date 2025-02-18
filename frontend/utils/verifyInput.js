const validateInput = (name, desc) => {
    let msg = '';
    const nameLength = name.split('').length;
    const descLength = desc.split('').length;


    if(nameLength > 15 || nameLength < 1){
      msg += "Name should be between 1 and 15 characters long! ";
    }

    if(descLength > 30 || descLength < 1){
      msg += "Description should be between 1 and 15 characters long! ";
    }

    console.log(msg);
    return msg;
  }

  export default validateInput