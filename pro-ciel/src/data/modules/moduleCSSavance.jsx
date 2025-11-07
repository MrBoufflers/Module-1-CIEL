import React from 'react';
import Heading from '../../components/atoms/Heading';
import Card from '../../components/atoms/Card';

// Molécule pour un exemple de code
const CodeExample = ({ title, code, language = 'html' }) => (
    <div className="my-6 not-prose">
        <h4 className="font-semibold text-gray-800">{title}</h4>
        <pre className={`mt-2 text-sm bg-gray-800 text-white p-4 rounded-lg overflow-x-auto`}><code className={`language-${language}`}>{code.trim()}</code></pre>
    </div>
);

export const CSSSelectorsCourse = { 
 course :(
    <div className="space-y-12 prose prose-lg max-w-none prose-headings:font-bold prose-h2:border-b prose-h2:pb-2">
      
      <section>
        <Heading level={1} className="mb-4">Point Cours CSS : Les Sélecteurs Combinés</Heading>
        <p className="text-xl text-gray-600">Vous savez déjà cibler des éléments par leur balise (<code>p</code>), leur classe (<code>.card</code>) ou leur ID (<code>#titre</code>). La vraie puissance du CSS vient de la capacité à **combiner** ces sélecteurs pour être incroyablement précis.</p>
        <p>Maîtriser ces combinaisons est essentiel. Une espace en trop ou en moins change radicalement ce que vous ciblez.</p>
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        <Card className="not-prose">
            <Heading level={3} className="!mt-0">1. Le Sélecteur Chaîné (Sans Espace)</Heading>
            <p className="text-sm"><strong>Syntaxe :</strong> <code>A.B</code> (ex: <code>body.dark-mode</code>)</p>
            <p className="text-sm mt-2"><strong>Ce que ça cible :</strong> Un élément qui est à la fois `A` **ET** qui possède la classe `B`. Les deux conditions doivent être vraies sur **le même élément**. C'est un "ET" logique.</p>
            <CodeExample title="Exemple HTML" code={`
<!-- Est-ce que cet élément est <body> ET a la classe .dark-mode ? OUI. -->
<body class="dark-mode"> 
    ...
</body>
            `} />
            <CodeExample title="Exemple CSS" language="css" code={`
/* Cible l'élément <body> LUI-MÊME,
   mais SEULEMENT s'il a la classe .dark-mode */
body.dark-mode {
  background-color: #333;
  color: white;
}
            `} />
        </Card>
        
        <Card className="not-prose">
            <Heading level={3} className="!mt-0">2. Le Sélecteur de Descendant (Avec Espace)</Heading>
            <p className="text-sm"><strong>Syntaxe :</strong> <code>A B</code> (ex: <code>body .card</code>)</p>
            <p className="text-sm mt-2"><strong>Ce que ça cible :</strong> Un élément `B` qui se trouve **n'importe où à l'intérieur** d'un élément `A`. `B` est un descendant de `A` (enfant, petit-enfant, etc.).</p>
            <CodeExample title="Exemple HTML" code={`
<body> 
    <header>
        <!-- Ce .card est ciblé -->
        <div class="card">...</div> 
    </header>
    <main>
        <div>
            <!-- Ce .card est aussi ciblé -->
            <div class="card">...</div>
        </div>
    </main>
</body>
            `} />
            <CodeExample title="Exemple CSS" language="css" code={`
/* Cible TOUS les éléments .card qui sont
   à l'intérieur de <body> */
body .card {
  background-color: #EEE;
}
            `} />
        </Card>

        <Card className="not-prose">
            <Heading level={3} className="!mt-0">3. Le Sélecteur d'Enfant Direct (Avec <code>{'>'}</code>)</Heading>
            <p className="text-sm"><strong>Syntaxe :</strong> <code>A {'>'} B</code> (ex: <code>header {'>'} nav</code>)</p>
            <p className="text-sm mt-2"><strong>Ce que ça cible :</strong> Un élément `B` qui est un **enfant direct** de `A` (juste un niveau en dessous). Il ne ciblera pas les "petits-enfants".</p>
            <CodeExample title="Exemple HTML" code={`
<header> 
    <!-- Ce <nav> est un enfant direct. Il est ciblé. -->
    <nav>...</nav> 
    
    <div>
        <!-- Ce <nav> N'EST PAS un enfant direct. Il n'est pas ciblé. -->
        <nav>...</nav>
    </div>
</header>
            `} />
            <CodeExample title="Exemple CSS" language="css" code={`
/* Cible uniquement les <nav> qui sont
   directement enfants de <header> */
header > nav {
  border-bottom: 1px solid blue;
}
            `} />
        </Card>

        <Card className="not-prose">
            <Heading level={3} className="!mt-0">4. Le Sélecteur de Frère Adjacent (Avec `+`)</Heading>
            <p className="text-sm"><strong>Syntaxe :</strong> <code>A + B</code> (ex: <code>h2 + p</code>)</p>
            <p className="text-sm mt-2"><strong>Ce que ça cible :</strong> Un élément `B` qui est un "frère" (au même niveau dans le HTML) et qui se trouve **immédiatement après** un élément `A`.</p>
            <CodeExample title="Exemple HTML" code={`
<h2>Un titre</h2>
<!-- Ce <p> est juste après le h2. Il est ciblé. -->
<p>Premier paragraphe.</p> 

<!-- Ce <p> n'est pas "immédiatement" après le h2. Il n'est pas ciblé. -->
<p>Deuxième paragraphe.</p>
            `} />
            <CodeExample title="Exemple CSS" language="css" code={`
/* Cible le <p> qui suit directement un <h2>
   (parfait pour enlever la marge du haut) */
h2 + p {
  margin-top: 0;
}
            `} />
        </Card>
      </section>

      <section>
        <Heading level={2}>Synthèse : L'Exemple du TP</Heading>
        <p>Dans le TP, vous avez vu ce sélecteur :</p>
        <CodeExample title="Le sélecteur du TP" language="css" code={`
body.dark-mode .card {
  background-color: #34495e;
}
        `} />
        <p>Maintenant, nous pouvons le décomposer et le lire en français :</p>
        <Card className="bg-gray-100 not-prose">
            <p>"Cible tous les éléments ayant la classe <code>.card</code>... (Sélecteur de Descendant : Espace) ...qui se trouvent à l'intérieur d'un élément <code>body</code>... (Sélecteur Chaîné : Sans Espace) ...qui possède **aussi** la classe <code>.dark-mode</code>."</p>
        </Card>
      </section>

    </div>
  )};
