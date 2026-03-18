const SimpaleReact = () => {
  const handleSubmited = (event) => {
    event.preventDefault();
    console.log(event.target.name.value);
    console.log(event.target.email.value);
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmited}>
        <input type="text" placeholder="Enter Your Name" name="name" /><br />
        <input type="email" placeholder=" Enter Your Email" name="email" /><br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default SimpaleReact;
