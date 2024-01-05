import { useEffect, useState } from 'react';
import { IController, IErrorState, IFormParams, IInitialState } from './types';
import { yupValidate } from './yup';

const updatedState: IInitialState = {};

function Controller(props: IController) {
  const {render,name } = props;
  const handleChange = (inputValue: string) => {updatedState[name] = inputValue;};
  return render?.({onChange: handleChange});
}

export const useFrom = ({initialState,schema}: IFormParams)=>{
  const [errors, setErrors] = useState<IErrorState>({});
  const [state, setStates] = useState<IInitialState>(initialState);


  useEffect(()=>{
    for (const key in initialState) {
      if (Object.prototype.hasOwnProperty.call(initialState, key)) {
        updatedState[key]= initialState[key];
      }
    }
  },[]);
 
  const setError = (key: string,value: string)=> setErrors(p=>({...p, [key]:value}));
  const setState = (key: string,value: string|boolean)=> {setStates(p=>({...p, [key]:value})); updatedState[key]=value; };



  const handleSubmit = () => {
    yupValidate(schema, updatedState).then().catch(err=>{
      if(err){setErrors(err); return null; }
    });
    setStates(updatedState); 
    setErrors({}); 
    return updatedState;
  };
  return {Controller, state,handleSubmit, errors,setError,setErrors,setState , setStates};
};



