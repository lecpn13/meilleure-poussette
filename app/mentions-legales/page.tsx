import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales — MeilleurePoussette.fr",
  description: "Mentions légales, politique de confidentialité et informations sur le programme d'affiliation Amazon du site MeilleurePoussette.fr.",
  alternates: { canonical: "https://meilleure-poussette.fr/mentions-legales" },
};

export default function MentionsLegalesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <h1 className="text-3xl font-extrabold mb-2" style={{ color: "#1e3a5f" }}>
        Mentions Légales
      </h1>
      <div className="w-12 h-1 rounded-full mb-10" style={{ backgroundColor: "#FF9900" }} />

      <div className="space-y-10 text-gray-700 text-sm leading-relaxed">

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">1. Éditeur du site</h2>
          <p>Le site <strong>MeilleurePoussette.fr</strong> est édité à titre personnel.</p>
          <p className="mt-2">
            <strong>Responsable de publication :</strong> Loïc<br />
            <strong>Email :</strong> <a href="mailto:contact@meilleure-poussette.fr" className="text-blue-600 hover:underline">contact@meilleure-poussette.fr</a>
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">2. Hébergement</h2>
          <p>
            <strong>o2switch</strong><br />
            222-224 Boulevard Gustave Flaubert, 63000 Clermont-Ferrand<br />
            Tél. : 04 44 44 60 40 — <a href="https://www.o2switch.fr" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.o2switch.fr</a>
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">3. Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble des contenus (textes, comparatifs, analyses, code source) est protégé par le droit d&apos;auteur.
            Toute reproduction sans autorisation écrite est interdite. Les marques des produits présentés appartiennent
            à leurs propriétaires respectifs et sont utilisées à titre informatif uniquement.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">4. Programme d&apos;affiliation Amazon</h2>
          <p>
            <strong>MeilleurePoussette.fr</strong> participe au <strong>Programme Partenaires d&apos;Amazon EU</strong>.
            En tant que Partenaire Amazon, nous percevons une commission sur les achats qualifiés effectués via nos liens.
            <strong> Cela ne modifie pas le prix payé par l&apos;acheteur</strong> et n&apos;affecte pas l&apos;objectivité de nos comparatifs.
            Les prix affichés sont indicatifs — vérifiez le prix actuel sur Amazon.fr avant tout achat.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">5. Limitation de responsabilité</h2>
          <p>
            Les informations publiées sont fournies à titre informatif. L&apos;éditeur s&apos;efforce de les maintenir
            à jour mais ne garantit pas leur exactitude à tout moment. Il ne saurait être tenu responsable
            des dommages résultant de l&apos;utilisation du site ou de l&apos;achat de produits référencés.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">6. Cookies</h2>
          <p>
            Ce site peut utiliser des cookies techniques nécessaires à son fonctionnement. Les liens vers Amazon.fr
            génèrent des cookies de tracking liés au programme d&apos;affiliation, soumis à la{" "}
            <a href="https://www.amazon.fr/gp/help/customer/display.html?nodeId=201909010" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              politique de confidentialité d&apos;Amazon
            </a>.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">7. Protection des données (RGPD)</h2>
          <p>Conformément au RGPD, vous disposez des droits d&apos;accès, rectification, effacement, limitation, portabilité et opposition concernant vos données personnelles.</p>
          <p className="mt-2">Ce site ne collecte pas directement de données personnelles. Pour exercer vos droits : <a href="mailto:contact@meilleure-poussette.fr" className="text-blue-600 hover:underline">contact@meilleure-poussette.fr</a></p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">8. Droit applicable</h2>
          <p>Les présentes mentions sont régies par le droit français. En cas de litige, les tribunaux français sont compétents.</p>
          <p className="mt-4 text-gray-400 italic text-xs">Dernière mise à jour : février 2026</p>
        </section>

      </div>
    </div>
  );
}
