import { Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import { generoDTO } from "../generos/generos.model";
import Button from "../utils/Button";

export default function FiltroPeliculas() {
  const valoresIniciales: filtroPeliculaForm = {
    titulo: "",
    generoId: 0,
    proximosEstrenos: false,
    enCartelera: false,
  };

  const generos: generoDTO[] = [
    { id: 1, nombre: "Acción" },
    { id: 2, nombre: "Comedia" },
  ];

  return (
    <>
      <h3>Filtrar Peliculas</h3>
      <Formik
        initialValues={valoresIniciales}
        onSubmit={(valores) => console.log(valores)}
      >
        {(formikProps) => (
          <Form>
            <div className="form-inline">
              <div className="form-group mb-2">
                <label htmlFor="titulo" className="sr-only">
                  Titulo
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="titulo"
                  placeholder="Titulo de la pelicula"
                  {...formikProps.getFieldProps("titulo")}
                />
                <div className="form-group mx-sm-3 mb-2">
                  <select
                    className="form-control"
                    {...formikProps.getFieldProps("generoId")}
                  >
                    <option value="0">--Seleccione una opción--</option>
                    {generos.map((genero) => (
                      <option key={genero.id} value={genero.id}>
                        {genero.nombre}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group mx-sm-3 mb-2">
                  <Field className="form-check-input" id="proximosEstrenos" name="proximosEstrenos" type="checkbox"/>
                  <label className="form-check-label" htmlFor="proximosEstrenos">Próximos Estrenos</label>
                </div>
                <div className="form-group mx-sm-3 mb-2">
                  <Field className="form-check-input" id="enCartelera" name="enCartelera" type="checkbox"/>
                  <label className="form-check-label" htmlFor="enCartelera">En Cartelera</label>
                </div>
                <Button onClick={() => formikProps.submitForm()} className="btn btn-primary mb-2 mx-sm-3">Filtrar</Button>
                <Button onClick={() => formikProps.setValues(valoresIniciales)} className="btn btn-danger mb-2">Limpiar</Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

interface filtroPeliculaForm {
  titulo: string;
  generoId: number;
  proximosEstrenos: boolean;
  enCartelera: boolean;
}
