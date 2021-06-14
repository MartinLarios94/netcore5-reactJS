import { useParams } from "react-router";
import FormularioGeneros from './FormularioGeneros'

export default function EditarGeneros() {
    const {id}: any = useParams();
  return (
    <>
      <h3>Editar Genero</h3>
      <FormularioGeneros modelo={{ nombre: 'Accion' }} onSubmit={async values => {
        await new Promise(r => setTimeout(r, 2000))
        console.log(values);
      }}/>
    </>
  );
}
