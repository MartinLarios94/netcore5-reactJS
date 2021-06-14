import { Form, Formik, FormikHelpers } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import Button from "../utils/Button";
import FormGroupText from "../utils/FormGroupText";
import Mapa from "../utils/Mapa";
import { cineCreacionDTO } from "./cines.model";

export default function FormularioCines(props: formularioCinesProps) {
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
          <div style={{marginBottom: '1rem'}}>
            <Mapa />
          </div>
          <Button type="submit" disabled={formikProps.isSubmitting}>
            Salvar
          </Button>
          <Link className="btn btn-secondary" to="/cines">
            Cancelar
          </Link>
        </Form>
      )}
    </Formik>
  );
}

interface formularioCinesProps {
  modelo: cineCreacionDTO;
  onSubmit(
    valores: cineCreacionDTO,
    acciones: FormikHelpers<cineCreacionDTO>
  ): void;
}
