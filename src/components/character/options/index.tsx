export function ChatacterOptinos() {
  const labels = [
    {
      title: "Fácil de decir",
      tooltip: "Evite números y caracteres especiales",
    },
    {
      title: "Fácil de leer",
      tooltip: "Evite caracteres ambiguos como l, 1, O y 0 ",
    },
    {
      title: "Todos los caracteres",
      tooltip: "Cualquier combinación de caracteres como !, 7, h, K y l1",
    },
  ];

  /**
   * radio debe ser redeondo
   */
  return (
    <div>
      <input type="radio"></input>
      <span className="info"></span>
    </div>
  );
}
