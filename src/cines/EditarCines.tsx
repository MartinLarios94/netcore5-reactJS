import FormularioCines from './FormularioCines'

export default function EditarCines() {
    return(
        <>
        <h3>Editar Cines</h3>
        <FormularioCines modelo={{nombre: 'Cinemark'}} onSubmit={valores => console.log(valores)} />
      </>
    )
}