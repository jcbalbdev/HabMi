export default async function handleSubmit(event) {
    event.preventDefault(); // Previene la recarga de la página al enviar el formulario.
  
    const formData = new FormData(event.target); // Obtiene los datos del formulario.
    const data = Object.fromEntries(formData.entries()); // Convierte los datos a un objeto.
  
    try {
      const response = await fetch("TU_URL_DE_GOOGLE_APPS_SCRIPT", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.ok) {
        alert("Comentario enviado con éxito.");
        event.target.reset(); // Limpia el formulario.
      } else {
        throw new Error("Error al enviar el comentario.");
      }
    } catch (error) {
      alert(error.message);
    }
  }
  