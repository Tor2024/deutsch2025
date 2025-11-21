
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
                { german: 'der Name, -n', russian: 'имя', example: 'Mein Name ist Klaus.' },
                { german: 'heißen', russian: 'называться', example: 'Ich heiße Anna.' },
                { german: 'kommen aus', russian: 'быть родом из', example: 'Er kommt aus Deutschland.' },
                { german: 'wohnen in', russian: 'проживать в', example: 'Sie wohnt in Berlin.' },
                { german: 'die Sprache, -n', russian: 'язык', example: 'Welche Sprachen sprichst du?' },
                { german: 'die Familie, -n', russian: 'семья', example: 'Das ist meine Familie.' },
                { german: 'der Vater, "-', russian: 'отец', example: 'Mein Vater ist Arzt.' },
                { german: 'die Mutter, "-', russian: 'мать', example: 'Meine Mutter ist Lehrerin.' },
                { german: 'der Sohn, "-e', russian: 'сын', example: 'Das ist mein Sohn.' },
                { german: 'die Tochter, "-', russian: 'дочь', example: 'Ihre Tochter ist 5 Jahre alt.' },
                { german: 'verheiratet', russian: 'женат/замужем', example: 'Bist du verheiratet?' },
                { german: 'ledig', russian: 'холост/незамужняя', example: 'Nein, ich bin ledig.' },
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
              <li><strong>Дни недели:</strong> Montag, Dienstag, Mittwoch...</li>
              <li><strong>Распорядок:</strong> Ich <strong class="text-primary">stehe</strong> um 7 Uhr <strong class="text-primary">auf</strong>. Dann frühstücke ich. Ich <strong class="text-primary">kaufe</strong> im Supermarkt <strong class="text-primary">ein</strong>.</li>
            </ul>
            
            <h3 class="font-headline text-xl font-semibold mt-6 mb-2">Грамматика: Глаголы с отделяемыми приставками (Trennbare Verben)</h3>
            <p class="mb-4">У некоторых глаголов есть приставка, которая в простом предложении в Präsens "отделяется" и уходит в самый конец. Например: <strong class="text-primary">auf</strong>stehen, <strong class="text-primary">ein</strong>kaufen, <strong class="text-primary">an</strong>rufen.</p>
            <div class="bg-muted p-3 rounded-lg italic my-4">Ich <strong class="text-accent">rufe</strong> meine Freundin <strong class="text-primary">an</strong>. (Я звоню моей подруге.)</div>
          `,
          vocabulary: [
             {
              theme: 'Дом и повседневность',
              words: [
                { german: 'die Wohnung, -en', russian: 'квартира', example: 'Ich suche eine Wohnung.' },
                { german: 'das Zimmer, -', russian: 'комната', example: 'Mein Zimmer ist gemütlich.' },
                { german: 'die Küche, -n', russian: 'кухня', example: 'Wir essen in der Küche.' },
                { german: 'das Bett, -en', russian: 'кровать', example: 'Das Bett steht im Schlafzimmer.' },
                { german: 'die Uhr, -en', russian: 'час, часы', example: 'Es ist 8 Uhr.' },
                { german: 'der Tag, -e', russian: 'день', example: 'Was machst du heute den ganzen Tag?' },
                { german: 'der Morgen, -', russian: 'утро', example: 'Am Morgen trinke ich Kaffee.' },
                { german: 'der Abend, -e', russian: 'вечер', example: 'Am Abend sehe ich fern.' },
                { german: 'aufstehen', russian: 'вставать', example: 'Wann stehst du auf?' },
                { german: 'einkaufen', russian: 'делать покупки', example: 'Ich kaufe am Samstag ein.' },
                { german: 'anrufen', russian: 'звонить по телефону', example: 'Rufst du mich an?' },
                { german: 'fernsehen', russian: 'смотреть телевизор', example: 'Sie sieht abends fern.' },
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
                { german: 'das Essen', russian: 'еда', example: 'Das Essen ist lecker.' },
                { german: 'das Getränk, -e', russian: 'напиток', example: 'Was ist dein Lieblingsgetränk?' },
                { german: 'der Apfel, "-', russian: 'яблоко', example: 'Ich esse einen Apfel.' },
                { german: 'das Brot, -e', russian: 'хлеб', example: 'Ich kaufe ein Brot.' },
                { german: 'die Milch', russian: 'молоко', example: 'Trinkst du Milch?' },
                { german: 'kaufen', russian: 'покупать', example: 'Sie kauft einen Rock.' },
                { german: 'kosten', russian: 'стоить', example: 'Was kostet die Hose?' },
                { german: 'der Preis, -e', russian: 'цена', example: 'Der Preis ist zu hoch.' },
                { german: 'das Restaurant, -s', russian: 'ресторан', example: 'Wir gehen heute ins Restaurant.' },
                { german: 'bestellen', russian: 'заказывать', example: 'Ich möchte einen Salat bestellen.' },
                { german: 'bezahlen', russian: 'платить', example: 'Ich bezahle mit Karte.' },
                { german: 'mögen', russian: 'любить, нравиться', example: 'Ich mag Käse.' },
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
                { german: 'das Hobby, -s', russian: 'хобби', example: 'Mein Hobby ist Lesen.' },
                { german: 'die Freizeit', russian: 'свободное время', example: 'Was machst du in der Freizeit?' },
                { german: 'können', russian: 'мочь, уметь', example: 'Er kann gut kochen.' },
                { german: 'wollen', russian: 'хотеть', example: 'Ich will Deutsch lernen.' },
                { german: 'müssen', russian: 'быть должным', example: 'Wir müssen jetzt gehen.' },
                { german: 'der Sport', russian: 'спорт', example: 'Machst du gern Sport?' },
                { german: 'lesen', russian: 'читать', example: 'Ich lese gern Bücher.' },
                { german: 'Freunde treffen', russian: 'встречаться с друзьями', example: 'Am Freitag treffe ich Freunde.' },
                { german: 'der Termin, -e', russian: 'встреча, запись (к врачу)', example: 'Ich habe einen Termin um 14 Uhr.' },
                { german: 'Zeit haben', russian: 'иметь время', example: 'Hast du morgen Zeit?' },
                { german: 'die Einladung, -en', russian: 'приглашение', example: 'Danke für die Einladung.' },
                { german: 'die Idee, -n', russian: 'идея', example: 'Das ist eine gute Idee.' },
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
                { german: 'der Bahnhof, "-e', russian: 'вокзал', example: 'Wo ist der Bahnhof?' },
                { german: 'der Flughafen, "-', russian: 'аэропорт', example: 'Wir fahren zum Flughafen.' },
                { german: 'der Zug, "-e', russian: 'поезд', example: 'Der Zug fährt um 10 Uhr ab.' },
                { german: 'die Fahrkarte, -n', russian: 'билет', example: 'Ich brauche eine Fahrkarte.' },
                { german: 'der Weg, -e', russian: 'путь, дорога', example: 'Können Sie mir den Weg zeigen?' },
                { german: 'links', russian: 'налево', example: 'Gehen Sie hier links.' },
                { german: 'rechts', russian: 'направо', example: 'Die Apotheke ist rechts.' },
                { german: 'geradeaus', russian: 'прямо', example: 'Immer geradeaus.' },
                { german: 'das Hotel, -s', russian: 'отель', example: 'Ich habe ein Zimmer im Hotel gebucht.' },
                { german: 'buchen', russian: 'бронировать', example: 'Hast du das Ticket gebucht?' },
                { german: 'reisen', russian: 'путешествовать', example: 'Ich reise gern.' },
                { german: 'der Urlaub, -e', russian: 'отпуск', example: 'Wir machen Urlaub in Italien.' },
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
                { german: 'die Geburt, -en', russian: 'рождение', example: 'der Geburtsort' },
                { german: 'die Schule, -n', russian: 'школа', example: 'Ich bin in die Schule gegangen.' },
                { german: 'die Ausbildung, -en', russian: 'образование, обучение', example: 'Er hat eine Ausbildung als Mechaniker gemacht.' },
                { german: 'der Beruf, -e', russian: 'профессия', example: 'Was sind Sie von Beruf?' },
                { german: 'das Ereignis, -se', russian: 'событие', example: 'Das war ein wichtiges Ereignis in meinem Leben.' },
                { german: 'die Vergangenheit', russian: 'прошлое', example: 'In der Vergangenheit war alles anders.' },
                { german: 'der Lebenslauf, "-e', russian: 'резюме, биография', example: 'Schicken Sie mir bitte Ihren Lebenslauf.' },
                { german: 'studieren', russian: 'учиться (в вузе)', example: 'Sie hat in Berlin studiert.' },
                { german: 'umziehen', russian: 'переезжать', example: 'Wir sind letztes Jahr umgezogen.' },
                { german: 'heiraten', russian: 'жениться, выходить замуж', example: 'Sie haben 1990 geheiratet.' },
                { german: 'gelernt', russian: 'учил (Partizip II от lernen)', example: 'Wir haben Deutsch gelernt.' },
                { german: 'gesehen', russian: 'видел (Partizip II от sehen)', example: 'Hast du den Film gesehen?' },
                { german: 'gegangen', russian: 'шел (Partizip II от gehen)', example: 'Sie ist ins Kino gegangen.' },
                { german: 'gefahren', russian: 'ехал (Partizip II от fahren)', example: 'Ich bin nach Berlin gefahren.' },
                { german: 'gekommen', russian: 'пришел (Partizip II от kommen)', example: 'Wann bist du gekommen?' },
                { german: 'gegessen', russian: 'ел (Partizip II от essen)', example: 'Wir haben Pizza gegessen.' },
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
                { german: 'die Miete, -n', russian: 'арендная плата', example: 'Die Miete ist sehr hoch.' },
                { german: 'die Nebenkosten (Pl.)', russian: 'коммунальные услуги', example: 'Die Nebenkosten sind nicht in der Miete enthalten.' },
                { german: 'der Vermieter, -', russian: 'арендодатель', example: 'Ich muss meinen Vermieter anrufen.' },
                { german: 'die Wohnungsanzeige, -n', russian: 'объявление о сдаче квартиры', example: 'Ich habe eine interessante Wohnungsanzeige gelesen.' },
                { german: 'kaputt', russian: 'сломанный', example: 'Die Heizung ist kaputt.' },
                { german: 'funktionieren', russian: 'работать, функционировать', example: 'Das Internet funktioniert nicht.' },
                { german: 'der Handwerker, -', russian: 'мастер, ремесленник', example: 'Der Handwerker kommt morgen.' },
                { german: 'das Konto, Konten', russian: 'счёт (в банке)', example: 'Ich möchte ein Konto eröffnen.' },
                { german: 'überweisen', russian: 'переводить (деньги)', example: 'Können Sie das Geld überweisen?' },
                { german: 'das Paket, -e', russian: 'посылка', example: 'Ich muss ein Paket zur Post bringen.' },
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
                { german: 'der Schmerz, -en', russian: 'боль', example: 'Ich habe Kopfschmerzen.' },
                { german: 'weh|tun', russian: 'болеть', example: 'Mein Hals tut weh.' },
                { german: 'das Fieber', russian: 'температура, жар', example: 'Das Kind hat Fieber.' },
                { german: 'der Arzt, "-e', russian: 'врач', example: 'Ich muss zum Arzt gehen.' },
                { german: 'der Termin, -e', russian: 'запись, встреча', example: 'Ich habe einen Termin beim Arzt.' },
                { german: 'das Rezept, -e', russian: 'рецепт', example: 'Der Arzt gibt mir ein Rezept.' },
                { german: 'die Apotheke, -n', russian: 'аптека', example: 'Ich gehe in die Apotheke.' },
                { german: 'sich fühlen', russian: 'чувствовать себя', example: 'Wie fühlen Sie sich?' },
                { german: 'die Verspätung, -en', russian: 'опоздание', example: 'Der Zug hat Verspätung.' },
                { german: 'die Fahrkarte, -n', russian: 'билет', example: 'Wo kann ich eine Fahrkarte kaufen?' },
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
                { german: 'der Lebenslauf, "-e', russian: 'резюме', example: 'Haben Sie Ihren Lebenslauf dabei?' },
                { german: 'das Vorstellungsgespräch, -e', russian: 'собеседование', example: 'Ich bin nervös vor dem Vorstellungsgespräch.' },
                { german: 'der Arbeitgeber, -', russian: 'работодатель', example: 'Mein Arbeitgeber ist sehr flexibel.' },
                { german: 'der Arbeitnehmer, -', russian: 'работник', example: 'Die Rechte der Arbeitnehmer sind wichtig.' },
                { german: 'die Bewerbung, -en', russian: 'заявление о приеме на работу', example: 'Ich habe viele Bewerbungen geschrieben.' },
                { german: 'sich bewerben um', russian: 'подавать заявление на', example: 'Er bewirbt sich um eine neue Stelle.' },
                { german: 'die Gesellschaft, -en', russian: 'общество', example: 'Das ist ein Problem für die ganze Gesellschaft.' },
                { german: 'die Generation, -en', russian: 'поколение', example: 'Die ältere Generation denkt anders.' },
                { german: 'der Konflikt, -e', russian: 'конфликт', example: 'Wir müssen eine Lösung für den Konflikt finden.' },
                { german: 'deswegen / deshalb / daher', russian: 'поэтому', example: 'Ich war krank, deswegen bin ich nicht gekommen.' },
                { german: 'obwohl', russian: 'хотя', example: 'Obwohl es regnet, gehen wir spazieren.' },
                { german: 'trotzdem', russian: 'несмотря на это', example: 'Es regnet, trotzdem gehen wir spazieren.' },
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
                { german: 'die Gesundheit', russian: 'здоровье', example: 'Gesundheit ist das Wichtigste.' },
                { german: 'die Ernährung', russian: 'питание', example: 'Eine gesunde Ernährung ist entscheidend.' },
                { german: 'sich beschweren über', russian: 'жаловаться на', example: 'Der Kunde beschwert sich über den schlechten Service.' },
                { german: 'die Werbung, -en', russian: 'реклама', example: 'Werbung im Fernsehen nervt mich.' },
                { german: 'der Einfluss, "-e', russian: 'влияние', example: 'Soziale Medien haben einen großen Einfluss.' },
                { german: 'der Verbraucher, -', russian: 'потребитель', example: 'Die Rechte der Verbraucher müssen geschützt werden.' },
                { german: 'die Nachrichten (Pl.)', russian: 'новости', example: 'Hast du heute die Nachrichten gesehen?' },
                { german: 'die Meinung, -en', russian: 'мнение', example: 'Meiner Meinung nach ist das eine gute Idee.' },
                { german: 'argumentieren', russian: 'аргументировать', example: 'Er kann seine Position gut argumentieren.' },
                { german: 'sich interessieren für', russian: 'интересоваться чем-либо', example: 'Ich interessiere mich für Geschichte.' },
                { german: 'teilnehmen an', russian: 'принимать участие в', example: 'Nimmst du am Wettbewerb teil?' },
                { german: 'die Versicherung, -en', russian: 'страховка', example: 'Hast du eine Krankenversicherung?' },
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
                { german: 'die Umwelt', russian: 'окружающая среда', example: 'Wir müssen die Umwelt schützen.' },
                { german: 'der Klimawandel', russian: 'изменение климата', example: 'Der Klimawandel ist ein globales Problem.' },
                { german: 'der Müll', russian: 'мусор', example: 'Bitte trennen Sie den Müll.' },
                { german: 'das Recycling', russian: 'переработка', example: 'Recycling ist sehr wichtig.' },
                { german: 'das Gerät, -e', russian: 'устройство, прибор', example: 'Mein neues Gerät hat viele Funktionen.' },
                { german: 'die Anwendung, -en / die App, -s', russian: 'приложение', example: 'Ich nutze diese App jeden Tag.' },
                { german: 'der Akku, -s', russian: 'аккумулятор', example: 'Mein Akku ist fast leer.' },
                { german: 'die Stornierung, -en', russian: 'отмена, аннулирование', example: 'Die Stornierung des Fluges war kostenlos.' },
                { german: 'die Sehenswürdigkeit, -en', russian: 'достопримечательность', example: 'Welche Sehenswürdigkeiten gibt es hier?' },
                { german: 'die Unterkunft, "-e', russian: 'жилье, ночлег', example: 'Wir suchen eine günstige Unterkunft.' },
                { german: 'umweltfreundlich', russian: 'экологичный', example: 'Ich versuche, umweltfreundlich zu leben.' },
                { german: 'digital', russian: 'цифровой', example: 'Die digitale Welt verändert alles.' },
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
                { german: 'nachdem', russian: 'после того как', example: 'Nachdem er gegessen hatte, fühlte er sich besser.' },
                { german: 'bevor', russian: 'прежде чем', example: 'Er hatte gelernt, bevor er die Prüfung schrieb.' },
                { german: 'bereits', russian: 'уже', example: 'Sie hatte den Film bereits gesehen.' },
                { german: 'zuvor', russian: 'до этого, прежде', example: 'Ich kannte ihn nicht, ich hatte ihn nie zuvor getroffen.' },
                { german: 'ankommen', russian: 'прибывать', example: 'Als ich ankam, war der Zug schon abgefahren.' },
                { german: 'verlassen', russian: 'покидать', example: 'Er hatte das Haus verlassen, bevor es anfing zu regnen.' },
                { german: 'einschlafen', russian: 'засыпать', example: 'Das Kind war schnell eingeschlafen, weil es sehr müde war.' },
                { german: 'beginnen', russian: 'начинать', example: 'Das Konzert hatte schon begonnen, als wir ankamen.' },
                { german: 'lesen', russian: 'читать', example: 'Ich hatte das Buch gelesen, bevor ich den Film sah.' },
                { german: 'passieren', russian: 'случаться, происходить', example: 'Sie erzählte, was am Tag zuvor passiert war.' },
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
                { german: 'werden', russian: 'становиться (вспом. гл. пассива)', example: 'Das Fenster wird geputzt.' },
                { german: 'reparieren', russian: 'ремонтировать', example: 'Mein Fahrrad wird morgen repariert.' },
                { german: 'bauen', russian: 'строить', example: 'Die Brücke wurde in nur einem Jahr gebaut.' },
                { german: 'informieren', russian: 'информировать', example: 'Die Studenten wurden über die Änderungen informiert.' },
                { german: 'öffnen', russian: 'открывать', example: 'Das Museum wird um 10 Uhr geöffnet.' },
                { german: 'schließen', russian: 'закрывать', example: 'Die Tür wurde vom Wind geschlossen.' },
                { german: 'verkaufen', russian: 'продавать', example: 'Das Haus ist bereits verkauft worden.' },
                { german: 'von (+D)', russian: 'кем-либо (указание деятеля в пассиве)', example: 'Der Brief wurde von meinem Bruder geschrieben.' },
                { german: 'durch (+A)', russian: 'посредством чего-либо', example: 'Das Problem wurde durch Diskussionen gelöst.' },
                { german: 'die Lösung, -en', russian: 'решение', example: 'Eine Lösung muss gefunden werden.' },
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
                { german: 'der, die, das (Relativpronomen)', russian: 'который, которая, которое', example: 'Der Film, den ich gesehen habe, war super.' },
                { german: 'dessen (Genitiv m/n)', russian: 'которого, чей', example: 'Das ist der Autor, dessen Bücher ich liebe.' },
                { german: 'deren (Genitiv f/pl)', russian: 'которой, которых, чья', example: 'Die Frau, deren Auto gestohlen wurde, ging zur Polizei.' },
                { german: 'was (Relativpronomen)', russian: 'что', example: 'Das ist alles, was ich weiß.' },
                { german: 'wo (Relativadverb)', russian: 'где', example: 'Die Stadt, in der ich lebe, ist sehr schön.' },
                { german: 'der Moment, -e', russian: 'момент', example: 'Das war der Moment, in dem alles klar wurde.' },
                { german: 'der Grund, "-e', russian: 'причина', example: 'Das ist der Grund, warum ich hier bin.' },
                { german: 'die Art, -en', russian: 'способ, манера', example: 'Die Art, wie sie spricht, gefällt mir.' },
                { german: 'kennenlernen', russian: 'знакомиться', example: 'Die Leute, die ich kennengelernt habe, waren sehr nett.' },
                { german: 'sich erinnern an', russian: 'вспоминать о', example: 'Das ist das Lied, an das ich mich erinnere.' },
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
                { german: 'der Junge, -n', russian: 'мальчик', example: 'Ich sehe den Jungen.' },
                { german: 'der Kollege, -n', russian: 'коллега', example: 'Ich spreche mit dem Kollegen.' },
                { german: 'der Kunde, -n', russian: 'клиент', example: 'Der Berater hilft dem Kunden.' },
                { german: 'der Mensch, -en', russian: 'человек', example: 'Das ist ein Problem für viele Menschen.' },
                { german: 'der Herr, -n', russian: 'господин', example: 'Guten Tag, Herr Schmidt.' },
                { german: 'der Experte, -n', russian: 'эксперт', example: 'Wir haben einen Experten gefragt.' },
                { german: 'der Präsident, -en', russian: 'президент', example: 'Die Rede des Präsidenten war lang.' },
                { german: 'der Name, -ns, -n', russian: 'имя', example: 'Ich habe seinen Namen vergessen.' },
                { german: 'der Gedanke, -ns, -n', russian: 'мысль', example: 'Ich kann deine Gedanken nicht lesen.' },
                { german: 'das Herz, -ens, -en', russian: 'сердце', example: 'Er hat ein gutes Herz.' },
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
                { german: 'sagen, er sage', russian: 'говорить, он (якобы) говорит', example: 'Der Politiker sagte, er wisse von nichts.' },
                { german: 'meinen, er meine', russian: 'полагать, он (якобы) полагает', example: 'Sie meinte, es sei zu spät.' },
                { german: 'behaupten, er behaupte', russian: 'утверждать, он (якобы) утверждает', example: 'Der Zeuge behauptet, er habe nichts gesehen.' },
                { german: 'berichten, er berichte', russian: 'сообщать, он (якобы) сообщает', example: 'Die Zeitung berichtet, die Verhandlungen seien erfolgreich gewesen.' },
                { german: 'haben, er habe', russian: '(Konj. I) иметь', example: 'Er sagt, er habe keine Zeit.' },
                { german: 'sein, er sei', russian: '(Konj. I) быть', example: 'Sie glaubt, er sei im Büro.' },
                { german: 'können, er könne', russian: '(Konj. I) мочь', example: 'Der Arzt meint, der Patient könne nach Hause gehen.' },
                { german: 'die Aussage, -n', russian: 'высказывание, показание', example: 'Laut seiner Aussage war er nicht am Tatort.' },
                { german: 'laut (+D/G)', russian: 'согласно', example: 'Laut dem Bericht ist die Lage stabil.' },
                { german: 'der Bericht, -e', russian: 'отчет, сообщение', example: 'Der Bericht des Ministers sei unvollständig.' },
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
                { german: 'vermutlich', russian: 'предположительно, вероятно', example: 'Er wird vermutlich schon angekommen sein.' },
                { german: 'wahrscheinlich', russian: 'вероятно', example: 'Sie wird die Prüfung wahrscheinlich bestanden haben.' },
                { german: 'sicherlich', russian: 'наверняка', example: 'Du wirst sicherlich von ihm gehört haben.' },
                { german: 'bis (Zeitpunkt)', russian: 'к (моменту времени)', example: 'Bis nächste Woche werde ich das Projekt abgeschlossen haben.' },
                { german: 'abschließen', russian: 'завершать, заканчивать', example: 'Er wird sein Studium bald abgeschlossen haben.' },
                { german: 'vergessen', russian: 'забывать', example: 'Mist, ich werde die Schlüssel zu Hause vergessen haben.' },
                { german: 'ankommen', russian: 'прибывать', example: 'In einer Stunde wird er in Berlin angekommen sein.' },
                { german: 'die Vermutung, -en', russian: 'предположение', example: 'Es ist nur eine Vermutung, aber er wird wohl schon gegangen sein.' },
                { german: 'die Zukunft', russian: 'будущее', example: 'In 10 Jahren wird sich die Welt stark verändert haben.' },
                { german: 'die Vergangenheit', russian: 'прошлое', example: 'Er wird in der Vergangenheit viele Fehler gemacht haben.' },
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
                { german: 'die Untersuchung, -en', russian: 'исследование (от untersuchen)', example: 'Die Untersuchung der Daten ergab neue Erkenntnisse.' },
                { german: 'die Entwicklung, -en', russian: 'развитие (от entwickeln)', example: 'Die schnelle Entwicklung der Technologie ist faszinierend.' },
                { german: 'die Entscheidung, -en', russian: 'решение (от entscheiden)', example: 'Die Entscheidung des Gerichts steht fest.' },
                { german: 'die Lösung, -en', russian: 'решение (от lösen)', example: 'Die Lösung des Problems war schwierig.' },
                { german: 'die Wichtigkeit', russian: 'важность (от wichtig)', example: 'Er betonte die Wichtigkeit des Projekts.' },
                { german: 'die Möglichkeit, -en', russian: 'возможность (от möglich)', example: 'Es gibt viele Möglichkeiten.' },
                { german: 'das Verständnis', russian: 'понимание (от verstehen)', example: 'Ihr Verständnis für die Situation war begrenzt.' },
                { german: 'der Bau', russian: 'строительство (от bauen)', example: 'Der Bau der neuen Brücke beginnt bald.' },
                { german: 'die Ankunft', russian: 'прибытие (от ankommen)', example: 'Wir erwarten seine Ankunft um 18 Uhr.' },
                { german: 'das Treffen, -', russian: 'встреча (от treffen)', example: 'Das Treffen findet morgen statt.' },
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
                { german: 'lachend', russian: 'смеясь, смеющийся', example: 'Lachend erzählte er die Geschichte.' },
                { german: 'singend', russian: 'поя, поющий', example: 'Singend ging sie durch die Straße.' },
                { german: 'der wartende Kunde', russian: 'ожидающий клиент', example: 'Der wartende Kunde wurde ungeduldig.' },
                { german: 'die gestellte Frage', russian: 'заданный вопрос', example: 'Die gestellte Frage war kompliziert.' },
                { german: 'das verlorene Geld', russian: 'потерянные деньги', example: 'Das verlorene Geld wurde nie gefunden.' },
                { german: 'die neu eröffnete Bäckerei', russian: 'недавно открывшаяся булочная', example: 'Ich kaufe Brot in der neu eröffneten Bäckerei.' },
                { german: 'der angekommene Zug', russian: 'прибывший поезд', example: 'Der gerade angekommene Zug fährt nach Hamburg.' },
                { german: 'fließend', russian: 'бегло', example: 'Fließend Deutsch sprechend, fand sie schnell einen Job.' },
                { german: 'zitternd', russian: 'дрожа', example: 'Zitternd vor Kälte wartete er auf den Bus.' },
                { german: 'gekocht', russian: 'сваренный, приготовленный', example: 'Die gekochten Kartoffeln schmecken gut.' },
              ]
            }
          ],
          exercises: []
        }
      ] 
    }
  ]
};


    

    
