import React from 'react';

import { useFormik } from 'formik';
 import * as Yup from 'yup';

 import api from "../../services/api";

const UserForm = ({handleSave}) => {
    
        const formik = useFormik({
          initialValues: {
            firstname: '',
            lastname: '',
            age: 0,
            scholing: '',
            skills: ''
          },
          validationSchema: Yup.object({
            firstname: Yup.string()
              .required('O nome é obrigatório'),
            lastname: Yup.string()
            .required('O sobrenome é obrigatório'),
            age: Yup.number()
            .required('A idade é obrigatória'),
            scholing: Yup.string()
            .required('A escolaridade é obrigatória'),
            skills: Yup.string()
            .required('As skills são obrigatórias'),
          }),
          onSubmit: values => {
            handleSave(values);
          },
        });

  return (     
    <form className="form" onSubmit={formik.handleSubmit} noValidate>
        <div className="row">
            <div className="col-12 col-md-6">
                <div className="form-group">
                    <label>Nome</label>
                    <input type='text' className='form-control'
                        name="firstname"
                        value={formik.values.firstname}
                        onChange={formik.handleChange}
                        placeholder='Digite o nome...' />
                    
                    {formik.errors.firstname && <div className="error">{formik.errors.firstname}</div>}
                
                </div>
             </div>
        <div className="col-12 col-md-6">
            <div className="form-group">
                        <label>Sobrenome</label>
                        <input type='text' className='form-control'
                            name='lastname'
                            value={formik.values.lastname}
                            onChange={formik.handleChange}
                            placeholder="Digite o sobrenome..." />
                            {formik.errors.lastname && <div className="error">{formik.errors.lastname}</div>}
            </div>
        </div>
        <div className="col-12 col-md-6">
            <div className="form-group">
                        <label>Idade</label>
                        <input type='text' className='form-control'
                            name='age'
                            value={formik.values.age}
                            onChange={formik.handleChange}
                            placeholder="Digite a idade..." />
                            {formik.errors.age && <div className="error">{formik.errors.age}</div>}
            </div>
        </div>
        <div className="col-12 col-md-6">
            <div className="form-group">
                        <label>Escolaridade</label>
                        <input type='text' className='form-control'
                            name='scholing'
                            value={formik.values.scholing}
                            onChange={formik.handleChange}
                            placeholder="Digite a escolaridade..." />
                            {formik.errors.scholing && <div className="error">{formik.errors.scholing}</div>}
            </div>
        </div>
        <div className="col-12 col-md-6">
            <div className="form-group">
                        <label>Skills</label>
                        <input type='text' className='form-control'
                            name='skills'
                            value={formik.values.skills}
                            onChange={formik.handleChange}
                            placeholder="Digite as skilss..." />
                            {formik.errors.skills && <div className="error">{formik.errors.skills}</div>}
            </div>
        </div>
        
        <hr />      

        </div>

        <div className="row">
            <div className="col-12 d-flex justify-content-end">
                <button className="btn btn-primary" type="submit" disabled={(!formik.dirty) || !formik.isValid}>
                    Salvar    
                
                </button>
                <button className="btn btn-secondary ml-2"
                    onClick={() => formik.handleReset()}>
                    Cancelar    
                </button>   
            
            </div>    
        </div>  
    </form> 
  )
}

export default UserForm;