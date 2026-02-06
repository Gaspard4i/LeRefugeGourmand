import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExclamationTriangle} from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';

export default function RulesPage() {
  return (
    <div className="min-h-screen bg-slate-night py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl text-champagne-gold mb-8">
          Règlement Intérieur
        </h1>

        <div className="bg-slate-night/50 border border-champagne-gold/30 rounded-lg p-8 space-y-6 text-cream-light/80">
          <section>
            <h2 className="text-2xl font-serif text-champagne-gold mb-4">
              1. Accès aux Salles Privées
            </h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>L&apos;accès aux salles est strictement réservé aux personnes ayant effectué une réservation.</li>
              <li>Une pièce d&apos;identité peut être demandée lors de votre arrivée.</li>
              <li>Le nombre de personnes présentes ne doit pas excéder la capacité de la salle réservée.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-champagne-gold mb-4">
              2. Vidéosurveillance
            </h2>
            <p className="mb-2">
              Pour des raisons de sécurité et de prévention, nos établissements sont équipés de systèmes de vidéosurveillance :
            </p>
            <ul className="space-y-2 list-disc list-inside">
              <li>Les espaces communs (entrée, couloirs) sont surveillés par caméras.</li>
              <li>Les salles privées sont équipées de caméras.</li>
              <li>Les enregistrements sont conservés conformément à la réglementation en vigueur (RGPD).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-champagne-gold mb-4">
              3. Comportement et Respect
            </h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>Un comportement respectueux envers le personnel et les autres clients est exigé.</li>
              <li>Toute forme de violence, harcèlement ou discrimination entraînera une exclusion immédiate sans remboursement.</li>
              <li>Le volume sonore dans les salles doit rester raisonnable malgré l&apos;insonorisation.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-champagne-gold mb-4">
              4. Dégradations et Dommages
            </h2>
            <div className="bg-champagne-gold/10 border border-champagne-gold/30 rounded-lg p-4 mb-4">
              <p className="font-semibold text-champagne-gold mb-2">
                  <FontAwesomeIcon icon={faExclamationTriangle} /> Toute dégradation du mobilier, des équipements ou des locaux sera facturée.
              </p>
            </div>
            <ul className="space-y-2 list-disc list-inside">
              <li>Un état des lieux peut être effectué avant et après votre réservation.</li>
              <li>Les frais de réparation ou de remplacement seront à la charge du client responsable.</li>
              <li>En cas de dégradations importantes, des poursuites judiciaires peuvent être engagées.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-champagne-gold mb-4">
              5. Hygiène et Propreté
            </h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>Il est interdit de fumer dans l&apos;ensemble de nos établissements.</li>
              <li>Merci de maintenir la salle dans un état correct durant votre séjour.</li>
              <li>Le personnel assurera le nettoyage complet entre chaque réservation.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-champagne-gold mb-4">
              6. Service et Commandes
            </h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>Les commandes s&apos;effectuent via les tablettes mises à disposition dans chaque salle.</li>
              <li>Un bouton d&apos;appel serveur est également disponible pour toute assistance.</li>
              <li>Le paiement s&apos;effectue à la fin de votre réservation.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-champagne-gold mb-4">
              7. Durée et Prolongation
            </h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>La durée de réservation initiale doit être respectée.</li>
              <li>Une prolongation peut être demandée sous réserve de disponibilité.</li>
              <li>Des frais supplémentaires s&apos;appliqueront en cas de dépassement non autorisé.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-champagne-gold mb-4">
              8. Annulation et Caution
            </h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>La caution est remboursée automatiquement pour toute annulation effectuée plus de 3 heures avant la réservation.</li>
              <li>En cas d&apos;annulation tardive sans justificatif valable, la caution est conservée.</li>
              <li>Les justificatifs acceptés : certificat médical, problème de transport majeur (sur preuve).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-champagne-gold mb-4">
              9. Objets Personnels
            </h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>Le Refuge Gourmand ne peut être tenu responsable en cas de vol ou de perte d&apos;objets personnels.</li>
              <li>Nous vous recommandons de ne pas laisser d&apos;objets de valeur sans surveillance.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-champagne-gold mb-4">
              10. Acceptation du Règlement
            </h2>
            <p>
              En effectuant une réservation, vous acceptez sans réserve l&apos;intégralité du présent règlement intérieur.
              Le non-respect de ces règles peut entraîner l&apos;exclusion immédiate de l&apos;établissement sans remboursement.
            </p>
          </section>

          <div className="border-t border-champagne-gold/30 pt-6 mt-8">
            <p className="text-sm text-cream-light/60">
              Dernière mise à jour : Février 2026<br />
              Le Refuge Gourmand se réserve le droit de modifier ce règlement à tout moment.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/reservation" className="inline-block px-8 py-4 bg-champagne-gold text-slate-night font-bold rounded-lg hover:bg-champagne-gold/90 transition-all">
            Retour à la Réservation
          </Link>
        </div>
      </div>
    </div>
  );
}
