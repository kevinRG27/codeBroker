import React, {useState,useEffect} from 'react';

const Formulario = (saveCode) => {


    const [code, setCode] = useState('');

    useEffect(() => {
        console.log(code)
        return () => {
            console.log(code)
        }
    })


    const addCode = e => {
        e.preventDefault();

        //enviar termino al componente principal
        saveCode(code);
    }

    console.log(code)

    return (
        <div className='bg-info'>
        <div className='container'>
            <div className='row'>
                <form
                    onSubmit = {addCode} 
                    className='col card text-white bg-transparent mb-5 pt-5 pb-2'
                    
                >
                    <fieldset>
                        <legend className='text-center'
                        >Code Broker
                        </legend>

                        <div className='row'>
                            <div className='col-md-6'>
                                <div className='form-group'>
                                    <label>Ingresa un codigo de 4 digitos : </label>
                                    <input
                                        type='text'
                                        placeholder='Codigo para Ganar'
                                        className='form-control'
                                        name='code'
                                        onChange={e => setCode(e.target.value)}
                                        value={code}
                                        maxLength='4'
                                        />
                                </div>

                            </div>
                            
                        </div>

                        <button
                            type='submit'
                            className='btn btn-primary float-right'
                            >Validar</button>
                    </fieldset>

                </form>
            </div>
        </div>
    </div>
      );
}
 
export default Formulario;