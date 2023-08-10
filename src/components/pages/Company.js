import React from "react";
import Container from "../layout/Container";
import styles from "./Company.module.css";

export default function Company() {
  return (
    <Container>
      <div className={styles.company_container}>
        <div className={styles.about}>
          <h2>Sobre Nós</h2>
          <p>
            A Costs é uma empresa especializada em fornecer soluções de controle
            de custos de projeto. Com uma equipe experiente e dedicada, estamos
            comprometidos em ajudar nossos clientes a gerenciar seus projetos de
            forma eficiente e econômica.
          </p>
        </div>
        <div className={styles.about}>
          <h2>Nossa Missão</h2>
          <p>
            Nossa missão é fornecer ferramentas e serviços de qualidade que
            permitam às empresas controlar seus custos de projeto de maneira
            eficaz, garantindo o sucesso e a rentabilidade de suas iniciativas.
          </p>
        </div>
        <div className={styles.values}>
          <div className={styles.value}>
            <h3>Compromisso</h3>
            <p>
              Estamos comprometidos com a excelência em nossos serviços e com a
              satisfação de nossos clientes.
            </p>
          </div>
          <div className={styles.value}>
            <h3>Inovação</h3>
            <p>
              Buscamos constantemente novas soluções e tecnologias para melhorar
              o controle de custos de projetos.
            </p>
          </div>
          <div className={styles.value}>
            <h3>Transparência</h3>
            <p>
              Agimos com honestidade e transparência em todas as nossas
              interações e negócios.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
