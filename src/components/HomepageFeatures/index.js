import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Easy to Use",
    png: require("@site/static/img/r1.png").default,
    description: (
      <>
        Raccoon AI Engine is a Machine Learning as a Service (MLaaS) REST API
        that makes it easy to build and deploy machine learning models. It
        provides a simple, easy-to-use API interface that allows you to create
        and train models without having to worry about the underlying
        infrastructure.
      </>
    ),
  },
  {
    title: "Fully Programmable",
    png: require("@site/static/img/r2.png").default,
    description: (
      <>
        Raccoon AI Engine is a fully programmable MLaaS Rest API that allows you
        to build and deploy machine learning models with your own favorite
        progamming language. If you don't have progamming skill, still can use
        <code>postman</code> or <code>`insomnia`</code> to train and build
        models.
      </>
    ),
  },
  {
    title: "Built in Runtime",
    png: require("@site/static/img/r3.png").default,
    description: (
      <>
        The Built-in Runtime is a feature of Raccoon AI Engine that allows
        developers to run their models without having to worry about
        infrastructure or maintenance.
      </>
    ),
  },
];

function Feature({ png, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img className={styles.featureSvg} role="img" src={png} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
