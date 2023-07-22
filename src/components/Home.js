import AddBook from './AddBook';
import Book from './Books';

export default function Books() {
  return (
    <div className="bookcard-container">
      <Book genres="Action" title="The Hunger Games" author="Suzanne Collins" circle="circle" itemLayer="item layer-1" filldata="fill" percentage="64%" chapter="Chapter 17" />
      <Book genres="Science Fiction" title="Dune" author="Frank Herbert" circle="circle" itemLayer="item itm-lay-1" filldata="fill-1" percentage="8%" chapter="Chapter 3" />
      <Book genres="Economy" title="Capital in the Twenty-First Century" author="Suzanne Collins" circle="circ" itemLayer="ite" filldata="fil" percentage="0%" chapter="Introduction" />
      <hr className="hr-line" />
      <AddBook />
    </div>
  );
}
