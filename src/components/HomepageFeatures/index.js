import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from "@docusaurus/Link";

const FeatureList = [
  {
    title: 'Online Dokumentation',
      img: require('@site/static/img/manual.png').default,
    description: (
      <>
        Online Dokumentation aller Funktionen mit vielen Bildern und hilfreichen Tipps
      </>
    ),
      label: "Zu der Dokumentation",
      to: "/user/intro",
  },
  {
    title: 'Wartungsmeldungen',
      img: require('@site/static/img/maintenance.png').default,
    description: (
      <>
        Meldungen zu Wartungsarbeiten und Änderungen an der Infrastruktur
      </>
    ),
      label: "Zu den Wartungsmeldungen",
      to: "/blog"
  },
  {
    title: 'Email Support',
    img: require('@site/static/img/ticket.png').default,
    description: (
      <>
        Ticket-System für weitere Unterstützung bei komplexen Fragestellungen und Problemen unter: <a href="mailto:pilos@thm.de">pilos@thm.de</a>
      </>
    ),
      label: "Email schreiben",
      to: "mailto:pilos@thm.de"
  },
];

function Feature({img, title, description, label, to}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
          <Link  to={to}>
        <img src={img} className={styles.featureSvg} role="img" />
          </Link>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>

          <Link
              className="button button--secondary"
              to={to}>
              {label}
          </Link>
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
