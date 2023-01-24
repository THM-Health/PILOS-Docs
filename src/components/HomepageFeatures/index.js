import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Online Dokumentation',
      img: require('@site/static/img/manual.png').default,
    description: (
      <>
        Online Dokumentation aller Funktionen mit vielen Bildern und hilfreichen Tipps
      </>
    ),
  },
  {
    title: 'Wartungsmeldungen',
      img: require('@site/static/img/maintenance.png').default,
    description: (
      <>
        Meldungen zu Wartungsarbeiten und Änderungen an der Infrastruktur
      </>
    ),
  },
  {
    title: 'Email Support',
    img: require('@site/static/img/ticket.png').default,
    description: (
      <>
        Ticket-System für weitere Unterstützung bei komplexen Fragestellungen und Problemen unter: <a href="mailto:pilos@thm.de">pilos@thm.de</a>
      </>
    ),
  },
];

function Feature({img, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={img} className={styles.featureSvg} role="img" />
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
