const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', nav.classList.contains('open'));
  });
}
document.querySelectorAll('.year').forEach(el => el.textContent = new Date().getFullYear());

const header = document.querySelector('.site-header');
if (header) {
  const updateHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 24);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });
}

document.querySelectorAll('.article-toggle').forEach(toggle => {
  toggle.addEventListener('click', () => {
    const body = toggle.previousElementSibling;
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    body.hidden = isOpen;
    toggle.setAttribute('aria-expanded', String(!isOpen));
    toggle.firstChild.textContent = isOpen ? 'Leggi di più ' : 'Chiudi ';
  });
});

const moreArticles = document.querySelector('.more-articles');
const additionalArticles = document.querySelector('.additional-articles');
if (moreArticles && additionalArticles) {
  moreArticles.addEventListener('click', () => {
    const isOpen = moreArticles.getAttribute('aria-expanded') === 'true';
    additionalArticles.hidden = isOpen;
    moreArticles.setAttribute('aria-expanded', String(!isOpen));
    moreArticles.firstChild.textContent = isOpen ? 'Altro ' : 'Nascondi ';
  });
}

const articleDetails = {
  domande: {
    category: 'Riflessioni · Relazioni', title: 'Trauma e genitorialità', date: '10.10.2026', number: '01', image: 'image-quiet',
    paragraphs: [
      'Diventare genitori significa anche confrontarsi, spesso per la prima volta in modo molto intenso, con la propria storia. Nel rapporto con un figlio possono riemergere emozioni, paure, modalità relazionali e rappresentazioni che affondano le proprie radici nell\'infanzia.',
      'È anche da qui che nasce il legame tra **trauma infantile e genitorialità**.',
      'La genitorialità, infatti, non nasce nel momento in cui nasce un figlio. È un processo che si costruisce nel corso della vita, attraverso le esperienze familiari, le relazioni significative e i modelli genitoriali interiorizzati. Come sottolinea Aloi (2017), ogni individuo, prima ancora di essere genitore, è stato figlio e ha sviluppato una propria rappresentazione di cosa significhi essere accudito, protetto e riconosciuto.',
      '## Quando l\'infanzia continua a parlare nel presente',
      'Il trauma infantile non coincide necessariamente con un singolo evento eccezionale. Può derivare da esperienze improvvise, come una perdita, una violenza o un\'aggressione, ma anche da situazioni ripetute nel tempo: trascuratezza, distanza emotiva, conflitti familiari, inversione dei ruoli o mancata risposta ai bisogni del bambino.',
      'In queste situazioni può venire compromesso il senso di sicurezza e di prevedibilità del bambino, con conseguenze sulla regolazione delle emozioni, sull\'autostima e sulle relazioni interpersonali (Simonetta, 2018; Williams, 2008).',
      'Un elemento particolarmente importante riguarda il rapporto con il caregiver. Il bambino ha bisogno di una figura capace di rispondere al suo disagio in maniera sufficientemente sensibile e coerente. Quando questo accade, la relazione può diventare una **base sicura**, dalla quale il bambino può esplorare il mondo e alla quale può tornare nei momenti di difficoltà (Bowlby, 2000; Baiardini & Sicuro, 2017).',
      'Quando invece la figura che dovrebbe offrire protezione è contemporaneamente fonte di paura, imprevedibilità o assenza emotiva, il bambino può trovarsi davanti a una contraddizione difficile da integrare.',
      '## Il trauma può influenzare il modo di essere genitori',
      'Un adulto che ha vissuto esperienze traumatiche durante l\'infanzia può portare con sé modalità di risposta sviluppate allora per adattarsi a quelle esperienze. Diventando genitore, alcune di queste modalità possono riattivarsi all\'interno della relazione con il figlio.',
      'La paura, ad esempio, può trasformarsi in un bisogno di controllare eccessivamente l\'ambiente del bambino. Un\'esperienza di abbandono può rendere particolarmente difficile tollerare la distanza. Al contrario, chi è cresciuto in un ambiente emotivamente distante può incontrare difficoltà nel riconoscere e rispondere ai bisogni affettivi del proprio figlio.',
      'Questo non significa che chi ha vissuto un trauma sia destinato a diventare un genitore disfunzionale. Significa piuttosto che **le esperienze non elaborate possono influenzare il modo in cui interpretiamo ciò che accade nella relazione con i nostri figli**.',
      'La tesi evidenzia proprio questo possibile passaggio: un trauma non elaborato può compromettere la disponibilità emotiva del genitore e rendere più difficile l\'esercizio di alcune funzioni genitoriali (Schützenberger, 2010).',
      '## La trasmissione intergenerazionale: ciò che passa senza essere raccontato',
      'Nelle famiglie non vengono trasmessi soltanto ricordi e valori esplicitamente raccontati. Possono passare anche modalità relazionali, paure, aspettative e conflitti che non hanno trovato una piena elaborazione.',
      'È questo uno degli aspetti affrontati dal **modello transgenerazionale**. Quando un\'esperienza traumatica rimane inespressa o non elaborata, può continuare a esercitare la propria influenza sulle generazioni successive attraverso le relazioni e i significati attribuiti alle esperienze familiari (Abraham & Torok, 1993; Baldascini, 2012).',
      'Il **genogramma familiare** può essere uno strumento utile proprio per rendere visibili queste dinamiche. Attraverso la rappresentazione della storia familiare e delle relazioni tra i suoi membri, permette di osservare eventi, legami, ricorrenze e possibili schemi che attraversano più generazioni (Montàgano & Pazzagli, 2002).',
      'Guardare alla propria storia familiare non significa, quindi, cercare colpevoli. Significa provare a comprendere **da dove arrivano alcune modalità di stare nelle relazioni**.',
      '## Dal ripetere al trasformare',
      'Uno degli aspetti più importanti è che la trasmissione intergenerazionale non deve essere interpretata come un destino inevitabile.',
      'La consapevolezza può rappresentare un primo passaggio per interrompere la ripetizione automatica di alcuni schemi. Riconoscere ciò che appartiene alla propria storia permette infatti di distinguere il passato dal presente e di costruire modalità relazionali differenti con i propri figli.',
      'In questa prospettiva, anche la relazione di attaccamento può assumere un ruolo protettivo. Un ambiente stabile, sensibile e accogliente può sostenere il bambino nello sviluppo della capacità di regolare le emozioni e di costruire una rappresentazione di sé come persona degna di cura e amore (Baiardini & Sicuro, 2017; Stern, 1987).',
      'Anche per il genitore, lavorare sulle proprie esperienze può diventare quindi un\'occasione per modificare ciò che viene portato nella relazione. La tesi prende in considerazione, tra gli strumenti terapeutici, l\'EMDR, l\'Internal Family Systems e l\'approccio sistemico-relazionale, sottolineando in particolare la necessità di considerare non soltanto il singolo individuo, ma anche il sistema di relazioni nel quale è inserito.',
      '## La domanda non è "che genitore sono?", ma "che cosa porto nella relazione?"',
      'Il rapporto tra trauma e genitorialità invita a spostare lo sguardo dal giudizio alla comprensione.',
      'Un genitore porta nella relazione con il proprio figlio la propria storia, comprese le esperienze dolorose. Ma proprio perché quella storia può essere conosciuta, raccontata ed elaborata, non è necessariamente destinata a essere ripetuta.',
      'Prendersi cura della propria storia significa, in questo senso, prendersi cura anche della relazione con i propri figli.',
      'Il lavoro sul trauma può diventare così non soltanto un percorso individuale, ma anche un modo per interrogare ciò che attraversa le generazioni e creare nuove possibilità relazionali. Non per cancellare il passato, ma per fare in modo che il passato non debba continuare a parlare attraverso il presente.',
      '## Bibliografia',
      'Abraham, N. & Torok, M. (1993). La scorza e il nocciolo. Boria.',
      'Aloi, G. (2017). Genitorialità: funzioni e disfunzioni. Il Pennino.',
      'Baiardini, I. & Sicuro, F. (2017). Mary Ainsworth, Mary Main. Strange Situation e teoria dell’attaccamento. Capire la psicologia.',
      'Baldascini, L. (2012). Convegno sulla trasmissione transgenerazionale, Università degli Studi di Firenze.',
      'Bornstein, M. H. & Venuti, P. (2013). Genitorialità: fattori biologici e culturali dell’essere genitori. Il Mulino.',
      'Bowlby, J. (2000). Attaccamento e perdita. La separazione dalla madre (Vol. 2). Bollati Boringhieri.',
      'Schützenberger, A. A. (2010). Una malattia chiamata “genitori”. Di Renzo Editore.',
      'Simonetta, E. (2018). EMDR. Entrare nella memoria per curare il trauma infantile. San Paolo Edizioni.',
      'Stern, D. (1987). Il mondo interpersonale del bambino. Bollati Boringhieri.',
      'Williams, R. (a cura di) (2008). Trauma e relazioni. Le prospettive scientifiche e cliniche contemporanee. Raffaello Cortina Editore.'
    ]
  },
  corpo: {
    category: 'Consapevolezza · Emozioni', title: 'Complesso di superiorità', date: '26.10.2026', number: '02', image: 'image-window',
    paragraphs: [
      'Sentirsi superiori agli altri non significa necessariamente sentirsi sicuri di sé. Nella prospettiva di Alfred Adler, dietro un atteggiamento di superiorità può nascondersi proprio il contrario: un profondo sentimento di inferiorità, insicurezza o inadeguatezza.',
      'È uno dei passaggi più interessanti della Psicologia Individuale, perché permette di guardare alcuni comportamenti apparentemente arroganti o competitivi da una prospettiva diversa: non soltanto ciò che la persona mostra, ma anche ciò che potrebbe cercare di compensare.',
      '## Dall’inferiorità alla superiorità',
      'Per Adler il sentimento di inferiorità è una condizione comune all’essere umano. Il bambino, nei primi anni di vita, si trova in una posizione di dipendenza rispetto agli adulti e sperimenta inevitabilmente un senso di inadeguatezza di fronte a un mondo che ancora non conosce.',
      'Questo sentimento può diventare una spinta alla crescita. L’individuo cerca di superare le proprie difficoltà, acquisire sicurezza e raggiungere una condizione che percepisce come migliore. Adler definisce questa direzione aspirazione alla superiorità, intesa come tensione verso il superamento del senso di inferiorità e verso una maggiore realizzazione personale (Ansbacher & Ansbacher, 1997; Ansbacher & Ansbacher, 2008).',
      'L’aspirazione alla superiorità, quindi, non coincide di per sé con il desiderio di dominare gli altri. Può rappresentare una normale spinta evolutiva: migliorarsi, affrontare gli ostacoli e cercare una maggiore sicurezza.',
      'Il problema nasce quando questa spinta prende una direzione differente.',
      '## Quando la superiorità diventa una compensazione',
      'Nella teoria adleriana, l’individuo mette in atto delle compensazioni per fronteggiare il sentimento di inferiorità. Queste strategie possono aiutarlo a trovare un equilibrio e a superare una condizione percepita come insufficiente (Parenti, 1987).',
      'Quando però il bisogno di sentirsi superiori diventa eccessivo, può trasformarsi in una modalità rigida di rapporto con sé stessi e con gli altri.',
      'La persona può avere bisogno di dimostrare continuamente il proprio valore, di prevalere, di avere ragione o di occupare una posizione di vantaggio. La superiorità diventa allora meno legata alla crescita personale e più legata alla necessità di compensare una percezione di sé fragile.',
      'È questa la differenza fondamentale: voler diventare migliori non è la stessa cosa che aver bisogno di sentirsi migliori degli altri.',
      '## Il bambino e la ricerca di attenzione',
      'Adler osserva il fenomeno anche attraverso l’esperienza infantile. Il bambino cerca naturalmente l’attenzione degli adulti e può sviluppare modalità diverse per conquistare riconoscimento e valorizzazione.',
      'Quando il bisogno di sentirsi importante prende una direzione disfunzionale, alcuni comportamenti possono diventare strumenti attraverso cui il bambino cerca di affermare la propria superiorità. Nella tesi viene riportato, a questo proposito, l’esempio adleriano del bambino che ruba e che può vivere il fatto di non essere scoperto come una prova della propria astuzia e superiorità (Ansbacher & Sodini, 2012).',
      'Questo esempio permette di comprendere un principio importante della Psicologia Individuale: il comportamento non va osservato soltanto per ciò che appare, ma anche in relazione alla meta che il soggetto cerca di raggiungere attraverso quel comportamento.',
      '## Superiorità e competizione',
      'Un altro elemento centrale è il rapporto tra superiorità e competizione.',
      'Adler distingue competizione e cooperazione come due possibili direzioni dell’agire umano. La competizione tende verso la supremazia e verso il raggiungimento individuale dell’obiettivo; la cooperazione, invece, si fonda sulla condivisione e sulla capacità di agire insieme agli altri (Rovera, 2014).',
      'Questa distinzione diventa particolarmente significativa durante l’infanzia.',
      'Un bambino che vive ogni relazione come una gara può imparare a interpretare il valore personale attraverso il confronto: essere più bravo, più forte, più intelligente o più riconosciuto degli altri. Al contrario, un contesto educativo che valorizza la collaborazione può aiutarlo a scoprire che il proprio valore non dipende necessariamente dalla sconfitta o dalla vittoria dell’altro.',
      '## Il ruolo dell’educazione',
      'È proprio qui che famiglia e scuola assumono un ruolo importante.',
      'Per Adler, il sentimento sociale, cioè la capacità di cooperare, di appartenere e di considerare gli altri, possiede una componente innata ma deve essere sviluppato anche attraverso l’educazione. La prima relazione con la madre e, successivamente, l’incontro con altre figure e altri contesti contribuiscono alla costruzione del modo in cui il bambino si rapporterà agli altri (Rovera, 2014).',
      'L’obiettivo educativo non dovrebbe quindi essere semplicemente quello di eliminare la competitività o impedire al bambino di desiderare di riuscire. Piuttosto, si tratta di orientare il bisogno di affermazione verso forme di crescita compatibili con la cooperazione.',
      'La scuola può diventare, in questo senso, un importante laboratorio relazionale. Il Cooperative Learning, approfondito nella tesi, propone situazioni nelle quali il raggiungimento dell’obiettivo dipende dalla partecipazione dei diversi membri del gruppo. L’interdipendenza positiva, il confronto e le abilità relazionali permettono al bambino di sperimentare concretamente una modalità di successo non fondata sulla supremazia individuale (Varriale et al., 1997).',
      '## Non tutto ciò che appare come forza nasce dalla sicurezza',
      'Il complesso di superiorità, letto attraverso la Psicologia Individuale di Adler, invita dunque a una riflessione più ampia.',
      'Dietro la necessità di primeggiare può esserci il tentativo di allontanarsi da una sensazione di inferiorità. Dietro l’arroganza può esserci insicurezza. Dietro la competizione costante può esserci il bisogno di dimostrare il proprio valore.',
      'Questo non significa che ogni persona competitiva o sicura di sé nasconda necessariamente un senso di inferiorità. Significa piuttosto che, nella prospettiva adleriana, il comportamento acquista significato quando viene collegato alla storia della persona, al suo stile di vita e alla meta verso cui tende (Marasco, 2005; Ansbacher & Ansbacher, 2008).',
      'Forse, allora, la domanda educativa più utile non è soltanto: “Come faccio a far smettere questo bambino di voler essere il migliore?”',
      'Può essere: “Di che cosa ha bisogno per non dover dimostrare continuamente di esserlo?”',
      '## Riferimenti bibliografici',
      'Adler, A. (1929). La Psicologia Individuale nella scuola, psicologia dell’educazione, psicologia del bambino difficile. Trad. it. Grandi tascabili economici. 1993.',
      'Ansbacher, H. K., & Ansbacher, R. R. (a cura di) (2008). Aspirazione alla superiorità e sentimento comunitario. Edizioni Universitarie Romane.',
      'Ansbacher, H. L., & Ansbacher, R. R. (1997). La Psicologia Individuale di Alfred Adler. G. Martinelli.',
      'Ansbacher, H. L., & Sodini, U. (a cura di) (2012). La scienza del vivere. EUR.',
      'Marasco, E. E. (a cura di) (2005). La tecnica della Psicologia Individuale. Newton Compton.',
      'Parenti, F. (1987). Alfred Adler: l’uomo, il pensiero, l’eredità culturale. Laterza.',
      'Rovera, G. G. (2014). Competizione / cooperazione. Rivista di Psicologia Individuale, n. 75, 5-15.',
      'Varriale, C., Baiano, T., Garribba, G. & Orlando, R. (1997). Il “Cooperative learning”: un metodo per l’apprendimento disciplinare e per l’educazione del sentimento sociale. Rivista di Psicologia Individuale, n. 41, 47-54.'
    ]
  },
  eredita: {
    category: 'Legami · Famiglia', title: 'Le eredità invisibili che ci accompagnano', date: '7.11.2026', number: '03', image: 'image-hands',
    paragraphs: [
      'Ci sono esperienze che appartengono al passato, ma che continuano a vivere nel presente. Un lutto, un abbandono, una violenza, una perdita improvvisa o un’esperienza profondamente traumatica possono lasciare una traccia che non si esaurisce con la persona che le ha vissute. In alcuni casi, infatti, ciò che non è stato elaborato può influenzare anche le generazioni successive, entrando nelle relazioni familiari e, in particolare, nel modo di essere genitori.',
      'È questo il tema del **trauma transgenerazionale**, una prospettiva che invita a guardare alla sofferenza individuale anche attraverso la storia della famiglia.',
      '## Il trauma non finisce necessariamente con chi lo ha vissuto',
      'Ogni famiglia costruisce nel tempo una propria storia, fatta di relazioni, eventi, perdite, risorse e modalità di affrontare le difficoltà. Alcune esperienze vengono raccontate e condivise, altre invece rimangono inespresse, diventando veri e propri silenzi familiari.',
      'Secondo la prospettiva ripresa nella tesi, un evento traumatico non elaborato può essere trasmesso alle generazioni successive non necessariamente attraverso un racconto esplicito, ma anche attraverso **paure, conflitti, comportamenti e modalità relazionali** che continuano a riproporsi nel tempo (Scabini & Cigoli, 2012).',
      'In questa prospettiva, il passato familiare può continuare a esercitare la propria influenza anche quando non viene nominato.',
      'Abraham e Torok (1993) hanno approfondito proprio il tema dei traumi e dei vissuti non elaborati che possono rimanere presenti nella storia familiare. Il segreto, il non detto e ciò che non trova uno spazio di elaborazione possono diventare parte della trama relazionale della famiglia.',
      '## Quando il passato entra nella genitorialità',
      'Uno degli aspetti più significativi riguarda il rapporto tra trauma e genitorialità.',
      'Diventare genitori significa anche confrontarsi, consapevolmente o meno, con il modello di genitorialità sperimentato nella propria famiglia d’origine. Le esperienze vissute durante l’infanzia contribuiscono infatti alla costruzione delle rappresentazioni che una persona sviluppa rispetto alle relazioni, alla sicurezza e alla cura (Greco & Maniglio, 2019; Santrock, 2021).',
      'Quando nella propria storia sono presenti esperienze traumatiche non elaborate, queste possono influenzare il modo in cui il genitore interpreta ciò che accade nella relazione con il figlio.',
      'Una situazione normale può essere percepita come pericolosa. Un comportamento del bambino può suscitare una paura sproporzionata. Il bisogno di proteggere può trasformarsi in un controllo molto intenso.',
      'Come evidenziato nella tesi, esperienze passate vissute come spaventose o traumatiche possono portare il genitore a leggere alcune situazioni del presente attraverso la lente del proprio passato, arrivando anche a mettere in atto modalità di protezione eccessiva guidate dalla paura (Schützenberger, 2010; Romagnoni, 2019; Aloi, 2017).',
      'Il bambino, così, può diventare inconsapevolmente il punto attraverso cui si riattivano vissuti che appartengono alla storia del genitore.',
      '## Il bambino può ereditare una paura che non gli appartiene',
      'Uno degli aspetti più delicati del trauma transgenerazionale è proprio questo: **il figlio può trovarsi a vivere emozioni e paure che hanno radici nella storia della generazione precedente**.',
      'Non significa che il trauma venga trasmesso in modo automatico o inevitabile. Piuttosto, la storia familiare può influenzare il modo in cui vengono costruite le relazioni e interpretate le esperienze.',
      'Una madre che ha vissuto un forte abbandono, per esempio, potrebbe sviluppare una particolare sensibilità alla separazione. Un genitore che ha sperimentato un ambiente imprevedibile potrebbe avere un bisogno molto elevato di controllare ciò che accade intorno al proprio figlio.',
      'In questi casi, il comportamento genitoriale può avere una funzione comprensibile: proteggere il bambino da qualcosa che, nella storia del genitore, è stato realmente doloroso o pericoloso. Tuttavia, quando il passato rimane non elaborato, il rischio è che la protezione del figlio venga guidata più dalla paura dell’adulto che dai bisogni reali del bambino (Aloi, 2017).',
      '## Il genogramma: guardare la storia per comprendere il presente',
      'Per comprendere questi processi, la tesi propone particolare attenzione al **genogramma**, uno strumento che permette di rappresentare la storia familiare e le relazioni tra le diverse generazioni.',
      'Non si tratta semplicemente di costruire un albero genealogico. Il genogramma consente di osservare eventi, legami, separazioni, perdite e dinamiche relazionali, aiutando a individuare eventuali ricorrenze e connessioni tra ciò che è accaduto nel passato e ciò che si manifesta nel presente (Montàgano & Pazzagli, 2002).',
      'Guardare la storia familiare può quindi aiutare a dare un significato a ciò che, altrimenti, rischia di apparire incomprensibile.',
      'Un’ansia particolarmente intensa, una difficoltà nella separazione, una modalità iperprotettiva o una certa rigidità nella relazione con il figlio possono assumere un significato diverso quando vengono collocate all’interno della storia delle generazioni precedenti.',
      '## Conoscere il passato non significa esserne prigionieri',
      'Parlare di trasmissione transgenerazionale non significa pensare a un destino già scritto.',
      'Al contrario, riconoscere l’origine di alcuni vissuti può rappresentare il primo passo per interrompere la loro ripetizione.',
      'La possibilità di elaborare un trauma consente infatti di distinguere ciò che appartiene alla propria storia da ciò che appartiene alla relazione con il figlio. Il passato può continuare a essere parte della propria identità senza dover necessariamente determinare il presente.',
      'In questo senso, la genitorialità può diventare anche uno spazio di trasformazione: ciò che è stato ricevuto può essere riconosciuto, compreso e, quando necessario, rielaborato.',
      'L’obiettivo non è cancellare la storia familiare, ma **impedire che ciò che non è stato elaborato continui a parlare attraverso le generazioni**.',
      '## La possibilità di interrompere la trasmissione',
      'Il trauma transgenerazionale ci invita quindi a porci una domanda importante: *quanto di ciò che viviamo oggi appartiene realmente al presente e quanto, invece, porta con sé qualcosa della nostra storia familiare?*',
      'Riconoscere questa differenza può essere particolarmente importante nella relazione genitore-figlio. La consapevolezza permette infatti di osservare le proprie reazioni, interrogarsi sulle loro origini e costruire modalità relazionali più sicure.',
      'Come emerge dalla tesi, un legame caratterizzato da sicurezza, stabilità e disponibilità emotiva può rappresentare un importante elemento protettivo per il bambino. L’elaborazione delle esperienze traumatiche del genitore può quindi contribuire non soltanto al benessere dell’adulto, ma anche alla possibilità di costruire una relazione più libera con il proprio figlio.',
      'Il trauma può attraversare le generazioni, ma anche la sua elaborazione può diventare un’eredità. La storia familiare non può essere cambiata, ma il modo in cui viene compresa e integrata nel presente può trasformare ciò che verrà trasmesso.',
      '## Riferimenti bibliografici',
      '* Abraham, N., & Torok, M. (1993). *La scorza e il nocciolo*. Borla.',
      '* Aloi, G. (2017). *[riferimento bibliografico presente nella tesi]*.',
      '* Greco, A., & Maniglio, R. (2019). *[riferimento bibliografico presente nella tesi]*.',
      '* Montàgano, S., & Pazzagli, A. (2002). *Il genogramma. Teatro di alchimie familiari*. FrancoAngeli.',
      '* Romagnoni, M. (2019). *[riferimento bibliografico presente nella tesi]*.',
      '* Scabini, E., & Cigoli, V. (2012). *Il famigliare. Legami, simboli e transizioni*. Raffaello Cortina Editore.'
    ]
  },
  spazio: {
    category: 'Riflessioni · Benessere', title: 'Imparare a prendersi spazio', date: '18.12.2023', number: '04', image: 'image-quiet',
    paragraphs: ['Riconoscere i propri bisogni è un gesto di cura e un primo passo verso relazioni più consapevoli.', 'Prendersi spazio non significa allontanarsi dagli altri, ma riconoscere il proprio ritmo, i propri limiti e ciò che ci fa stare bene.', 'Quando impariamo a dare valore ai nostri bisogni, anche le relazioni possono diventare più autentiche e rispettose.']
  }
};
const detailPage = document.querySelector('#article-detail');
if (detailPage) {
  const article = articleDetails[new URLSearchParams(window.location.search).get('id')] || articleDetails.domande;
  document.title = `${article.title} — Simona Virdieri`;
  document.querySelector('#detail-title').textContent = article.title;
  document.querySelector('#detail-content').innerHTML = article.paragraphs.map(paragraph => {
    if (paragraph.startsWith('## ')) return `<h2>${paragraph.slice(3)}</h2>`;
    const formatted = paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    return `<p>${formatted}</p>`;
  }).join('');
}

const revealItems = document.querySelectorAll('.numbered-section, .page-intro, .inner-section, .full-article, .project-hero, .contact-page, .article-detail');
if ('IntersectionObserver' in window && revealItems.length) {
  document.documentElement.classList.add('reveal-ready');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach(item => revealObserver.observe(item));
}
