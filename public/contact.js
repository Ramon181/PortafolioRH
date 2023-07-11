const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const nombreInput = document.getElementById('nombre');
  const apellidoInput = document.getElementById('apellido');
  const correoInput = document.getElementById('correo');
  const asuntoInput = document.getElementById('asunto');
  const mensajeInput = document.getElementById('mensaje');

  const nombre = nombreInput.value;
  const apellido = apellidoInput.value;
  const correo = correoInput.value;
  const asunto = asuntoInput.value;
  const mensaje = mensajeInput.value;

  const nombreCompleto = `${nombre} ${apellido}`;
  console.log(nombreCompleto);

  const data = {
    nombre: nombreCompleto,
    correo: correo,
    asunto: asunto,
    mensaje: mensaje
  };

  try {
    const response = await fetch('https://email-production-26a9.up.railway.app/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      console.log('Formulario enviado correctamente');
      // Realizar acciones adicionales después de enviar el formulario
    } else {
      console.error('Error al enviar el formulario');
      // Realizar acciones adicionales en caso de error
    }
  } catch (error) {
    console.error('Error al enviar el formulario:', error);
    // Realizar acciones adicionales en caso de error de conexión
  }

  // Restablecer los campos del formulario
  contactForm.reset();
});
