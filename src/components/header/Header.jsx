import HeaderStyle from "./Header.module.scss";
// const Header = (props) => {

//     console.log(props);
//      const {categories, text }=props
//   return (

//     <div>Header {props.text}</div>
//   )
// }

const Header = ({ categories, text }) => {
  console.log(text);

  return (
    <div className={HeaderStyle.header}>
     <h1>{text}</h1>
      <div className={HeaderStyle.btns}>
       {
        categories.map((item)=>(<button  key={item}>{item}</button>))
       }
      </div>
    </div>
  );
};

export default Header;
