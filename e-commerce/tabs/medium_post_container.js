const domContainer = document.querySelector("#success-notification");
ReactDOM.render(e(MediumPost),domContainer);
import React, { useState } from 'react';

// Componente que se muestra/oculta
const medium_post_container = () => {
  return (
    <div>
      <h2>Compra realizada exitosamente</h2>
      <p>Este es un texto dentro del componente.</p>
    </div>
  );
};

export default App;