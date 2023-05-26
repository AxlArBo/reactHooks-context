import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { LogoSpace, FormSpace, Img } from "./styles";
import DatosUsuario from "./DatosUsuario";
import DatosPersonales from "./DatosPersonales";
import DatosEntrega from "./DatosEntrega";
import Complete from "./Complete";
import Stepper from "../Stepper";
import Step from "./Step";

// validaciones
import { validarEmail, validarPassword } from "./DatosUsuario/validaciones";

const Form = () => {
  const [step, setStep] = useState(0)
  const [pasos, setPasos] = useState({})

  useEffect(() => {
    console.log('Use effect');
  });

  useEffect(() => {
    console.log('Se ha actualizado el step: ', step);
  }, [step])

  //conectandose a API, intentando o ejemplo
  // useEffect( () => {
  //   async function getData() {
  //     try {
  //       const data = await (await fetch('https://jsonplaceholder.typicode.com/posts')).json();
  //       console.log(data)
  //     } catch (e) {
  //       console.log(e)
  //     }
  //   }
  //   getData();
  // })

  const updateStep = (step) => {
    console.log('Actualizar paso', step)
    setStep(step)
  }

  const steps = {
    0: <DatosUsuario updateStep={updateStep} />,
    1: <DatosPersonales updateStep={updateStep} />,
    2: <DatosEntrega updateStep={updateStep} />,
    3: <Complete />,
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const newStep = step + 1;
    setStep(newStep)
    console.log('new step', newStep);
    console.log(step)
  }

  const handleChange = (element, position, currentStep, validator) => {
    const value = element.target.value;
    const valid = validator(value);
    console.log(value);
    console.log(valid)
    console.log('position', position);
    console.log('currentStep', currentStep);
    console.log('validator', validator);
  }

  const stepFlow = {
    0: {
      inputs: [
        {
          label: 'Correo electrónico',
          type: 'email',
          value: '',
          valid: null,
          onChange: handleChange,
          helperText: 'Ingresa un correo váldo',
          validator: validarEmail,
        },
        {
          label: 'Contraseña',
          type: 'password',
          value: '',
          valid: null,
          onChange: handleChange,
          helperText: 'Ingresa una contraseña válida, al menos 8 caracteres y máximo 20',
          validator: validarPassword,
        },
      ],
      buttonText: 'Siguiente',
      onSubmit
    },
    1: {
      inputs: [
        {
          label: 'Correo electrónico',
          type: 'email',
          value: '',
          valid: null,
          onChange: handleChange,
          helperText: 'Ingresa un correo váldo',
          validator: validarEmail,
        },
        {
          label: 'Contraseña',
          type: 'password',
          value: '',
          valid: null,
          onChange: handleChange,
          helperText: 'Ingresa una contraseña válida, al menos 8 caracteres y máximo 20',
          validator: validarPassword,
        },
      ],
      buttonText: 'Siguiente',
      onSubmit
    },
  }

  return (
    <Box
      sx={{
        padding: "30px",
        display: "flexbox",
        flexDirection: "column",
      }}
    >
      <LogoSpace>
        <Img src={"/favicon.png"} />
        <Typography variant="h3">AluraFood</Typography>
      </LogoSpace>
      <FormSpace>
        { (step < 3) && <Stepper step={step}/> }
        {/*steps[step]*/}
        <Step data={ stepFlow[step] } step={step} />
      </FormSpace>
    </Box>
  );
};

export default Form;
