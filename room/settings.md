---
title: PILOS Docs | Benutzer
hide_hero: true
menubar: room_menubar
---

## Raumeinstellungen

Nach Erstellen eines neuen Raumes, befinden Sie sich in der Raumansicht. Klicken Sie auf "Einstellungen" um zu den Raumeinstellungen zu gelangen.

![Einstellungen klicken]({{ site.baseurl }}/assets/img/screenshots/room/settings/open.png)
<br>
<hr>
{% include notification.html status="is-info" icon="fas fa-info-circle" message="**Alternativ**  Sollten Sie Einstellungen für einen Raum nachträglich ändern wollen:" %}
<br>
Klicken Sie auf Ihrer [persönlichen Startseite](../room/) unter dem Abschnitt "Meine Räume" auf den Raum für den Sie die Einstellungen anpassen möchten.

![Einstellungen klicken]({{ site.baseurl }}/assets/img/screenshots/room/settings/enter.png)
<hr>
Die Einstellungen sind in 5 Abschnitte aufgeteilt:

1. [Allgemein](#allgemein)
2. [Sicherheit](#sicherheit)
3. [Teilnehmer](#teilnehmer)
4. [Berechtigungen](#berechtigungen)
5. [Einschränkungen](#einschränkungen)

![Einstellungen klicken]({{ site.baseurl }}/assets/img/screenshots/room/settings/settings.png)

<hr>
## Allgemein

![Einstellungen Allgemein]({{ site.baseurl }}/assets/img/screenshots/room/settings/allgemein.png#center)

- **Art (1)** Legen Sie die Raumart fest oder ändern diese. Die Raumart entscheidet auch über den Server (z.B. besonders geschützt für Vertrauliche Besprechungen), auf dem der Raum läuft. Mehr im grünen Kasten Welche Raumarten gibt es.
- **Raumname (2)** Hier können Sie den Raumnamen nachträglich ändern
- **Begrüßungsnachricht (3)** Wenn Teilnehmer beim Betreten des Raumes eine Nachricht angezeigt bekommen sollen, können Sie diese hier festlegen. Die Länge der Nachricht ist auf 500 Zeichen begrenzt.
- **Max. Dauer (4)** Hier können Sie die maximale Dauer des Meetings in Minuten festlegen. Die festgelegte Dauer startet, sobald sie das Meeting starten. Ist die Zeit abgelaufen, wird das Meeting automatisch beendet. Ist das Meeting gestartet, kann die Dauer nachträglich nicht verlängert werden.

{% include notification.html status="is-success" icon="fas fa-info-circle" message="**Mehr erfahren**  [Welche Raumarten gibt es?](../room/types)" %}
<br>
{% include notification.html message="**Wichtig!** Wenn Sie Einstellungen geändert haben, speichern Sie diese mit einem Klick auf den grünen Speichern-Button unten rechts" %}

<hr>
## Sicherheit

![Einstellungen Sicherheit]({{ site.baseurl }}/assets/img/screenshots/room/settings/sicherheit.png#center)

- **Zugangscode (1)** Mit einem Klick auf das Würfelsymbol können Sie einen neuen zufällig generierten Zugangscode erstellen. Wenn Sie den Raum ohne Zugangscode zur Verfügung stellen möchten, klicken Sie auf das Mülleimer Symbol. Es erscheint der Schriftzug "-- ungeschützt --". Anmerkung: Mitglieder des Raumes können auch ohne Zugangscode beitreten.
- **Gäste zulassen (2)** Standardmäßig ist die Option "Gäste zulassen" deaktiviert. So können nur angemeldete Nutzer den Raum betreten. Möchten Sie den Raum auch für nicht-angemeldete Nutzer verfügbar machen, so aktivieren Sie diese Option. Wenn Sie Gäste zulassen möchten, überlegen Sie einen Zugangscode und/oder Warteraum als zusätzliche Absicherung einzusetzen.
- **Neue Mitglieder zulassen (3)** Wenn Sie diese Option aktivieren, können Personen sich selbst für den Raum als Mitglied anmelden. Um Mitglied des Raumes zu werden, ist der Zugangscode notwendig (Vorausgesetzt Sie haben Ihren Raum mit einem Zugangscode versehen). Wenn diese Option nicht aktiviert ist, müssen Sie Mitglieder manuell zu dem Raum hinzufügen.

{% include notification.html message="**Wichtig!** Wenn Sie Einstellungen geändert haben, speichern Sie diese mit einem Klick auf den grünen Speichern-Button unten rechts" %}

<hr>
## Teilnehmer

![Einstellungen Teilnehmer]({{ site.baseurl }}/assets/img/screenshots/room/settings/teilnehmer.png#center)

- **Max. Teilnehmerzahl (1)** Legen Sie die maximale Teilnehmerzahl des Raumes fest. Standardmäßig haben Räume keine Teilnehmerbegrenzung. 
- **Standardrolle (2)** Die Standardrolle legt für alle angemeldeten Nutzer fest mit welcher Rolle diese den Raum betreten. Für Mitglieder gilt die für jedes Mitglied individuell eingestellt Rolle. Neue, sich selbst für den Raum angemeldete, Mitglieder erhalten ebenfalls diese Rolle. Wird die Standardrolle später geändert, behalten diese ihre Rolle und müssen evtl. einzeln geändert werden. Sie können die Rollen für jedes Mitglied bei Bedarf auch nachträglich anpassen (siehe [Mitglieder verwalten](../room/features/membership#mitglieder-verwalten)). Mehr zu den Berechtigungen der unterschiedlichen Rollen finden Sie unter [Mitgliedschaftsrollen](../room/features/membership#mitgliedschaftsrollen)
- **Warteraum (3)** Hier können Sie die Warteraumfunktion aktivieren. Diese ist Standardmäßig deaktiviert, dies bedeutet jeder betritt direkt den Raum. Ist "Aktiviert" ausgewählt, kommen alle Personen, die keine Moderatoren sind, in den Warteraum. Wenn "Aktiviert für Gäste" ausgewählt ist, müssen nur Gäste in den Warteraum. Angemeldete Nutzer können den Raum direkt betreten.
- **Anwesenheit der Teilnehmer protokollieren (4)** Wenn Sie diese Option aktivieren, wird die Anwesenheit jedes Teilnehmers bei jeder aktiven Session aufgezeichnet. Teilnehmer können eine aktive Session jedoch nur betreten, wenn sie der Protokollierung der Anwesenheit zugestimmt haben. Die Zustimmung erfolgt über setzen eines Hakens in der Raumansicht (a). Um die aufgezeichneten Anwesenheiten einzusehen, klicken Sie in der Raumansicht auf "Historie" (b). Dort wird jede durchgeführte Session aufgelistet, mit Beginn- und Endzeit. Unter Aktionen finden Sie zwei blaue Buttons (c). Durch Klicken auf den rechten Button öffnet sich ein Popup-Fenster welches die Anwesenheiten der einzelnen Teilnehmer auflistet und die Zeit anzeigt, die diese an der Session teilgenommen haben (d).

![Einstellungen Historie]({{ site.baseurl }}/assets/img/screenshots/room/settings/historie.png)

![Einstellungen Anwesenheit]({{ site.baseurl }}/assets/img/screenshots/room/settings/anwesenheit.png)

{% include notification.html message="**Wichtig!** Wenn Sie Einstellungen geändert haben, speichern Sie diese mit einem Klick auf den grünen Speichern-Button unten rechts" %}

<hr>
## Berechtigungen

![Einstellungen Berechtigungen]({{ site.baseurl }}/assets/img/screenshots/room/settings/berechtigungen.png#center)

- **Jeder darf das Meeting starten (1)** Ist diese Option nicht aktiviert, können nur Nutzer mit der Rolle "Moderator", Eigentümer und Miteigentümer das Meeting starten. Ist diese Option aktiviert, kann jeder (auch Gäste, wenn diese zugelassen sind) das Meeting starten.
- **Mikrofon bei Beitritt stummschalten (2)** Aktivieren Sie diese Option um das Mikrofon jedes Teilnehmers bei Beitritt des Meetings stummzuschalten. 

{% include notification.html message="**Wichtig!** Wenn Sie Einstellungen geändert haben, speichern Sie diese mit einem Klick auf den grünen Speichern-Button unten rechts" %}

<hr>
## Einschränkungen

{% include notification.html status="is-info" icon="fas fa-info-circle" message="Die Einstellungen die in der Kategorie \"Einschränkungen\" getätigt werden können, sind Voreinstellungen für Meetings die in dem Raum stattfinden." %}
   

![Einstellungen Einschränkungen]({{ site.baseurl }}/assets/img/screenshots/room/settings/einschraenkungen.png#center)

- **Einschränkungen aktivieren (1)** Aktivierte Optionen in dieser Kategorie sind auch nur dann wirklich aktiv in einem Meeting, wenn diese Option aktiviert ist. Ist sie nicht aktiviert, wird auch keine weitere gesetzte Einschränkung im Meeting aktiv sein.
- **Webcam deaktivieren (2)** Wenn Sie diese Option aktivieren, ist die Webcam von Teilnehmern des Meetings deaktiviert und kann von diesen auch nicht aktiviert werden. 
- **Webcam nur für Moderatoren sichtbar (3)** Wenn diese Option aktiviert ist, können nur Teilnehmer des Meetings mit der Rolle "Moderator" die Webcam der restlichen Teilnehmer sehen. Teilnehmer ohne die Rolle "Moderator" können keine Webcam anderer Teilnehmer sehen.
- **Mikrofon deaktivieren (4)** Wenn Sie diese Option aktivieren, ist das Mikrofon von Teilnehmern des Meetings deaktiviert und kann von diesen auch nicht aktiviert werden.
- **Öffentlichen Chat deaktivieren (5)** Aktivieren Sie diese Einschränkung um die Möglichkeit eines öffentlichen Chats während eines Meetings zu unterbinden. Das Aktivieren dieser Option schränkt nicht die Nutzung von privaten Chats ein!
- **Private Chats deaktivieren (6)** Aktivieren Sie diese Einschränkung um zu unterbinden, dass Teilnehmer des Meetings private Nachrichten mit anderen Teilnehmern austauschen können. Die Teilnehmer können jedoch weiterhin private Nachrichten an Moderatoren schicken.
- **Bearbeiten der Notizen deaktivieren (7)** Ist diese Einschränkung aktiviert, können nur Teilnehmer mit der Rolle "Moderator" die öffentlichen Notizen eines Meetings bearbeiten.
- **Teilnehmerliste verbergen (8)** Wenn Sie diese Einschränkung aktivieren, können Teilnehmer nicht sehen wer noch an dem Meeting teilnimmt. Einem normalen Teilnehmer werden nur Teilnehmer mit der Rolle "Moderator" angezeigt. Teilnehmer mit der Rolle "Moderator" können alle Teilnehmer des Meetings in der Teilnehmerliste sehen.

{% include notification.html status="is-info" icon="fas fa-info-circle" message="Die Einschränkungen können nachträglich während des Meetings geändert werden. Auch kann ein Moderator die Einschränkungen für einzelne Teilnehmer aufheben.  
Mehr dazu [Videokonferenz](../bbb)" %}
    
   
{% include notification.html message="**Wichtig!** Wenn Sie Einstellungen geändert haben, speichern Sie diese mit einem Klick auf den grünen Speichern-Button unten rechts" %}
