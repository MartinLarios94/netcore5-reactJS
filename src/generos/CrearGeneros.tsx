import FormularioGeneros from "./FormularioGeneros";

export default function CrearGeneros() {
  // const history = useHistory();
  return (
    <>
      <h3>Crear Genero</h3>
      <FormularioGeneros modelo={{ nombre: "" }} onSubmit={async values => {
        await new Promise(r => setTimeout(r, 2000))
        console.log(values);
      }}/>
    </>
  );
}
