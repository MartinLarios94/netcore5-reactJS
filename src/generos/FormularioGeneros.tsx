import React from "react";
import FormGroupText from '../utils/FormGroupText'
import Button from '../utils/Button'
import { Formik, Form, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import * as Yup from 'yup';
import { generosCreacionDTO } from "./generos.model";

export default function FormularioGeneros(props: formularioGenerosProps) {
  return (
    <Formik
      initialValues={props.modelo}
      onSubmit={props.onSubmit}
      validationSchema={Yup.object({
        nombre: Yup.string()
          .required("Este campo es requerido")
          .primeraLetraMayuscula(),
      })}
    >
      {(formikProps) => (
        <Form>
          <FormGroupText campo="nombre" label="Nombre" />
          <Button disabled={formikProps.isSubmitting} type="submit">
            Salvar
          </Button>
          <Link className="btn btn-secondary" to="/generos">
            Cancelar
          </Link>
        </Form>
      )}
    </Formik>
  );
}

interface formularioGenerosProps {
    modelo: generosCreacionDTO;
    onSubmit(values: generosCreacionDTO, accion: FormikHelpers<generosCreacionDTO>): void;
}
