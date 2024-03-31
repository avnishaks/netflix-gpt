export const checkValidData = (name,email, password) => {
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
      email
    );
    const isPasswordValid =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    let isNameValid = true;
    if (name) {
          isNameValid = /^[a-zA-Z]+(?: [a-zA-Z]+)*$/.test(name);
    }

    if(!isNameValid) return "Name is not a valid";
  
    if (!isEmailValid) return "Email ID is not valid";
    if (!isPasswordValid) return "Password is not valid";
  
    return null;
};