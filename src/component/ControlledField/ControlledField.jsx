import { useState } from "react";

const ControlledField = () => {
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log(e.target.name.value);
  };

  const handlePasswordChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Enter Your Text" />
        <br />
        <input
          onChange={handlePasswordChange}
          type="password"
          name="password"
          defaultValue={password}
          placeholder="Enter Your Password"
        />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default ControlledField;
