const FormAction = () => {
  const handleFormAction = (formData) => {
    console.log(formData);
  };
  return (
    <div>
      <form action={handleFormAction}>
        <input type="text" placeholder="Enter Your Name" name="name" />
        <br />
        <input type="email" placeholder="Enter your Name" name="email" />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default FormAction;
