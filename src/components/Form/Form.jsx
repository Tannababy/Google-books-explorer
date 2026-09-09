import Button from "../Button/Button";

function Form() {
  return (
    <form>
      <label htmlFor="BookSearch">
        Enter the title of the book:
        <input id="BookSearch" type="text" />
      </label>
      <Button name="submit"/>
    </form>
  );
}
export default Form;
