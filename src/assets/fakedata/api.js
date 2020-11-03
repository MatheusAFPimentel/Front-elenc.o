export const getProducers = new Promise((resolve, _reject) => {
  setTimeout(function () {
    resolve([
      {
        id: 1,
        name: "Rodrigo Silva",
        email: "rodrigo@grobu.com",
        password: "123456",
        company: "Rede Grobu",
      },
    ]);
  }, 1000);
});

export const getActors = new Promise((resolve, _reject) => {
  setTimeout(function () {
    resolve([
      {
        id: 1,
        email: "daniel@ator.com",
        name: "Daniel Carvalho",
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
        sex: "Feminino",
        salary: 69.99,
        genre: ["Drama", "Comédia"],
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        drt: "0420/SP",
      },
      {
        id: 3,
        name: "Matheus",
        age: 26,
        sex: "Masculino",
        salary: 69.99,
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
