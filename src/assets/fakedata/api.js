export const getProducers = new Promise((resolve, _reject) => {
  setTimeout(function () {
    resolve([
      {
        id: 1,
        name: "Rodrigo Silva",
        email: "rodrigo@grobu.com",
        password: "123123",
        company: "Rede Grobu",
        sex: "Masculino",
        age: 27,
        avatar:
          "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
    ]);
  }, 1000);
});

export const getActors = new Promise((resolve, _reject) => {
  setTimeout(function () {
    resolve([
      {
        id: 1,
        name: "Daniel Carvalho",
        email: "daniel@ator.com",
        password: "123123",
        age: 27,
        sex: "Masculino",
        salary: 69.99,
        genre: ["Drama", "Ação"],
        avatar:
          "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        drt: "0069/PE",
      },
      {
        id: 2,
        name: "Deboratriz",
        age: 28,
        email: "debora@ator.com",
        password: "123123",
        sex: "Feminino",
        salary: 500.0,
        genre: ["Drama", "Comédia"],
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        drt: "0420/SP",
      },
      {
        id: 3,
        name: "Matheus",
        email: "matheus@ator.com",
        password: "123123",
        age: 26,
        sex: "Masculino",
        salary: 300.0,
        genre: ["Ação", "Aventura"],
        avatar:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        drt: "0000/UF",
      },
    ]);
  }, 1000);
});

export const getDisponibilidade = new Promise((resolve, _reject) => {
  setTimeout(function () {
    resolve([
      {
        start_Date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7),
        end_date: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
        actor_id: 1,
        producer_id: 1,
      },
      {
        start_Date: new Date(Date.now()),
        end_date: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
        actor_id: 2,
        producer_id: 1,
      },
      {
        start_Date: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
        end_date: new Date(Date.now() + 1000 * 60 * 60 * 24 * 14),
        actor_id: 3,
        producer_id: 1,
      },
    ]);
  }, 1000);
});

export const getLogin = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(async function () {
      const producers = await getProducers;
      const actors = await getActors;

      const foundProducer = producers.find(
        (producer) => producer.email === email && producer.password === password
      );
      const foundActor = actors.find(
        (actor) => actor.email === email && actor.password === password
      );
      if (!!foundProducer || !!foundActor) {
        !!foundProducer
          ? resolve({ user: foundProducer, role: "producer" })
          : resolve({ user: foundActor, role: "actor" });
      } else {
        reject("Email ou Senha errado");
      }
    }, 1000);
  });
};
