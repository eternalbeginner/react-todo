import ListItem from './ListItem';
import Wrapper from './Wrapper';

const List = ({ items, name, children }) => {
  return (
    <Wrapper name={name}>
      {items.map((item) => {
        return <ListItem key={item.id}>{children(item)}</ListItem>;
      })}
    </Wrapper>
  );
};

export default List;
