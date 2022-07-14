import "./Card.css";
const Card = (props) => {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;

/**NOTES:
 * When you create a custom wraper component (a component that is going to have components or HTML tags inside). It is necessary to use a special "props" to indicate that this component is going to have HTML tags inside or components. This prop is called the prop.children
 *
 *
 * Also in this type of component you cannot pass it a className to add styles to it. You need to specify that this component is going to receive a "className" to add some styles.
 */
