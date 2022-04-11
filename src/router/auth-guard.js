const isautenticatedGuard = (to, from, next) => {
  return new Promise(() => {
    const random = Math.random() * 100;

    if (random < 50) {
      console.log("esta autentocado");
      next();
    } else {
      console.log("no esta autenticado", random);
      next({ name: "pokemon-home" });
    }
  });
};

export default isautenticatedGuard;
