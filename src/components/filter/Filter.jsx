import PropTypes from 'prop-types';
import { memo } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import style from "./filter.module.css"
const Filter = ({handleChange}) => {    
  
    return (
        <div className={style.wrapper}>
        <Form.Group className="mb-3">
            <Form.Label htmlFor="" className="form-group-label">Фильтр:</Form.Label>
            <Form.Control  name="filter" onChange={handleChange} type="text" className="form-group-input" placeholder="по имени 'жертвы'" />
        </Form.Group>
        </div>
    )
}

export default memo(Filter);
Filter.propTypes={
        handleChange:PropTypes.func.isRequired,
}