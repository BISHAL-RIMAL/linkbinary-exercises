import { useState } from "react";
function Form(){
    const [email, setEmail] = useState ("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e)=> { e.preventDefault();
        console.log("Email:", email);
        console.log("Password:", password);

        setEmail("");
        setPassword("");
    };
    return(
        <form onSubmit = {handleSubmit}>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
            <br/>Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
            <button type="submit">Submit</button>
        </form>
    );
}
export default Form;