//import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import {Label,Input} from './Filter.styled';
import {getFilter} from '../../redux/selectors';
import {filterContact} from '../../redux/filterSlice';

export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(getFilter);

const getFilterValue = (e) =>{
return dispatch(filterContact(e.target.value))
}
  return (
    <>
      <Label>Find contacts by name</Label>
      <Input type="text" name="filter" value={filter} onChange={getFilterValue} />
    </>
  );
};

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
