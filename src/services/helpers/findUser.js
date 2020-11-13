export function findUser(email, password) {
  if (!JSON.parse(localStorage.getItem("producers"))) {
    localStorage.setItem("producers", JSON.stringify([]));
  }
  if (!JSON.parse(localStorage.getItem("actors"))) {
    localStorage.setItem("actors", JSON.stringify([]));
  }
  const savedProducers = JSON.parse(localStorage.getItem("producers"));
  const savedActors = JSON.parse(localStorage.getItem("actors"));

  const foundProducer = savedProducers?.find(
    (producer) =>
      producer.user.login.toLowerCase() === email.toLowerCase() &&
      producer.user.password === password
  );
  const foundActor = savedActors?.find(
    (actor) =>
      actor.user.login.toLowerCase() === email.toLowerCase() &&
      actor.user.password === password
  );
  if (!!foundProducer || !!foundActor) {
    if (!!foundProducer) {
      return { user: foundProducer, role: "producer", success: true };
    } else {
      return { user: foundActor, role: "actor", success: true };
    }
  } else {
    return { err: "Email ou Senha errado", success: false };
  }
}
