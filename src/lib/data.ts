
import type { Curriculum } from './types';

export const curriculum: Curriculum = {
  levels: [
    {
      id: 'a1',
      title: 'Уровень A1: Начинающий',
      description: 'Основы для уверенного старта. Вы научитесь представляться, вести простые диалоги, понимать базовые фразы и строить предложения в настоящем времени.',
      topics: [
        {
          id: 'personal-info-und-familie',
          title: 'Знакомство, личная информация и семья',
          explanation: `
            <h2 class="font-headline text-2xl font-bold mb-4">Основы общения</h2>
            <p class="mb-4">Самые первые и важные фразы для любого разговора. Учимся здороваться, прощаться и представляться.</p>
            <ul class="list-disc list-inside space-y-2 mb-6 bg-muted p-4 rounded-lg">
              <li><strong>Приветствия:</strong> Hallo, Guten Morgen, Guten Tag, Guten Abend</li>
              <li><strong>Прощания:</strong> Tschüss, Auf Wiedersehen</li>
              <li><strong>Вопросы о самочувствии:</strong> Wie geht es Ihnen? / Wie geht's? - Gut, danke.</li>
            </ul>

            <h2 class="font-headline text-2xl font-bold mb-4">Представление себя и других</h2>
            <p class="mb-4">Учимся говорить, как нас зовут, откуда мы и на каком языке говорим. Здесь мы впервые сталкиваемся с падежом <strong class="text-primary">Nominativ</strong> (Именительный), который отвечает на вопросы "Кто? Что?" (<strong class="text-primary">Wer? Was?</strong>) и обозначает подлежащее.</p>
            <ul class="list-disc list-inside space-y-2 mb-6 bg-muted p-4 rounded-lg">
              <li><strong>Wie heißen Sie? / Wie heißt du?</strong> - Как Вас/тебя зовут?</li>
              <li><strong>Ich heiße... / Mein Name ist...</strong> - Меня зовут... / Моё имя...</li>
              <li><strong>Woher kommen Sie? / Woher kommst du?</strong> - Откуда Вы/ты?</li>
              <li><strong>Ich komme aus Russland.</strong> - Я из России.</li>
              <li><strong>Welche Sprachen sprechen Sie?</strong> - На каких языках Вы говорите?</li>
              <li><strong>Ich spreche Russisch und ein bisschen Deutsch.</strong> - Я говорю по-русски и немного по-немецки.</li>
            </ul>

            <h2 class="font-headline text-2xl font-bold mb-4">Семья и личные данные</h2>
            <p class="mb-4">Рассказываем о своей семье. Здесь нам понадобятся притяжательные местоимения.</p>
            <ul class="list-disc list-inside space-y-2 mb-6 p-4 bg-muted rounded-lg">
              <li><strong>Das ist meine Familie.</strong> - Это моя семья.</li>
              <li><strong>Mein Vater, meine Mutter, mein Bruder, meine Schwester.</strong> - Мой отец, моя мать, мой брат, моя сестра.</li>
              <li><strong>Sind Sie verheiratet?</strong> - Вы женаты/замужем? - Ja, ich bin verheiratet. / Nein, ich bin ledig.</li>
              <li><strong>Haben Sie Kinder?</strong> - У Вас есть дети? - Ja, ich habe einen Sohn und eine Tochter.</li>
            </ul>

            <h3 class="font-headline text-xl font-semibold mt-6 mb-2">Грамматика: Притяжательные местоимения</h3>
            <p class="mb-4">Притяжательные местоимения (мой, твой, его...) показывают принадлежность и согласуются с родом существительного.</p>
            <div class="overflow-x-auto">
              <table class="w-full text-left border-collapse my-4">
                <thead><tr class="bg-muted/50"><th class="border p-3"></th><th class="border p-3">муж.р. (der)</th><th class="border p-3">жен.р. (die)</th><th class="border p-3">сред.р. (das)</th></tr></thead>
                <tbody>
                  <tr><td class="border p-3 font-medium">ich</td><td class="border p-3">mein</td><td class="border p-3">meine</td><td class="border p-3">mein</td></tr>
                  <tr><td class="border p-3 font-medium">du</td><td class="border p-3">dein</td><td class="border p-3">deine</td><td class="border p-3">dein</td></tr>
                  <tr><td class="border p-3 font-medium">er/es</td><td class="border p-3">sein</td><td class="border p-3">seine</td><td class="border p-3">sein</td></tr>
                  <tr><td class="border p-3 font-medium">sie</td><td class="border p-3">ihr</td><td class="border p-3">ihre</td><td class="border p-3">ihr</td></tr>
                </tbody>
              </table>
            </div>
          `,
          vocabulary: [
            {
              theme: 'Знакомство и семья',
              words: [
                { type: 'verb', german: 'heißen', russian: 'называться', conjugation: 'ich heiße, du heißt, er/sie/es heißt', example: 'Wie heißt du?' },
                { type: 'verb', german: 'kommen', russian: 'приходить, быть родом', conjugation: 'ich komme, du kommst, er/sie/es kommt', example: 'Woher kommen Sie?' },
                { type: 'verb', german: 'wohnen', russian: 'проживать', conjugation: 'ich wohne, du wohnst, er/sie/es wohnt', example: 'Ich wohne in Berlin.' },
                { type: 'verb', german: 'sprechen', russian: 'говорить', conjugation: 'ich spreche, du sprichst, er/sie/es spricht', example: 'Welche Sprachen sprichst du?' },
                { type: 'noun', german: 'Name', russian: 'имя', article: 'der', plural: 'Namen', pluralArticle: 'die', exampleSingular: 'Mein Name ist Klaus.', examplePlural: 'Die Namen der Schüler stehen auf der Liste.' },
                { type: 'noun', german: 'Sprache', russian: 'язык', article: 'die', plural: 'Sprachen', pluralArticle: 'die', exampleSingular: 'Deutsch ist eine schwere Sprache.', examplePlural: 'Welche Sprachen sprichst du?' },
                { type: 'noun', german: 'Familie', russian: 'семья', article: 'die', plural: 'Familien', pluralArticle: 'die', exampleSingular: 'Das ist meine Familie.', examplePlural: 'In Deutschland gibt es viele kleine Familien.' },
                { type: 'noun', german: 'Vater', russian: 'отец', article: 'der', plural: 'Väter', pluralArticle: 'die', exampleSingular: 'Mein Vater ist Arzt.', examplePlural: 'Die Väter treffen sich am Spielplatz.' },
                { type: 'noun', german: 'Mutter', russian: 'мать', article: 'die', plural: 'Mütter', pluralArticle: 'die', exampleSingular: 'Meine Mutter ist Lehrerin.', examplePlural: 'Die Mütter unterhalten sich.' },
                { type: 'noun', german: 'Sohn', russian: 'сын', article: 'der', plural: 'Söhne', pluralArticle: 'die', exampleSingular: 'Das ist mein Sohn.', examplePlural: 'Unsere Söhne gehen in dieselbe Klasse.' },
                { type: 'noun', german: 'Tochter', russian: 'дочь', article: 'die', plural: 'Töchter', pluralArticle: 'die', exampleSingular: 'Ihre Tochter ist 5 Jahre alt.', examplePlural: 'Er hat zwei Töchter.' },
                { type: 'noun', german: 'Bruder', russian: 'брат', article: 'der', plural: 'Brüder', pluralArticle: 'die', exampleSingular: 'Mein Bruder studiert in München.', examplePlural: 'Ich habe zwei Brüder.' },
                { type: 'noun', german: 'Schwester', russian: 'сестра', article: 'die', plural: 'Schwestern', pluralArticle: 'die', exampleSingular: 'Meine Schwester arbeitet als Ärztin.', examplePlural: 'Ihre Schwestern sind sehr nett.' },
                { type: 'noun', german: 'Hobby', russian: 'хобби', article: 'das', plural: 'Hobbys', pluralArticle: 'die', exampleSingular: 'Mein Hobby ist Lesen.', examplePlural: 'Was sind deine Hobbys?' },
                { type: 'adjective', german: 'verheiratet', russian: 'женат/замужем', comparative: '-', superlative: '-', example: 'Bist du verheiratet?' },
                { type: 'adjective', german: 'ledig', russian: 'холост/незамужняя', comparative: '-', superlative: '-', example: 'Nein, ich bin ledig.' },
              ]
            }
          ],
          exercises: []
        },
        {
          id: 'alltag-und-wohnen',
          title: 'Быт, дом и распорядок дня',
          explanation: `
            <h2 class="font-headline text-2xl font-bold mb-4">Дом и квартира</h2>
            <p class="mb-4">Учимся описывать, где мы живем, и называть комнаты и мебель. Используем предлоги места.</p>
            <ul class="list-disc list-inside space-y-2 mb-6 bg-muted p-4 rounded-lg">
              <li><strong>Типы жилья:</strong> das Haus (дом), die Wohnung (квартира), das Zimmer (комната).</li>
              <li><strong>Комнаты:</strong> die Küche (кухня), das Bad (ванная), das Schlafzimmer (спальня), das Wohnzimmer (гостиная).</li>
              <li><strong>Мебель:</strong> der Tisch (стол), der Stuhl (стул), das Bett (кровать), der Schrank (шкаф).</li>
              <li><strong>Описание:</strong> Meine Wohnung ist groß/klein. Das Zimmer hat ein Fenster.</li>
            </ul>

            <h2 class="font-headline text-2xl font-bold mb-4">Распорядок дня и время</h2>
            <p class="mb-4">Говорим о том, что мы делаем в течение дня. Здесь важны глаголы с отделяемыми приставками.</p>
            <ul class="list-disc list-inside space-y-2 mb-6 bg-muted p-4 rounded-lg">
              <li><strong>Время:</strong> Wie spät ist es? Es ist zehn Uhr. (10:00). Es ist halb elf (10:30).</li>
              <li><strong>Части дня:</strong> der Morgen (утро), der Abend (вечер). Am Morgen trinke ich Kaffee.</li>
              <li><strong>Дни недели:</strong> Montag, Dienstag, Mittwoch...</li>
              <li><strong>Распорядок:</strong> Ich <strong class="text-primary">stehe</strong> um 7 Uhr <strong class="text-primary">auf</strong>. Dann <strong class="text-primary">frühstücke</strong> ich. Ich <strong class="text-primary">kaufe</strong> im Supermarkt <strong class="text-primary">ein</strong>.</li>
            </ul>
            
            <h3 class="font-headline text-xl font-semibold mt-6 mb-2">Грамматика: Глаголы с отделяемыми приставками (Trennbare Verben)</h3>
            <p class="mb-4">У некоторых глаголов есть приставка, которая в простом предложении в Präsens "отделяется" и уходит в самый конец. Например: <strong class="text-primary">auf</strong>stehen, <strong class="text-primary">ein</strong>kaufen, <strong class="text-primary">an</strong>rufen.</p>
            <div class="bg-muted p-3 rounded-lg italic my-4">Ich <strong class="text-accent">rufe</strong> meine Freundin <strong class="text-primary">an</strong>. (Я звоню моей подруге.)</div>
          `,
          vocabulary: [
             {
              theme: 'Дом и повседневность',
              words: [
                { type: 'noun', german: 'Wohnung', russian: 'квартира', article: 'die', plural: 'Wohnungen', pluralArticle: 'die', exampleSingular: 'Ich suche eine neue Wohnung.', examplePlural: 'Die Wohnungen in diesem Haus sind teuer.' },
                { type: 'noun', german: 'Zimmer', russian: 'комната', article: 'das', plural: 'Zimmer', pluralArticle: 'die', exampleSingular: 'Mein Zimmer ist gemütlich.', examplePlural: 'Das Hotel hat 100 Zimmer.' },
                { type: 'noun', german: 'Küche', russian: 'кухня', article: 'die', plural: 'Küchen', pluralArticle: 'die', exampleSingular: 'Wir essen in der Küche.', examplePlural: 'Moderne Küchen sind sehr praktisch.' },
                { type: 'noun', german: 'Bett', russian: 'кровать', article: 'das', plural: 'Betten', pluralArticle: 'die', exampleSingular: 'Das Bett steht im Schlafzimmer.', examplePlural: 'Wir brauchen neue Betten für die Kinder.' },
                { type: 'noun', german: 'Tisch', russian: 'стол', article: 'der', plural: 'Tische', pluralArticle: 'die', exampleSingular: 'Der Tisch ist aus Holz.', examplePlural: 'Die Tische sind schon besetzt.' },
                { type: 'noun', german: 'Stuhl', russian: 'стул', article: 'der', plural: 'Stühle', pluralArticle: 'die', exampleSingular: 'Dieser Stuhl ist sehr bequem.', examplePlural: 'Wir brauchen noch zwei Stühle.' },
                { type: 'noun', german: 'Schrank', russian: 'шкаф', article: 'der', plural: 'Schränke', pluralArticle: 'die', exampleSingular: 'Der Schrank ist voll.', examplePlural: 'Die Schränke sind neu.' },
                { type: 'noun', german: 'Uhr', russian: 'час, часы', article: 'die', plural: 'Uhren', pluralArticle: 'die', exampleSingular: 'Es ist 8 Uhr.', examplePlural: 'Er sammelt alte Uhren.' },
                { type: 'noun', german: 'Morgen', russian: 'утро', article: 'der', plural: 'Morgen', pluralArticle: 'die', exampleSingular: 'Guten Morgen!', examplePlural: 'Die Morgen sind hier immer kühl.' },
                { type: 'noun', german: 'Abend', russian: 'вечер', article: 'der', plural: 'Abende', pluralArticle: 'die', exampleSingular: 'Was machst du heute Abend?', examplePlural: 'Wir verbringen die Abende oft zusammen.' },
                { type: 'verb', german: 'aufstehen', russian: 'вставать', conjugation: 'ich stehe auf, du stehst auf, er/sie/es steht auf', example: 'Wann stehst du normalerweise auf?' },
                { type: 'verb', german: 'einkaufen', russian: 'делать покупки', conjugation: 'ich kaufe ein, du kaufst ein, er/sie/es kauft ein', example: 'Am Samstag kaufe ich für die Woche ein.' },
                { type: 'verb', german: 'anrufen', russian: 'звонить по телефону', conjugation: 'ich rufe an, du rufst an, er/sie/es ruft an', example: 'Kannst du mich später anrufen?' },
                { type: 'verb', german: 'fernsehen', russian: 'смотреть телевизор', conjugation: 'ich sehe fern, du siehst fern, er/sie/es sieht fern', example: 'Abends sieht meine Familie oft fern.' },
                { type: 'verb', german: 'frühstücken', russian: 'завтракать', conjugation: 'ich frühstücke, du frühstückst, er/sie/es frühstückt', example: 'Wir frühstücken immer um 8 Uhr.' },
                { type: 'verb', german: 'arbeiten', russian: 'работать', conjugation: 'ich arbeite, du arbeitest, er/sie/es arbeitet', example: 'Mein Vater arbeitet bei Siemens.' },
              ]
            }
          ],
          exercises: []
        },
        {
          id: 'essen-und-einkaufen',
          title: 'Покупки, еда и напитки',
          explanation: `
            <h2 class="font-headline text-2xl font-bold mb-4">В магазине</h2>
            <p class="mb-4">Учимся покупать продукты и одежду. Здесь нам понадобится падеж <strong class="text-primary">Akkusativ</strong> (Винительный), который отвечает на вопросы "Кого? Что?" (<strong class="text-primary">Wen? Was?</strong>). Он используется для обозначения прямого объекта действия.</p>
            <ul class="list-disc list-inside space-y-2 mb-6 bg-muted p-4 rounded-lg">
              <li><strong>Что вы хотите?</strong> - Was möchten Sie?</li>
              <li><strong>Я хотел бы...</strong> - Ich möchte <strong class="text-accent">einen Apfel</strong>, <strong class="text-accent">eine Banane</strong> und <strong class="text-accent">ein Brot</strong>.</li>
              <li><strong>Вам нужно что-то еще?</strong> - Brauchen Sie noch etwas?</li>
              <li><strong>Сколько это стоит?</strong> - Was kostet das? / Wie viel kostet das?</li>
              <li><strong>Это стоит...</strong> - Das kostet 2 Euro 50.</li>
            </ul>

            <h3 class="font-headline text-xl font-semibold mt-6 mb-2">Грамматика: Akkusativ</h3>
            <p class="mb-4">Самое важное правило на этом этапе: <strong class="text-primary">в Akkusativ меняется только артикль мужского рода (der → den, ein → einen)</strong>. Остальные остаются такими же, как в Nominativ.</p>
            <ul class="list-disc list-inside space-y-2 mb-6">
              <li>Nominativ: <strong class="text-primary">Der</strong> Apfel ist rot. (Яблоко - красное.)</li>
              <li>Akkusativ: Ich esse <strong class="text-accent">den</strong> Apfel. (Я ем яблоко.)</li>
              <li>Nominativ: <strong class="text-primary">Die</strong> Banane ist gelb. (Банан - желтый.)</li>
              <li>Akkusativ: Ich esse <strong class="text-accent">die</strong> Banane. (Я ем банан.)</li>
            </ul>

            <h2 class="font-headline text-2xl font-bold mb-4">В ресторане</h2>
            <p class="mb-4">Заказываем еду и напитки. Глагол <strong class="text-primary">mögen</strong> (нравиться) и его вежливая форма <strong class="text-primary">möchten</strong> (хотел бы) очень важны здесь.</p>
             <ul class="list-disc list-inside space-y-2 mb-6 bg-muted p-4 rounded-lg">
              <li><strong>Ich möchte</strong> bitte einen Kaffee bestellen. - Я хотел бы заказать кофе.</li>
              <li><strong>Ich mag</strong> Pizza, aber ich <strong class="text-primary">mag keinen</strong> Fisch. - Я люблю пиццу, но не люблю рыбу. (Отрицание с <strong class="text-primary">kein</strong>)</li>
              <li>Zahlen, bitte! - Счет, пожалуйста!</li>
            </ul>
          `,
          vocabulary: [
             {
              theme: 'Еда, напитки и покупки',
              words: [
                { type: 'noun', german: 'Apfel', russian: 'яблоко', article: 'der', plural: 'Äpfel', pluralArticle: 'die', exampleSingular: 'Ich esse jeden Tag einen Apfel.', examplePlural: 'Diese Äpfel sind sehr saftig.' },
                { type: 'noun', german: 'Brot', russian: 'хлеб', article: 'das', plural: 'Brote', pluralArticle: 'die', exampleSingular: 'Ich kaufe ein frisches Brot.', examplePlural: 'Es gibt viele verschiedene Brote in Deutschland.' },
                { type: 'noun', german: 'Milch', russian: 'молоко', article: 'die', plural: '-', pluralArticle: '-', exampleSingular: 'Trinkst du deinen Kaffee mit Milch?', examplePlural: '-' },
                { type: 'noun', german: 'Käse', russian: 'сыр', article: 'der', plural: 'Käse', pluralArticle: 'die', exampleSingular: 'Ich esse gern Käse zum Frühstück.', examplePlural: 'Es gibt viele Sorten Käse.' },
                { type: 'noun', german: 'Fisch', russian: 'рыба', article: 'der', plural: 'Fische', pluralArticle: 'die', exampleSingular: 'Am Freitag essen wir oft Fisch.', examplePlural: 'Im See schwimmen viele Fische.' },
                { type: 'noun', german: 'Supermarkt', russian: 'супермаркет', article: 'der', plural: 'Supermärkte', pluralArticle: 'die', exampleSingular: 'Der Supermarkt ist um die Ecke.', examplePlural: 'Die Supermärkte sind am Sonntag geschlossen.' },
                { type: 'noun', german: 'Restaurant', russian: 'ресторан', article: 'das', plural: 'Restaurants', pluralArticle: 'die', exampleSingular: 'Wir gehen heute ins Restaurant.', examplePlural: 'In dieser Straße gibt es viele gute Restaurants.' },
                { type: 'noun', german: 'Preis', russian: 'цена', article: 'der', plural: 'Preise', pluralArticle: 'die', exampleSingular: 'Der Preis ist zu hoch.', examplePlural: 'Die Preise sind gestiegen.' },
                { type: 'verb', german: 'kaufen', russian: 'покупать', conjugation: 'ich kaufe, du kaufst, er kauft', example: 'Wo kaufst du dein Gemüse?' },
                { type: 'verb', german: 'kosten', russian: 'стоить', conjugation: 'es kostet, sie kosten', example: 'Was kostet die Hose?' },
                { type: 'verb', german: 'bestellen', russian: 'заказывать', conjugation: 'ich bestelle, du bestellst, er bestellt', example: 'Ich möchte einen Salat bestellen.' },
                { type: 'verb', german: 'bezahlen', russian: 'платить', conjugation: 'ich bezahle, du bezahlst, er bezahlt', example: 'Ich bezahle mit Karte.' },
                { type: 'verb', german: 'mögen', russian: 'любить, нравиться', conjugation: 'ich mag, du magst, er mag', example: 'Ich mag Käse, aber ich mag keinen Fisch.' },
                { type: 'verb', german: 'essen', russian: 'есть, кушать', conjugation: 'ich esse, du isst, er/sie/es isst', example: 'Was isst du zu Mittag?' },
                { type: 'verb', german: 'trinken', russian: 'пить', conjugation: 'ich trinke, du trinkst, er/sie/es trinkt', example: 'Ich trinke jeden Morgen Kaffee.' },
              ]
            }
          ],
          exercises: []
        },
        {
          id: 'freizeit-und-termine',
          title: 'Свободное время и встречи',
          explanation: `
            <h2 class="font-headline text-2xl font-bold mb-4">Хобби и интересы</h2>
            <p class="mb-4">Учимся говорить о своих увлечениях и интересах. Здесь нам помогут модальные глаголы.</p>
            <ul class="list-disc list-inside space-y-2 mb-6 bg-muted p-4 rounded-lg">
              <li><strong>Was machst du in deiner Freizeit?</strong> - Что ты делаешь в свободное время?</li>
              <li>Ich <strong class="text-primary">kann</strong> gut schwimmen. - Я умею хорошо плавать.</li>
              <li>Ich <strong class="text-primary">will</strong> am Wochenende ins Kino gehen. - Я хочу пойти в кино на выходных.</li>
              <li>Ich <strong class="text-primary">muss</strong> heute arbeiten. - Я должен сегодня работать.</li>
            </ul>

            <h3 class="font-headline text-xl font-semibold mt-6 mb-2">Грамматика: Модальные глаголы</h3>
            <p class="mb-4">Модальные глаголы (<strong class="text-primary">können, wollen, müssen</strong> и др.) изменяют значение основного глагола. В предложении модальный глагол стоит на втором месте и спрягается, а основной глагол уходит в конец в инфинитиве.</p>
            <div class="bg-muted p-3 rounded-lg italic my-4">Ich <strong class="text-accent">kann</strong> nicht <strong class="text-primary">kommen</strong>. (Я не могу прийти.)</div>
            <p class="mb-4">Спряжение у них особенное: в формах <strong>ich</strong> и <strong>er/sie/es</strong> они часто меняют гласную и не имеют окончания.</p>
            <ul class="list-disc list-inside space-y-2 mb-6">
              <li>ich <strong class="text-primary">kann</strong>, du kannst, er/sie/es <strong class="text-primary">kann</strong></li>
              <li>ich <strong class="text-primary">will</strong>, du willst, er/sie/es <strong class="text-primary">will</strong></li>
              <li>ich <strong class="text-primary">muss</strong>, du musst, er/sie/es <strong class="text-primary">muss</strong></li>
            </ul>

            <h2 class="font-headline text-2xl font-bold mb-4">Назначение встреч (Termine)</h2>
            <p class="mb-4">Учимся договариваться о встрече, предлагать, соглашаться и отказываться.</p>
             <ul class="list-disc list-inside space-y-2 mb-6 bg-muted p-4 rounded-lg">
              <li><strong>Hast du am Montag Zeit?</strong> - У тебя есть время в понедельник?</li>
              <li><strong>Wollen wir ins Café gehen?</strong> - Пойдем в кафе?</li>
              <li><strong>Ja, gute Idee!</strong> - Да, хорошая идея!</li>
              <li><strong>Nein, leider kann ich nicht.</strong> - Нет, к сожалению, я не могу.</li>
            </ul>
          `,
          vocabulary: [
             {
              theme: 'Хобби и встречи',
              words: [
                { type: 'noun', german: 'Hobby', russian: 'хобби', article: 'das', plural: 'Hobbys', pluralArticle: 'die', exampleSingular: 'Mein Hobby ist Lesen.', examplePlural: 'Was sind deine Hobbys?' },
                { type: 'noun', german: 'Freizeit', russian: 'свободное время', article: 'die', plural: '-', pluralArticle: '-', exampleSingular: 'Was machst du in der Freizeit?', examplePlural: '-' },
                { type: 'noun', german: 'Buch', russian: 'книга', article: 'das', plural: 'Bücher', pluralArticle: 'die', exampleSingular: 'Ich lese ein spannendes Buch.', examplePlural: 'Sie hat viele Bücher.' },
                { type: 'noun', german: 'Kino', russian: 'кинотеатр', article: 'das', plural: 'Kinos', pluralArticle: 'die', exampleSingular: 'Gehen wir heute Abend ins Kino?', examplePlural: 'In Berlin gibt es viele alte Kinos.' },
                { type: 'noun', german: 'Termin', russian: 'встреча, запись', article: 'der', plural: 'Termine', pluralArticle: 'die', exampleSingular: 'Ich habe einen Termin um 14 Uhr.', examplePlural: 'Mein Kalender ist voller Termine.' },
                { type: 'noun', german: 'Einladung', russian: 'приглашение', article: 'die', plural: 'Einladungen', pluralArticle: 'die', exampleSingular: 'Danke für die Einladung.', examplePlural: 'Wir haben viele Einladungen bekommen.' },
                { type: 'noun', german: 'Idee', russian: 'идея', article: 'die', plural: 'Ideen', pluralArticle: 'die', exampleSingular: 'Das ist eine gute Idee.', examplePlural: 'Wir brauchen neue Ideen.' },
                { type: 'verb', german: 'können', russian: 'мочь, уметь', conjugation: 'ich kann, du kannst, er kann', example: 'Er kann gut kochen.' },
                { type: 'verb', german: 'wollen', russian: 'хотеть', conjugation: 'ich will, du willst, er will', example: 'Ich will Deutsch lernen.' },
                { type: 'verb', german: 'müssen', russian: 'быть должным', conjugation: 'ich muss, du musst, er muss', example: 'Wir müssen jetzt gehen.' },
                { type: 'verb', german: 'lesen', russian: 'читать', conjugation: 'ich lese, du liest, er liest', example: 'Ich lese gern Bücher.' },
                { type: 'verb', german: 'schwimmen', russian: 'плавать', conjugation: 'ich schwimme, du schwimmst, er schwimmt', example: 'Im Sommer schwimme ich oft im See.' },
                { type: 'verb', german: 'Zeit haben', russian: 'иметь время', conjugation: '-', example: 'Hast du morgen Zeit?' },
              ]
            }
          ],
          exercises: []
        },
        {
          id: 'reisen-und-orientierung',
          title: 'Путешествия и ориентация в городе',
          explanation: `
            <h2 class="font-headline text-2xl font-bold mb-4">Транспорт и билеты</h2>
            <p class="mb-4">Говорим о видах транспорта и покупаем билеты.</p>
            <ul class="list-disc list-inside space-y-2 mb-6 bg-muted p-4 rounded-lg">
              <li><strong>Виды транспорта:</strong> der Zug (поезд), der Bus (автобус), die U-Bahn (метро), das Flugzeug (самолет).</li>
              <li><strong>Покупка билета:</strong> Eine Fahrkarte nach Berlin, bitte. (Один билет до Берлина, пожалуйста.)</li>
              <li><strong>Вопросы о расписании:</strong> Wann fährt der nächste Zug? (Когда отправляется следующий поезд?)</li>
            </ul>

            <h2 class="font-headline text-2xl font-bold mb-4">Ориентация в городе</h2>
            <p class="mb-4">Учимся спрашивать и объяснять дорогу. Здесь нам нужны предлоги места и падеж <strong class="text-primary">Dativ</strong>.</p>
            <ul class="list-disc list-inside space-y-2 mb-6 bg-muted p-4 rounded-lg">
              <li><strong>Entschuldigung, wie komme ich zum Bahnhof?</strong> - Извините, как мне добраться до вокзала?</li>
              <li>Gehen Sie <strong class="text-accent">geradeaus</strong>. - Идите прямо.</li>
              <li>Dann die erste Straße <strong class="text-accent">links</strong> / <strong class="text-accent">rechts</strong>. - Затем на первой улице налево / направо.</li>
              <li>Der Bahnhof ist <strong class="text-accent">neben</strong> der Post. - Вокзал находится рядом с почтой.</li>
            </ul>
            
            <h3 class="font-headline text-xl font-semibold mt-6 mb-2">Грамматика: Предлоги места с Dativ</h3>
            <p class="mb-4">Когда мы отвечаем на вопрос "Где?" (<strong class="text-primary">Wo?</strong>), предлоги <strong class="text-primary">in, an, auf, neben, vor, hinter, über, unter, zwischen</strong> требуют после себя падеж <strong class="text-primary">Dativ</strong> (Дательный).</p>
            <div class="bg-muted p-3 rounded-lg italic my-4">Das Buch liegt <strong class="text-accent">auf dem</strong> Tisch. (Книга лежит на столе.)</div>
            <p>Артикли в Dativ: der → <strong class="text-primary">dem</strong>, die → <strong class="text-primary">der</strong>, das → <strong class="text-primary">dem</strong>, die (Pl.) → <strong class="text-primary">den (...n)</strong>.</p>

            <h2 class="font-headline text-2xl font-bold mb-4">Говорим о прошлом: Perfekt</h2>
            <p class="mb-4">Чтобы рассказать о прошлом путешествии, используется время Perfekt. Оно образуется с помощью <strong class="text-primary">haben</strong> или <strong class="text-primary">sein</strong> + Partizip II (причастие).</p>
            <ul class="list-disc list-inside space-y-2 mb-6 bg-muted p-4 rounded-lg">
              <li>Ich <strong class="text-accent">habe</strong> einen Kaffee <strong class="text-primary">getrunken</strong>. (Я выпил кофе).</li>
              <li>Wir <strong class="text-accent">sind</strong> nach Berlin <strong class="text-primary">gefahren</strong>. (Мы поехали в Берлин).</li>
            </ul>
            <p>Глагол <strong class="text-primary">sein</strong> используется с глаголами движения (fahren, gehen, fliegen) и смены состояния.</p>
          `,
          vocabulary: [
             {
              theme: 'Путешествия и ориентация',
              words: [
                { type: 'noun', german: 'Bahnhof', russian: 'вокзал', article: 'der', plural: 'Bahnhöfe', pluralArticle: 'die', exampleSingular: 'Wo ist der nächste Bahnhof?', examplePlural: 'Große Städte haben oft mehrere Bahnhöfe.' },
                { type: 'noun', german: 'Flughafen', russian: 'аэропорт', article: 'der', plural: 'Flughäfen', pluralArticle: 'die', exampleSingular: 'Wir fahren zum Flughafen.', examplePlural: 'Die Flughäfen sind heute sehr modern.' },
                { type: 'noun', german: 'Zug', russian: 'поезд', article: 'der', plural: 'Züge', pluralArticle: 'die', exampleSingular: 'Der Zug fährt um 10 Uhr ab.', examplePlural: 'Alle Züge haben Verspätung.' },
                { type: 'noun', german: 'Fahrkarte', russian: 'билет', article: 'die', plural: 'Fahrkarten', pluralArticle: 'die', exampleSingular: 'Ich brauche eine Fahrkarte nach Hamburg.', examplePlural: 'Zeigen Sie bitte Ihre Fahrkarten.' },
                { type: 'noun', german: 'Hotel', russian: 'отель', article: 'das', plural: 'Hotels', pluralArticle: 'die', exampleSingular: 'Wir haben ein Hotel im Zentrum gebucht.', examplePlural: 'Die Hotels sind oft ausgebucht.' },
                { type: 'noun', german: 'Straße', russian: 'улица', article: 'die', plural: 'Straßen', pluralArticle: 'die', exampleSingular: 'Diese Straße ist sehr bekannt.', examplePlural: 'Die Straßen sind am Morgen voll.' },
                { type: 'adjective', german: 'links', russian: 'налево, слева', comparative: '-', superlative: '-', example: 'Gehen Sie an der Kreuzung links.' },
                { type: 'adjective', german: 'rechts', russian: 'направо, справа', comparative: '-', superlative: '-', example: 'Die Apotheke befindet sich auf der rechten Seite.' },
                { type: 'adjective', german: 'geradeaus', russian: 'прямо', comparative: '-', superlative: '-', example: 'Fahren Sie immer geradeaus.' },
                { type: 'verb', german: 'buchen', russian: 'бронировать', conjugation: 'ich buche, du buchst, er bucht', example: 'Ich habe ein Zimmer für zwei Nächte gebucht.' },
                { type: 'verb', german: 'reisen', russian: 'путешествовать', conjugation: 'ich reise, du reist, er reist', example: 'Ich reise sehr gern.' },
                { type: 'verb', german: 'fragen', russian: 'спрашивать', conjugation: 'ich frage, du fragst, er fragt', example: 'Entschuldigung, darf ich Sie etwas fragen?' },
              ]
            }
          ],
          exercises: []
        }
      ]
    },
    {
      id: 'a2', 
      title: 'Уровень A2: Элементарный',
      description: 'Расширяем словарный запас и грамматику. Вы научитесь говорить о прошлом, делать покупки, договариваться о встречах и лучше понимать собеседников.',
      topics: [
        {
          id: 'biografie-und-vergangenheit',
          title: 'Биография и прошлое',
          explanation: `
            <h2 class="font-headline text-2xl font-bold mb-4">Прошедшее время Perfekt</h2>
            <p class="mb-4">Perfekt — основное время для рассказа о прошлом в устной речи. Оно состоит из двух частей: вспомогательного глагола <strong class="text-primary">haben</strong> или <strong class="text-primary">sein</strong> на втором месте и <strong class="text-accent">Partizip II</strong> (причастия) в конце предложения.</p>
            <ul class="list-disc list-inside space-y-2 mb-6 bg-muted p-4 rounded-lg">
              <li>С <strong class="text-primary">sein</strong>: глаголы движения (gehen, fahren) и смены состояния (einschlafen). <em>Пример: Ich <strong class="text-primary">bin</strong> gestern ins Kino <strong class="text-accent">gegangen</strong>.</em></li>
              <li>С <strong class="text-primary">haben</strong>: все остальные глаголы. <em>Пример: Ich <strong class="text-primary">habe</strong> ein Buch <strong class="text-accent">gelesen</strong>.</em></li>
            </ul>

            <h2 class="font-headline text-2xl font-bold mb-4">Прошедшее время Präteritum</h2>
            <p class="mb-4">Для глаголов <strong class="text-primary">haben</strong>, <strong class="text-primary">sein</strong> и <strong class="text-accent">модальных глаголов</strong> в разговоре о прошлом чаще используется Präteritum. Это их простые формы, которые нужно запомнить.</p>
            <ul class="list-disc list-inside space-y-2 mb-6 bg-muted p-4 rounded-lg">
              <li>sein: Ich <strong class="text-primary">war</strong>, du <strong class="text-primary">warst</strong>, er/sie/es <strong class="text-primary">war</strong>, wir <strong class="text-primary">waren</strong>, ihr <strong class="text-primary">wart</strong>, sie/Sie <strong class="text-primary">waren</strong>.</li>
              <li>haben: Ich <strong class="text-primary">hatte</strong>, du <strong class="text-primary">hattest</strong>, er/sie/es <strong class="text-primary">hatte</strong>, ...</li>
              <li>können: Ich <strong class="text-primary">konnte</strong>, du <strong class="text-primary">konntest</strong>, ...</li>
              <li>wollen: Ich <strong class="text-primary">wollte</strong>, du <strong class="text-primary">wolltest</strong>, ...</li>
            </ul>
            <p>Пример: Gestern <strong class="text-primary">hatte</strong> ich keine Zeit. Ich <strong class="text-primary">war</strong> zu Hause. Ich <strong class="text-primary">wollte</strong> lesen, aber ich <strong class="text-primary">konnte</strong> nicht.</p>
          `,
          vocabulary: [
            {
              theme: 'События жизни',
              words: [
                { type: 'noun', german: 'Schule', russian: 'школа', article: 'die', plural: 'Schulen', pluralArticle: 'die', exampleSingular: 'Ich bin in die Schule gegangen.', examplePlural: 'In Deutschland gibt es verschiedene Schulen.' },
                { type: 'noun', german: 'Ausbildung', russian: 'образование, обучение', article: 'die', plural: 'Ausbildungen', pluralArticle: 'die', exampleSingular: 'Er hat eine Ausbildung als Mechaniker gemacht.', examplePlural: 'Es gibt viele duale Ausbildungen.' },
                { type: 'noun', german: 'Beruf', russian: 'профессия', article: 'der', plural: 'Berufe', pluralArticle: 'die', exampleSingular: 'Was sind Sie von Beruf?', examplePlural: 'Es gibt viele interessante Berufe.' },
                { type: 'verb', german: 'studieren', russian: 'учиться (в вузе)', conjugation: 'ich studiere, du studierst, er/sie/es studiert', example: 'Sie hat in Berlin studiert.' },
                { type: 'verb', german: 'umziehen', russian: 'переезжать', conjugation: 'ich ziehe um, du ziehst um, er zieht um (Perfekt mit sein)', example: 'Wir sind letztes Jahr umgezogen.' },
                { type: 'verb', german: 'heiraten', russian: 'жениться, выходить замуж', conjugation: 'ich heirate, du heiratest, er heiratet', example: 'Sie haben 1990 geheiratet.' },
                { type: 'conjunction', german: 'als', russian: 'когда (для однократного действия в прошлом)', structure: 'Придаточное предложение, глагол в конце.', example: 'Als ich ein Kind war, habe ich viel gespielt.' },
              ]
            }
          ],
          exercises: []
        },
        {
          id: 'wohnen-und-dienstleistungen',
          title: 'Жильё и услуги',
          explanation: `
            <h2 class="font-headline text-2xl font-bold mb-4">Предлоги места с Dativ и Akkusativ (Wechselpräpositionen)</h2>
            <p class="mb-4">Предлоги <strong class="text-primary">in, an, auf, neben, über, unter, vor, hinter, zwischen</strong> могут использоваться с двумя падежами:</p>
            <ul class="list-disc list-inside space-y-2 mb-6 bg-muted p-4 rounded-lg">
              <li>С падежом <strong class="text-accent">Dativ</strong>, если отвечают на вопрос <strong class="text-primary">Wo?</strong> (где?) и обозначают местоположение. <em>Пример: Das Buch liegt <strong class="text-accent">auf dem</strong> Tisch.</em></li>
              <li>С падежом <strong class="text-accent">Akkusativ</strong>, если отвечают на вопрос <strong class="text-primary">Wohin?</strong> (куда?) и обозначают направление. <em>Пример: Ich lege das Buch <strong class="text-accent">auf den</strong> Tisch.</em></li>
            </ul>

            <h2 class="font-headline text-2xl font-bold mb-4">Описание жилья и бытовых проблем</h2>
            <p class="mb-4">Для описания квартиры и проблем (например, в разговоре с арендодателем) используются прилагательные и специализированная лексика. Для сравнения используются степени сравнения.</p>
             <h3 class="font-headline text-xl font-semibold mt-6 mb-2">Степени сравнения (Komparativ und Superlativ)</h3>
            <ul class="list-disc list-inside space-y-2">
              <li><strong>Komparativ (сравнительная):</strong> <strong class="text-accent">schnell<span class="text-primary">er</span></span></strong> (быстрее), <strong class="text-accent">größ<span class="text-primary">er</span></span></strong> (больше). Используется с <strong class="text-primary">als</strong> (чем). <em>Meine Wohnung ist <strong class="text-accent">größer als</strong> deine.</em></li>
              <li><strong>Superlativ (превосходная):</strong> <strong class="text-accent">am</span> schnell<span class="text-primary">sten</span></strong> (самый быстрый), <strong class="text-accent">der/die/das</span> größ<span class="text-primary">te</span></strong> (самый большой). <em>Er ist <strong class="text-accent">am schnellsten</span>. Das ist <strong class="text-accent">das größte</strong> Haus.</em></li>
            </ul>
          `,
          vocabulary: [
            {
              theme: 'Аренда и быт',
              words: [
                { type: 'noun', german: 'Miete', russian: 'арендная плата', article: 'die', plural: 'Mieten', pluralArticle: 'die', exampleSingular: 'Die Miete ist sehr hoch.', examplePlural: 'Die Mieten in der Stadt steigen.' },
                { type: 'noun', german: 'Vermieter', russian: 'арендодатель', article: 'der', plural: 'Vermieter', pluralArticle: 'die', exampleSingular: 'Ich muss meinen Vermieter anrufen.', examplePlural: 'Die Vermieter sind für Reparaturen verantwortlich.' },
                { type: 'adjective', german: 'kaputt', russian: 'сломанный', comparative: '-', superlative: '-', example: 'Die Heizung ist kaputt.' },
                { type: 'verb', german: 'funktionieren', russian: 'работать, функционировать', conjugation: 'es funktioniert, sie funktionieren', example: 'Das Internet funktioniert nicht.' },
                { type: 'noun', german: 'Handwerker', russian: 'мастер, ремесленник', article: 'der', plural: 'Handwerker', pluralArticle: 'die', exampleSingular: 'Der Handwerker kommt morgen.', examplePlural: 'Wir brauchen gute Handwerker.' },
                { type: 'verb', german: 'überweisen', russian: 'переводить (деньги)', conjugation: 'ich überweise, du überweist, er überweist', example: 'Können Sie das Geld überweisen?' },
                { type: 'adjective', german: 'groß', russian: 'большой', comparative: 'größer', superlative: 'am größten', example: 'Meine Wohnung ist größer als deine.' },
              ]
            }
          ],
          exercises: []
        },
        {
          id: 'gesundheit-und-reisen',
          title: 'Здоровье и путешествия',
          explanation: `
            <h2 class="font-headline text-2xl font-bold mb-4">Визит к врачу</h2>
            <p class="mb-4">Для описания самочувствия и записи к врачу используются специальные глаголы и выражения. Часто необходимы возвратные глаголы.</p>
            <ul class="list-disc list-inside space-y-2 mb-6 bg-muted p-4 rounded-lg">
              <li><strong>Mir tut</strong> der Kopf <strong class="text-primary">weh</strong>. (У меня болит голова.)</li>
              <li>Ich fühle <strong class="text-primary">mich</strong> nicht gut. (Я плохо себя чувствую.)</li>
              <li>Ich möchte einen Termin <strong class="text-primary">vereinbaren</strong>. (Я хотел бы записаться на прием.)</li>
            </ul>

            <h2 class="font-headline text-2xl font-bold mb-4">Придаточные предложения (Nebensätze)</h2>
            <p class="mb-4">На уровне А2 мы начинаем активнее использовать придаточные предложения. Главное правило: <strong class="text-primary">спрягаемый глагол всегда уходит в конец предложения</strong>.</p>
            <ul class="list-disc list-inside space-y-2 mb-6">
              <li>С <strong class="text-primary">dass</strong> (что): Ich weiß, <strong class="text-accent">dass du krank bist</strong>. (Я знаю, что ты болен.)</li>
              <li>С <strong class="text-primary">weil</strong> (потому что): Ich bleibe zu Hause, <strong class="text-accent">weil ich krank bin</strong>. (Я остаюсь дома, потому что я болен.)</li>
              <li>С <strong class="text-primary">wenn</strong> (если, когда): <strong class="text-accent">Wenn ich krank bin</strong>, gehe ich zum Arzt. (Когда я болею, я иду к врачу.)</li>
              <li>С <strong class="text-primary">obwohl</strong> (хотя): Er arbeitet, <strong class="text-accent">obwohl er krank ist</strong>. (Он работает, хотя болен.)</li>
            </ul>
          `,
          vocabulary: [
             {
              theme: 'Здоровье и медицина',
              words: [
                { type: 'noun', german: 'Schmerz', russian: 'боль', article: 'der', plural: 'Schmerzen', pluralArticle: 'die', exampleSingular: 'Der Schmerz ist stark.', examplePlural: 'Ich habe Kopfschmerzen.' },
                { type: 'verb', german: 'weh|tun', russian: 'болеть', conjugation: 'es tut weh, sie tun weh', example: 'Mein Hals tut weh.' },
                { type: 'noun', german: 'Fieber', russian: 'температура, жар', article: 'das', plural: '-', pluralArticle: '-', exampleSingular: 'Das Kind hat Fieber.', examplePlural: '-' },
                { type: 'noun', german: 'Arzt', russian: 'врач', article: 'der', plural: 'Ärzte', pluralArticle: 'die', exampleSingular: 'Ich muss zum Arzt gehen.', examplePlural: 'Die Ärzte haben viel zu tun.' },
                { type: 'verb', german: 'sich fühlen', russian: 'чувствовать себя', conjugation: 'ich fühle mich, du fühlst dich', example: 'Wie fühlen Sie sich?' },
                { type: 'conjunction', german: 'dass', russian: 'что', structure: 'Придаточное предложение, глагол в конце.', example: 'Ich weiß, dass du müde bist.' },
                { type: 'conjunction', german: 'weil', russian: 'потому что', structure: 'Придаточное предложение, глагол в конце.', example: 'Ich lerne Deutsch, weil ich in Deutschland arbeiten will.' },
                { type: 'conjunction', german: 'wenn', russian: 'когда, если', structure: 'Придаточное предложение, глагол в конце.', example: 'Wenn das Wetter gut ist, gehen wir spazieren.' },
              ]
            }
          ],
          exercises: []
        }
      ]
    },
    { 
      id: 'b1', 
      title: 'Уровень B1: Средний', 
      description: 'Выход на новый уровень. Вы сможете понимать основное содержание большинства разговоров, высказывать свое мнение и справляться с большинством ситуаций в путешествии.', 
      topics: [
        {
          id: 'arbeit-und-gesellschaft',
          title: 'Работа, карьера и общество',
          explanation: `
            <h2 class="font-headline text-2xl font-bold mb-4">Прошедшие времена: Präteritum vs Perfekt</h2>
            <p class="mb-4">На уровне B1 мы активно различаем использование <strong class="text-primary">Perfekt</strong> (для устной речи, диалогов) и <strong class="text-primary">Präteritum</strong> (для письменного повествования, рассказов, новостей). Важно научиться использовать Präteritum не только для 'sein' и 'haben', но и для других распространенных глаголов.</p>
            <ul class="list-disc list-inside space-y-2 mb-6 bg-muted p-4 rounded-lg">
              <li><strong>Perfekt:</strong> "Ich <strong class="text-accent">habe</strong> gestern meinen Lebenslauf <strong class="text-accent">geschickt</strong>." (устный рассказ другу)</li>
              <li><strong>Präteritum:</strong> "Er <strong class="text-accent">schickte</strong> seinen Lebenslauf und <strong class="text-accent">wartete</strong> auf eine Antwort." (письменный рассказ)</li>
            </ul>

            <h2 class="font-headline text-2xl font-bold mb-4">Склонение прилагательных (Adjektivdeklination)</h2>
            <p class="mb-4">Это одна из ключевых тем B1. Окончание прилагательного зависит от артикля перед ним, падежа и рода существительного.</p>
            <ul class="list-disc list-inside space-y-2 mb-6">
              <li><strong>С определенным артиклем (der/die/das):</strong> Der <strong class="text-primary">neue</strong> Kollege ist nett.</li>
              <li><strong>С неопределенным артиклем (ein/eine):</strong> Ich suche einen <strong class="text-primary">neuen</strong> Job.</li>
              <li><strong>Без артикля:</strong> Ich trinke gern <strong class="text-primary">kalten</strong> Tee.</li>
            </ul>

            <h2 class="font-headline text-2xl font-bold mb-4">Коннекторы: выражение причин и следствий</h2>
            <p class="mb-4">Чтобы строить логичные высказывания, мы используем союзы и наречия, указывающие на причину (<strong class="text-primary">deshalb, deswegen</strong>) или уступку (<strong class="text-primary">obwohl, trotzdem</strong>).</p>
             <ul class="list-disc list-inside space-y-2 mb-6 bg-muted p-4 rounded-lg">
              <li><strong>Obwohl</strong> er krank war, <strong class="text-accent">ging</strong> er zur Arbeit. (Придаточное предложение, глагол в конце)</li>
              <li>Er war krank, <strong class="text-primary">trotzdem</strong> <strong class="text-accent">ging</strong> er zur Arbeit. (Два главных предложения, глагол на 2-м месте)</li>
            </ul>
          `,
          vocabulary: [
            {
              theme: 'Профессия и социум',
              words: [
                { type: 'noun', german: 'Lebenslauf', russian: 'резюме', article: 'der', plural: 'Lebensläufe', pluralArticle: 'die', exampleSingular: 'Haben Sie Ihren Lebenslauf dabei?', examplePlural: 'Die Lebensläufe der Bewerber waren beeindruckend.' },
                { type: 'noun', german: 'Vorstellungsgespräch', russian: 'собеседование', article: 'das', plural: 'Vorstellungsgespräche', pluralArticle: 'die', exampleSingular: 'Ich bin nervös vor dem Vorstellungsgespräch.', examplePlural: 'Morgen habe ich zwei Vorstellungsgespräche.' },
                { type: 'verb', german: 'sich bewerben um', russian: 'подавать заявление на', conjugation: 'ich bewerbe mich, du bewirbst dich', example: 'Er bewirbt sich um eine neue Stelle.' },
                { type: 'noun', german: 'Gesellschaft', russian: 'общество', article: 'die', plural: 'Gesellschaften', pluralArticle: 'die', exampleSingular: 'Das ist ein Problem für die ganze Gesellschaft.', examplePlural: 'Wir leben in modernen Gesellschaften.' },
                { type: 'conjunction', german: 'deshalb', russian: 'поэтому', structure: 'Порядок слов как в главном предложении (глагол на 2-м месте).', example: 'Ich war krank, deshalb bin ich nicht gekommen.' },
                { type: 'conjunction', german: 'obwohl', russian: 'хотя', structure: 'Придаточное предложение, глагол в конце.', example: 'Obwohl es regnet, gehen wir spazieren.' },
                { type: 'conjunction', german: 'trotzdem', russian: 'несмотря на это', structure: 'Порядок слов как в главном предложении (глагол на 2-м месте).', example: 'Es regnet, trotzdem gehen wir spazieren.' },
              ]
            }
          ],
          exercises: []
        },
        {
          id: 'lebensstil-und-medien',
          title: 'Образ жизни, здоровье и медиа',
          explanation: `
            <h2 class="font-headline text-2xl font-bold mb-4">Пассивный залог (Passiv)</h2>
            <p class="mb-4">Пассив используется, когда важно само действие, а не тот, кто его выполняет. На уровне B1 мы знакомимся с пассивом в настоящем (<strong class="text-primary">Präsens</strong>) и прошедшем (<strong class="text-primary">Präteritum</strong>) времени.</p>
            <ul class="list-disc list-inside space-y-2 mb-6 bg-muted p-4 rounded-lg">
              <li><strong>Präsens Passiv:</strong> "Hier <strong class="text-accent">wird</strong> nicht <strong class="text-accent">geraucht</strong>." (Здесь не курят.)</li>
              <li><strong>Präteritum Passiv:</strong> "Das Paket <strong class="text-accent">wurde</strong> gestern <strong class="text-accent">geliefert</strong>." (Посылка была доставлена вчера.)</li>
            </ul>

            <h2 class="font-headline text-2xl font-bold mb-4">Глаголы с предлогами (Verben mit Präpositionen)</h2>
            <p class="mb-4">Многие глаголы в немецком требуют после себя определенного предлога с определенным падежом. Эти связки нужно заучивать.</p>
            <ul class="list-disc list-inside space-y-2 mb-6">
              <li>warten <strong class="text-primary">auf</strong> (+ Akk): Ich warte <strong class="text-primary">auf den</strong> Bus.</li>
              <li>denken <strong class="text-primary">an</strong> (+ Akk): Ich denke <strong class="text-primary">an dich</strong>.</li>
              <li>sprechen <strong class="text-primary">mit</strong> (+ Dat): Ich spreche <strong class="text-primary">mit meinem</strong> Chef.</li>
              <li>sich freuen <strong class="text-primary">über</strong> (+ Akk): Ich freue mich <strong class="text-primary">über das</strong> Geschenk. (радоваться чему-то свершившемуся)</li>
            </ul>

            <h2 class="font-headline text-2xl font-bold mb-4">Косвенная речь (Indirekte Rede) - введение</h2>
            <p class="mb-4">Для передачи чужих слов, особенно в формальной речи, используется <strong class="text-primary">Konjunktiv I</strong>. На уровне B1 мы начинаем его узнавать и использовать в простых формах, часто с глаголом 'sein'.</p>
             <ul class="list-disc list-inside space-y-2 mb-6 bg-muted p-4 rounded-lg">
              <li><strong>Прямая речь:</strong> Er sagt: "Ich <strong class="text-accent">bin</strong> krank."</li>
              <li><strong>Косвенная речь:</strong> Er sagt, er <strong class="text-primary">sei</strong> krank. (Он говорит, что (якобы) болен.)</li>
            </ul>
          `,
          vocabulary: [
            {
              theme: 'Здоровье, медиа и личное мнение',
              words: [
                { type: 'noun', german: 'Gesundheit', russian: 'здоровье', article: 'die', plural: '-', pluralArticle: '-', exampleSingular: 'Gesundheit ist das Wichtigste.', examplePlural: '-' },
                { type: 'noun', german: 'Ernährung', russian: 'питание', article: 'die', plural: 'Ernährungen', pluralArticle: 'die', exampleSingular: 'Eine gesunde Ernährung ist entscheidend.', examplePlural: 'Es gibt verschiedene Ernährungen.' },
                { type: 'noun', 'german': 'Werbung', 'russian': 'реклама', 'article': 'die', 'plural': 'Werbungen', 'pluralArticle': 'die', 'exampleSingular': 'Werbung im Fernsehen nervt mich.', 'examplePlural': 'Die Werbungen sind oft zu laut.' },
                { type: 'verb', 'german': 'sich interessieren für', 'russian': 'интересоваться чем-либо', 'conjugation': 'ich interessiere mich für, du interessierst dich für', 'example': 'Ich interessiere mich für Geschichte.' },
                { type: 'verb', 'german': 'teilnehmen an', 'russian': 'принимать участие в', 'conjugation': 'ich nehme teil, du nimmst teil (Dativ)', 'example': 'Nimmst du am Wettbewerb teil?' },
                { type: 'adjective', 'german': 'wichtig', 'russian': 'важный', 'comparative': 'wichtiger', 'superlative': 'am wichtigsten', 'example': 'Das ist ein wichtiger Termin.' },
              ]
            }
          ],
          exercises: []
        },
        {
          id: 'reisen-und-technologie',
          title: 'Путешествия, технологии и экология',
          explanation: `
            <h2 class="font-headline text-2xl font-bold mb-4">Относительные предложения (Relativsätze)</h2>
            <p class="mb-4">Эти предложения дают дополнительную информацию о существительном из главного предложения. Они вводятся относительными местоимениями (<strong class="text-primary">der, die, das</strong>), которые ставятся сразу после существительного. Глагол в таком предложении уходит в конец.</p>
            <ul class="list-disc list-inside space-y-2 mb-6 bg-muted p-4 rounded-lg">
              <li>Das ist der Bus, <strong class="text-accent">der</strong> nach Hamburg <strong class="text-accent">fährt</strong>. (Это автобус, который едет в Гамбург.)</li>
              <li>Ich suche das Hotel, <strong class="text-accent">das</strong> du mir <strong class="text-accent">empfohlen hast</strong>. (Я ищу отель, который ты мне порекомендовал.)</li>
            </ul>

            <h2 class="font-headline text-2xl font-bold mb-4">Будущее время (Futur I)</h2>
            <p class="mb-4">Futur I используется для выражения планов на будущее или предположений. Оно образуется с помощью вспомогательного глагола <strong class="text-primary">werden</strong> и инфинитива основного глагола в конце предложения.</p>
            <ul class="list-disc list-inside space-y-2 mb-6">
              <li><strong>План:</strong> Nächstes Jahr <strong class="text-primary">werde</strong> ich nach Deutschland <strong class="text-accent">fliegen</strong>.</li>
              <li><strong>Предположение:</strong> Er ist nicht da. Er <strong class="text-primary">wird</strong> wohl krank <strong class="text-accent">sein</strong>. (Его нет. Он, наверное, болен.)</li>
            </ul>

            <h2 class="font-headline text-2xl font-bold mb-4">Номинализация (Nominalisierung)</h2>
            <p class="mb-4">Это превращение глаголов или прилагательных в существительные. Этот прием делает речь более формальной и часто используется в письменном языке. Самый простой способ - написать инфинитив глагола с большой буквы и добавить артикль <strong class="text-primary">das</strong>.</p>
             <ul class="list-disc list-inside space-y-2 mb-6 bg-muted p-4 rounded-lg">
              <li>rauchen (курить) → <strong class="text-accent">Das Rauchen</strong> ist hier verboten.</li>
              <li>leben (жить) → <strong class="text-accent">Das Leben</strong> in der Stadt ist teuer.</li>
            </ul>
          `,
          vocabulary: [
             {
              theme: 'Путешествия, экология и техника',
              words: [
                { type: 'noun', german: 'Umwelt', russian: 'окружающая среда', article: 'die', plural: '-', pluralArticle: '-', exampleSingular: 'Wir müssen die Umwelt schützen.', examplePlural: '-' },
                { type: 'noun', german: 'Klimawandel', russian: 'изменение климата', article: 'der', plural: '-', pluralArticle: '-', exampleSingular: 'Der Klimawandel ist ein globales Problem.', examplePlural: '-' },
                { type: 'noun', german: 'Gerät', russian: 'устройство, прибор', article: 'das', plural: 'Geräte', pluralArticle: 'die', exampleSingular: 'Mein neues Gerät hat viele Funktionen.', examplePlural: 'Elektronische Geräte müssen recycelt werden.' },
                { type: 'noun', german: 'App', russian: 'приложение', article: 'die', plural: 'Apps', pluralArticle: 'die', exampleSingular: 'Ich nutze diese App jeden Tag.', examplePlural: 'Es gibt Apps für alles.' },
                { type: 'adjective', 'german': 'umweltfreundlich', 'russian': 'экологичный', 'comparative': 'umweltfreundlicher', 'superlative': 'am umweltfreundlichsten', 'example': 'Ich versuche, umweltfreundlich zu leben.' },
                { type: 'adjective', 'german': 'digital', 'russian': 'цифровой', 'comparative': '-', 'superlative': '-', 'example': 'Die digitale Welt verändert alles.' },
                { type: 'verb', 'german': 'werden', 'russian': 'становиться (для Futur I)', 'conjugation': 'ich werde, du wirst, er wird', 'example': 'Ich werde dich morgen anrufen.' },
              ]
            }
          ],
          exercises: []
        }
      ] 
    },
    { 
      id: 'b2', 
      title: 'Уровень B2: Продвинутый', 
      description: 'Свободное общение. Вы сможете понимать сложные тексты, бегло общаться с носителями языка и ясно излагать свои мысли на широкий круг тем.', 
      topics: [
        {
          id: 'plusquamperfekt',
          title: 'Предпрошедшее время (Plusquamperfekt)',
          explanation: `
            <h2 class="font-headline text-2xl font-bold mb-4">Plusquamperfekt: прошлое до прошлого</h2>
            <p class="mb-4">Это время используется для описания действия, которое произошло <strong class="text-primary">раньше</strong> другого действия в прошлом. Оно образуется с помощью вспомогательных глаголов <strong class="text-accent">hatten</strong> или <strong class="text-accent">waren</strong> (формы Präteritum от haben/sein) + Partizip II.</p>
            <div class="bg-muted p-3 rounded-lg italic my-4">Nachdem ich die Hausaufgaben <strong class="text-primary">gemacht hatte</strong>, ging ich ins Kino. (После того как я сделал домашнее задание, я пошел в кино.)</div>
            <p class="mt-2">Действие "сделал ДЗ" произошло раньше, чем "пошел в кино".</p>
          `,
          vocabulary: [
            {
              theme: 'Последовательность событий в прошлом',
              words: [
                { type: 'conjunction', 'german': 'nachdem', 'russian': 'после того как', 'structure': 'Придаточное предложение, глагол в конце. Требует согласования времен (Plusquamperfekt + Präteritum).', 'example': 'Nachdem er gegessen hatte, fühlte er sich besser.' },
                { type: 'conjunction', 'german': 'bevor', 'russian': 'прежде чем', 'structure': 'Придаточное предложение, глагол в конце.', 'example': 'Bevor er die Prüfung schrieb, hatte er viel gelernt.' },
                { type: 'verb', 'german': 'ankommen', 'russian': 'прибывать', 'conjugation': 'Perfekt: ist angekommen; Plusquamperfekt: war angekommen', 'example': 'Als ich ankam, war der Zug schon abgefahren.' },
                { type: 'verb', 'german': 'einschlafen', 'russian': 'засыпать', 'conjugation': 'Perfekt: ist eingeschlafen; Plusquamperfekt: war eingeschlafen', 'example': 'Das Kind war schnell eingeschlafen, weil es sehr müde war.' },
              ]
            }
          ],
          exercises: []
        },
        {
          id: 'passiv',
          title: 'Пассивный залог (Passiv)',
          explanation: `
            <h2 class="font-headline text-2xl font-bold mb-4">Пассивный залог (Passiv): фокус на действии</h2>
            <p class="mb-4">Пассив используется, когда важно само действие, а не тот, кто его выполняет. Образуется с помощью глагола <strong class="text-primary">werden</strong> + Partizip II.</p>
            <ul class="list-disc list-inside space-y-2 bg-muted p-4 rounded-lg">
              <li><strong>Präsens Passiv:</strong> Das Auto <strong class="text-primary">wird repariert</strong>. (Машину ремонтируют / Машина ремонтируется.)</li>
              <li><strong>Präteritum Passiv:</strong> Das Auto <strong class="text-primary">wurde repariert</strong>. (Машину ремонтировали.)</li>
              <li><strong>Perfekt Passiv:</strong> Das Auto <strong class="text-primary">ist repariert worden</strong>. (Машина была отремонтирована.)</li>
            </ul>
          `,
          vocabulary: [
            {
              theme: 'Описание процессов и состояний',
              words: [
                { type: 'verb', 'german': 'reparieren', 'russian': 'ремонтировать', 'conjugation': 'Passiv: wird repariert, wurde repariert, ist repariert worden', 'example': 'Mein Fahrrad wird morgen repariert.' },
                { type: 'verb', 'german': 'bauen', 'russian': 'строить', 'conjugation': 'Passiv: wird gebaut, wurde gebaut, ist gebaut worden', 'example': 'Die Brücke wurde in nur einem Jahr gebaut.' },
                { type: 'verb', 'german': 'informieren', 'russian': 'информировать', 'conjugation': 'Passiv: wird informiert, wurde informiert, ist informiert worden', 'example': 'Die Studenten wurden über die Änderungen informiert.' },
                { type: 'verb', 'german': 'verkaufen', 'russian': 'продавать', 'conjugation': 'Passiv: wird verkauft, wurde verkauft, ist verkauft worden', 'example': 'Das Haus ist bereits verkauft worden.' },
              ]
            }
          ],
          exercises: []
        },
        {
          id: 'relativsatze',
          title: 'Относительные придаточные предложения',
          explanation: `
            <h2 class="font-headline text-2xl font-bold mb-4">Relativsätze: добавляем детали</h2>
            <p class="mb-4">Эти предложения дают дополнительную информацию о существительном из главного предложения. Они вводятся относительными местоимениями (<strong class="text-primary">der, die, das</strong> и т.д.), которые согласуются в роде и числе с существительным, к которому относятся.</p>
            <div class="bg-muted p-3 rounded-lg italic my-4">Das ist der Mann, <strong class="text-primary">der mir geholfen hat</strong>. (Это тот мужчина, <strong class="text-accent">который мне помог</strong>.)</div>
             <p class="mt-2">Глагол в Relativsatz, как и в других придаточных, стоит на последнем месте.</p>
          `,
          vocabulary: [
            {
              theme: 'Описания и уточнения',
              words: [
                { type: 'noun', 'german': 'Grund', 'russian': 'причина', 'article': 'der', 'plural': 'Gründe', 'pluralArticle': 'die', 'exampleSingular': 'Das ist der Grund, warum ich hier bin.', 'examplePlural': 'Er nannte mehrere Gründe für seine Entscheidung.' },
                { type: 'verb', 'german': 'kennenlernen', 'russian': 'знакомиться', 'conjugation': 'ich lerne kennen, du lernst kennen', 'example': 'Die Leute, die ich kennengelernt habe, waren sehr nett.' },
                { type: 'verb', 'german': 'sich erinnern an', 'russian': 'вспоминать о', 'conjugation': 'ich erinnere mich an, du erinnerst dich an (+Akk)', 'example': 'Das ist das Lied, an das ich mich erinnere.' },
              ]
            }
          ],
          exercises: []
        },
        {
          id: 'n-deklination',
          title: 'N-склонение существительных',
          explanation: `
            <h2 class="font-headline text-2xl font-bold mb-4">N-Deklination: "слабое" склонение</h2>
            <p class="mb-4">Это особая группа существительных мужского рода (и одного среднего - das Herz), которые получают окончание <strong class="text-primary">-(e)n</strong> во всех падежах, кроме Nominativ единственного числа.</p>
            <p class="mb-4">К этой группе относятся многие одушевленные существительные на -e (der Junge, der Kollege), а также некоторые другие (der Herr, der Mensch, der Präsident).</p>
            <div class="overflow-x-auto">
              <table class="w-full text-left border-collapse my-4">
                  <tr class="bg-muted/50"><th class="border p-3">Падеж</th><th class="border p-3">Пример (der Kollege)</th></tr>
                  <tr><td class="border p-3">Nominativ</td><td class="border p-3">der Kollege</td></tr>
                  <tr><td class="border p-3">Akkusativ</td><td class="border p-3">den Kollege<strong class="text-primary">n</strong></td></tr>
                  <tr><td class="border p-3">Dativ</td><td class="border p-3">dem Kollege<strong class="text-primary">n</strong></td></tr>
                  <tr><td class="border p-3">Genitiv</td><td class="border p-3">des Kollege<strong class="text-primary">n</strong></td></tr>
              </table>
            </div>
          `,
          vocabulary: [
            {
              theme: 'Существительные N-склонения',
              words: [
                { type: 'noun', 'german': 'Junge', 'russian': 'мальчик', 'article': 'der', 'plural': 'Jungen', 'pluralArticle': 'die', 'exampleSingular': 'Ich sehe den Jungen.', 'examplePlural': 'Ich spreche mit den Jungen.' },
                { type: 'noun', 'german': 'Kollege', 'russian': 'коллега', 'article': 'der', 'plural': 'Kollegen', 'pluralArticle': 'die', 'exampleSingular': 'Ich spreche mit dem Kollegen.', 'examplePlural': 'Ich kenne meine Kollegen gut.' },
                { type: 'noun', 'german': 'Kunde', 'russian': 'клиент', 'article': 'der', 'plural': 'Kunden', 'pluralArticle': 'die', 'exampleSingular': 'Der Berater hilft dem Kunden.', 'examplePlural': 'Wir haben viele zufriedene Kunden.' },
                { type: 'noun', 'german': 'Mensch', 'russian': 'человек', 'article': 'der', 'plural': 'Menschen', 'pluralArticle': 'die', 'exampleSingular': 'Jeder Mensch ist einzigartig.', 'examplePlural': 'Das ist ein Problem für viele Menschen.' },
                { type: 'noun', 'german': 'Herr', 'russian': 'господин', 'article': 'der', 'plural': 'Herren', 'pluralArticle': 'die', 'exampleSingular': 'Guten Tag, Herr Schmidt.', 'examplePlural': 'Sehr geehrte Damen und Herren.' },
                { type: 'noun', 'german': 'Experte', 'russian': 'эксперт', 'article': 'der', 'plural': 'Experten', 'pluralArticle': 'die', 'exampleSingular': 'Wir haben einen Experten gefragt.', 'examplePlural': 'Die Meinung der Experten ist wichtig.' },
                { type: 'noun', 'german': 'Präsident', 'russian': 'президент', 'article': 'der', 'plural': 'Präsidenten', 'pluralArticle': 'die', 'exampleSingular': 'Die Rede des Präsidenten war lang.', 'examplePlural': 'Die Präsidenten trafen sich zur Konferenz.' },
                { type: 'noun', 'german': 'Name', 'russian': 'имя', 'article': 'der', 'plural': 'Namen', 'pluralArticle': 'die', 'exampleSingular': 'Ich habe seinen Namen vergessen.', 'examplePlural': 'Die Namen standen auf der Liste.', isIrregular: true },
                { type: 'noun', 'german': 'Herz', 'russian': 'сердце', 'article': 'das', 'plural': 'Herzen', 'pluralArticle': 'die', 'exampleSingular': 'Er hat ein gutes Herz.', 'examplePlural': 'Er schenkte ihr die Herzen aus Schokolade.', isIrregular: true },
              ]
            }
          ],
          exercises: []
        }
      ] 
    },
    { 
      id: 'c1', 
      title: 'Уровень C1: Профессиональный', 
      description: 'Высокий уровень владения. Вы сможете эффективно использовать язык для социальных, академических и профессиональных целей.', 
      topics: [
        {
          id: 'konjunktiv1',
          title: 'Косвенная речь (Konjunktiv I)',
          explanation: `
            <h2 class="font-headline text-2xl font-bold mb-4">Konjunktiv I: язык новостей и отчетов</h2>
            <p class="mb-4">Konjunktiv I используется для <strong class="text-primary">нейтральной передачи чужих слов</strong> (косвенной речи), не выражая своего мнения. Чаще всего встречается в официальных текстах, новостях.</p>
            <p class="mb-4">Образуется от основы инфинитива с добавлением особых окончаний. Самая узнаваемая форма — 3-е лицо ед.ч. (er/sie/es), где к основе добавляется <strong class="text-accent">-e</strong>.</p>
            <div class="bg-muted p-3 rounded-lg italic my-4">Er sagt, er <strong class="text-primary">komme</strong> später. (Он говорит, что придет позже.)</div>
            <p class="mt-2">Сравните с обычным Präsens: Er kommt. Konjunktiv I показывает, что это не наши слова, а пересказ.</p>
          `,
          vocabulary: [
            {
              theme: 'Передача косвенной речи',
              words: [
                { type: 'verb', 'german': 'sagen', 'russian': 'говорить', 'conjugation': 'Konjunktiv I (er/sie/es): sage', 'example': 'Der Politiker sagte, er wisse von nichts.' },
                { type: 'verb', 'german': 'behaupten', 'russian': 'утверждать', 'conjugation': 'Konjunktiv I (er/sie/es): behaupte', 'example': 'Der Zeuge behauptet, er habe nichts gesehen.' },
                { type: 'verb', 'german': 'berichten', 'russian': 'сообщать', 'conjugation': 'Konjunktiv I (er/sie/es): berichte', 'example': 'Die Zeitung berichtet, die Verhandlungen seien erfolgreich gewesen.' },
                { type: 'conjunction', 'german': 'laut', 'russian': 'согласно', 'structure': 'Предлог, управляющий Dativ или Genitiv.', 'example': 'Laut dem Bericht ist die Lage stabil.' },
              ]
            }
          ],
          exercises: []
        },
        {
          id: 'futur2',
          title: 'Будущее совершенное (Futur II)',
          explanation: `
            <h2 class="font-headline text-2xl font-bold mb-4">Futur II: предположения о будущем и прошлом</h2>
            <p class="mb-4">Futur II имеет два основных значения:</p>
            <ul class="list-disc list-inside space-y-2 mb-4 bg-muted p-4 rounded-lg">
              <li><strong>Предположение о завершенном действии в прошлом:</strong> Er wird das Buch schon <strong class="text-primary">gelesen haben</strong>. (Он, <strong class="text-accent">должно быть</strong>, уже прочитал книгу.)</li>
              <li><strong>Действие, которое завершится к моменту в будущем:</strong> Bis morgen <strong class="text-primary">werde</strong> ich die Arbeit <strong class="text-primary">beendet haben</strong>. (К завтрашнему дню я закончу работу.)</li>
            </ul>
            <p>Формула: <strong class="text-primary">werden (спряг.) + Partizip II + haben/sein (Infinitiv)</strong>.</p>
          `,
          vocabulary: [
            {
              theme: 'Предположения и будущие результаты',
              words: [
                { type: 'adjective', 'german': 'vermutlich', 'russian': 'предположительно, вероятно', 'comparative': '-', 'superlative': '-', 'example': 'Er wird vermutlich schon angekommen sein.' },
                { type: 'adjective', 'german': 'wahrscheinlich', 'russian': 'вероятно', 'comparative': '-', 'superlative': '-', 'example': 'Sie wird die Prüfung wahrscheinlich bestanden haben.' },
                { type: 'verb', 'german': 'abschließen', 'russian': 'завершать, заканчивать', 'conjugation': 'Futur II: werde abgeschlossen haben', 'example': 'Er wird sein Studium bald abgeschlossen haben.' },
                { type: 'verb', 'german': 'vergessen', 'russian': 'забывать', 'conjugation': 'Futur II: werde vergessen haben', 'example': 'Mist, ich werde die Schlüssel zu Hause vergessen haben.' },
              ]
            }
          ],
          exercises: []
        },
        {
          id: 'nominalisierung',
          title: 'Номинализация',
          explanation: `
            <h2 class="font-headline text-2xl font-bold mb-4">Номинализация: от глагола к существительному</h2>
            <p class="mb-4">Номинализация — это превращение глаголов или прилагательных в существительные. Это делает язык более формальным, абстрактным и "книжным", что характерно для уровня C1.</p>
            <ul class="list-disc list-inside space-y-2 bg-muted p-4 rounded-lg">
              <li><strong class="text-primary">Глагол → Существительное:</strong> hoffen (надеяться) → <strong class="text-accent">die Hoffnung</strong> (надежда)</li>
              <li><strong class="text-primary">Прилагательное → Существительное:</strong> schön (красивый) → <strong class="text-accent">die Schönheit</strong> (красота)</li>
            </ul>
            <p class="mt-4">Это позволяет выражать мысли более сжато и в научном стиле.</p>
          `,
          vocabulary: [
            {
              theme: 'Формальный и научный стиль',
              words: [
                { type: 'noun', 'german': 'Untersuchung', 'russian': 'исследование', 'article': 'die', 'plural': 'Untersuchungen', 'pluralArticle': 'die', 'exampleSingular': 'Die Untersuchung der Daten ergab neue Erkenntnisse.', 'examplePlural': 'Wissenschaftliche Untersuchungen sind teuer.' },
                { type: 'noun', 'german': 'Entwicklung', 'russian': 'развитие', 'article': 'die', 'plural': 'Entwicklungen', 'pluralArticle': 'die', 'exampleSingular': 'Die schnelle Entwicklung der Technologie ist faszinierend.', 'examplePlural': 'Wir beobachten die neuesten Entwicklungen.' },
                { type: 'noun', 'german': 'Entscheidung', 'russian': 'решение', 'article': 'die', 'plural': 'Entscheidungen', 'pluralArticle': 'die', 'exampleSingular': 'Die Entscheidung des Gerichts steht fest.', 'examplePlural': 'Man muss täglich viele Entscheidungen treffen.' },
                { type: 'adjective', 'german': 'wichtig', 'russian': 'важный', 'comparative': 'wichtiger', 'superlative': 'am wichtigsten', 'example': 'Die Wichtigkeit des Themas ist unbestritten.' },
              ]
            }
          ],
          exercises: []
        },
        {
          id: 'partizipialkonstruktionen',
          title: 'Причастные обороты',
          explanation: `
            <h2 class="font-headline text-2xl font-bold mb-4">Причастные обороты: элегантные сокращения</h2>
            <p class="mb-4">Конструкции с Partizip I (причастие настоящего времени) и Partizip II (причастие прошедшего времени) позволяют заменять целые придаточные предложения, делая речь более лаконичной и элегантной.</p>
            <ul class="list-disc list-inside space-y-2 bg-muted p-4 rounded-lg">
              <li><strong>Partizip I (активное, одновременное действие):</strong> Das <strong class="text-primary">weinende</strong> Kind (плачущий ребенок) = Das Kind, <strong class="text-accent">das weint</strong>.</li>
              <li><strong>Partizip II (пассивное, предшествующее действие):</strong> Die <strong class="text-primary">geschlossene</strong> Tür (закрытая дверь) = Die Tür, <strong class="text-accent">die geschlossen wurde</strong>.</li>
            </ul>
          `,
          vocabulary: [
            {
              theme: 'Сокращение предложений',
              words: [
                { type: 'adjective', 'german': 'lachend', 'russian': 'смеясь, смеющийся', 'comparative': '-', 'superlative': '-', 'example': 'Lachend erzählte er die Geschichte.' },
                { type: 'adjective', 'german': 'singend', 'russian': 'поя, поющий', 'comparative': '-', 'superlative': '-', 'example': 'Singend ging sie durch die Straße.' },
                { type: 'adjective', 'german': 'gestellt', 'russian': 'заданный, поставленный', 'comparative': '-', 'superlative': '-', 'example': 'Die gestellte Frage war kompliziert.' },
                { type: 'adjective', 'german': 'verloren', 'russian': 'потерянный', 'comparative': '-', 'superlative': '-', 'example': 'Das verlorene Geld wurde nie gefunden.' },
              ]
            }
          ],
          exercises: []
        }
      ] 
    }
  ]
};


    

    



    