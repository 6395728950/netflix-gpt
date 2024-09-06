 export const Valid = (email,password,name) =>{
    const isemailvaild= /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(email);
  const ispasswordvalid = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);
   const isnamevalid = /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/.test(name);
  if(!isemailvaild) return "Email id is not valid";
  if(!ispasswordvalid) return "Password is not valid";
  if(!isnamevalid) return "your Name is not valid";

  return null;
 };

 

 