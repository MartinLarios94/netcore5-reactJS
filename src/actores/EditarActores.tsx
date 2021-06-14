import FormularioActores from "./FormularioActores";

export default function EditarActores() {
  return (
    <>
      <h3>Editar Actor</h3>
      <FormularioActores
        modelo={{
          nombre: "Martin Larios",
          biografia: `# Martin
Aloooooo`,
          fechaNacimiento: new Date("1996-01-01T00:00:00"),
          fotoURL: 'https://m.media-amazon.com/images/M/MV5BMjE0MDkzMDQwOF5BMl5BanBnXkFtZTgwOTE1Mjg1MzE@._V1_UY317_CR2,0,214,317_AL_.jpg'

        }}
        onSubmit={(valores) => console.log(valores)}
      />
    </>
  );
}
