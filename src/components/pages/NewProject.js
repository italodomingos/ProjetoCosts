import ProjectForm from "../projects/ProjectForm";
import styles from "./NewProject.module.css";
import { useNavigate } from "react-router-dom";

export default function NewProject() {
  const navigate = useNavigate();

  function createPost(project) {
    //initialize const and services
    project.cost = 0;
    project.services = [];

    fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        navigate("/projects", {
          state: { message: "Projecto criado com sucesso" },
        });
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className={styles.container}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
    </div>
  );
}
