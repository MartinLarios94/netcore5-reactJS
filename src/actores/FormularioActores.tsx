import React from "react";
import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import { actorCreacionDTO } from "./actores.mode";
import FormGroupText from "../utils/FormGroupText";
import FormGroupFecha from "../utils/FormGroupFecha";
import FormGroupImagen from "../utils/FormGroupImagen";
import FormGroupMarkdown from "../utils/FormGroupMarkdown";
import Button from "../utils/Button";
import * as Yup from "yup";

export default function FormularioActores(props: formularioActoresProps) {
  return (
    <Formik
      initialValues={props.modelo}
      onSubmit={props.onSubmit}
      validationSchema={Yup.object({
        nombre: Yup.string()
          .required("Este campo es requerido")
          .primeraLetraMayuscula(),
        fechaNacimiento: Yup.date()
          .nullable()
          .required("Ingrese una fecha valida"),
      })}
    >
      {(formikProps) => (
        <Form>
          <FormGroupText campo="nombre" label="Nombre" />
          <FormGroupFecha campo="fechaNacimiento" label="Fecha de Nacimiento" />
          <FormGroupImagen
            label="Foto"
            campo="foto"
            imagenURL={props.modelo.fotoURL}
          />
          <FormGroupMarkdown campo="biografia" label="Biografia" />
          <Button type="submit" disabled={formikProps.isSubmitting}>
            Salvar
          </Button>
          <Link className="btn btn-secondary" to="/actores">
            Cancelar
          </Link>
        </Form>
      )}
    </Formik>
  );
}

interface formularioActoresProps {
  modelo: actorCreacionDTO;
  onSubmit(
    valores: actorCreacionDTO,
    acciones: FormikHelpers<actorCreacionDTO>
  ): void;
}
