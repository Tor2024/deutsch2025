
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
          ]
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
          ]
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
          ]
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
          ]
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
          ]
        }
      ]
    },
    {
      id: 'a2', 
      title: 'Уровень A2: Элементарный',
      description: 'Расширяем словарный запас и грамматику. Вы научитесь говорить о прошлом, делать покупки, договариваться о встречах и лучше понимать собеседников.',
      topics: [
        {
          id: 'perfekt',
          title: 'Прошедшее время Perfekt',
          explanation: `
            <h2 class="font-headline text-2xl font-bold mb-4">Время Perfekt: Рассказываем о прошлом</h2>
            <p class="mb-4">Perfekt — это основное время для разговоров о прошедших событиях. Оно образуется с помощью вспомогательного глагола (<strong class="text-primary">haben</strong> или <strong class="text-primary">sein</strong>) и причастия прошедшего времени (<strong>Partizip II</strong>).</p>
            <div class="bg-muted p-3 rounded-lg italic my-4">Формула: <strong>Подлежащее + haben/sein + ... + Partizip II.</strong></div>
            
            <h3 class="font-headline text-xl font-semibold mt-6 mb-2">Когда haben, а когда sein?</h3>
            <ul class="list-disc list-inside space-y-2 mb-6">
              <li><strong class="text-primary">Sein</strong> используется с глаголами, обозначающими <strong class="text-accent">движение</strong> (gehen, fahren, fliegen) или <strong class="text-accent">смену состояния</strong> (einschlafen, aufwachen, sterben).<br><em>Пример: Ich <strong class="text-primary">bin</strong> nach Hause <strong class="text-accent">gegangen</strong>. (Я ушел домой.)</em></li>
              <li><strong class="text-primary">Haben</strong> используется во всех остальных случаях, что составляет большинство глаголов.<br><em>Пример: Ich <strong class="text-primary">habe</strong> ein Buch <strong class="text-accent">gelesen</strong>. (Я прочитал книгу.)</em></li>
            </ul>

            <h3 class="font-headline text-xl font-semibold mt-6 mb-2">Как образовать Partizip II?</h3>
            <ul class="list-disc list-inside space-y-2">
              <li><strong>Слабые глаголы:</strong> <strong class="text-primary">ge</strong> + основа + <strong class="text-primary">(e)t</strong>. Пример: machen → <strong class="text-accent">gemacht</strong>.</li>
              <li><strong>Сильные глаголы:</strong> <strong class="text-primary">ge</strong> + (часто измененная) основа + <strong class="text-primary">en</strong>. Пример: sprechen → <strong class="text-accent">gesprochen</strong>. Формы сильных глаголов нужно запоминать.</li>
            </ul>
          `,
          vocabulary: [
            {
              theme: 'Прошедшие события',
              words: [
                { german: 'gestern', russian: 'вчера', example: 'Gestern habe ich gearbeitet.' },
                { german: 'gemacht', russian: 'делал (Partizip II от machen)', example: 'Was hast du gestern gemacht?' },
                { german: 'gearbeitet', russian: 'работал (Partizip II от arbeiten)', example: 'Er hat 10 Stunden gearbeitet.' },
                { german: 'gelernt', russian: 'учил (Partizip II от lernen)', example: 'Wir haben Deutsch gelernt.' },
                { german: 'gesehen', russian: 'видел (Partizip II от sehen)', example: 'Hast du den Film gesehen?' },
                { german: 'gegangen', russian: 'шел (Partizip II от gehen)', example: 'Sie ist ins Kino gegangen.' },
                { german: 'gefahren', russian: 'ехал (Partizip II от fahren)', example: 'Ich bin nach Berlin gefahren.' },
                { german: 'gekommen', russian: 'пришел (Partizip II от kommen)', example: 'Wann bist du gekommen?' },
                { german: 'gegessen', russian: 'ел (Partizip II от essen)', example: 'Wir haben Pizza gegessen.' },
                { german: 'getrunken', russian: 'пил (Partizip II от trinken)', example: 'Er hat Kaffee getrunken.' },
              ]
            }
          ]
        },
        {
          id: 'dativ',
          title: 'Падеж Dativ',
          explanation: `
            <h2 class="font-headline text-2xl font-bold mb-4">Дательный падеж (Dativ)</h2>
            <p class="mb-4">Dativ отвечает на вопросы "Кому?" (<strong class="text-primary">Wem?</strong>), "Где?" (<strong class="text-primary">Wo?</strong>). Он указывает на <strong class="text-accent">косвенное дополнение</strong> (адресата действия) или на местоположение.</p>
            <ul class="list-disc list-inside space-y-2 mb-6">
              <li><strong>Косвенное дополнение:</strong> Ich gebe <strong class="text-primary">dem Mann</strong> ein Buch. (Я даю <strong class="text-accent">мужчине</strong> книгу.) - Кому я даю книгу?</li>
              <li><strong>Местоположение:</strong> Das Buch liegt auf <strong class="text-primary">dem Tisch</strong>. (Книга лежит на <strong class="text-accent">столе</strong>.) - Где лежит книга?</li>
            </ul>
            
            <h3 class="font-headline text-xl font-semibold mt-6 mb-2">Артикли и местоимения в Dativ</h3>
             <div class="overflow-x-auto">
              <table class="w-full text-left border-collapse my-4">
                <thead>
                  <tr class="bg-muted/50">
                    <th class="border p-3">Падеж</th>
                    <th class="border p-3">Муж.р. (m)</th>
                    <th class="border p-3">Жен.р. (f)</th>
                    <th class="border p-3">Сред.р. (n)</th>
                    <th class="border p-3">Мн.ч. (pl)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border p-3 font-medium">Nominativ</td>
                    <td class="border p-3">der</td>
                    <td class="border p-3">die</td>
                    <td class="border p-3">das</td>
                    <td class="border p-3">die</td>
                  </tr>
                  <tr>
                    <td class="border p-3 font-medium">Dativ</td>
                    <td class="border p-3"><strong class="text-primary">dem</strong></td>
                    <td class="border p-3"><strong class="text-primary">der</strong></td>
                    <td class="border p-3"><strong class="text-primary">dem</strong></td>
                    <td class="border p-3"><strong class="text-primary">den ...n</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p class="mt-4">Важно: во множественном числе в Dativ к существительному почти всегда добавляется окончание <strong class="text-primary">-n</strong> (если его там еще нет).</p>
          `,
          vocabulary: [
            {
              theme: 'Глаголы и предлоги, требующие Dativ',
              words: [
                { german: 'helfen (+D)', russian: 'помогать', example: 'Ich helfe dir.' },
                { german: 'danken (+D)', russian: 'благодарить', example: 'Wir danken dem Lehrer.' },
                { german: 'gefallen (+D)', russian: 'нравиться', example: 'Das Auto gefällt mir.' },
                { german: 'antworten (+D)', russian: 'отвечать', example: 'Antworte mir bitte.' },
                { german: 'der Mann, "-er', russian: 'мужчина', example: 'Ich gebe dem Mann das Buch.' },
                { german: 'die Frau, -en', russian: 'женщина, жена', example: 'Er hilft der Frau.' },
                { german: 'das Kind, -er', russian: 'ребенок', example: 'Die Mutter liest dem Kind vor.' },
                { german: 'die Leute (Pl.)', russian: 'люди', example: 'Der Politiker antwortet den Leuten.' },
                { german: 'mit (+D)', russian: 'с (кем-либо, чем-либо)', example: 'Ich fahre mit dem Zug.' },
                { german: 'nach (+D)', russian: 'в, на (направление)', example: 'Wir fliegen nach Deutschland.' },
              ]
            }
          ]
        },
        {
          id: 'modalverben',
          title: 'Модальные глаголы',
          explanation: `
            <h2 class="font-headline text-2xl font-bold mb-4">Модальные глаголы</h2>
            <p class="mb-4">Модальные глаголы выражают отношение к действию: возможность, необходимость, желание. В предложении модальный глагол спрягается и стоит на втором месте, а основной глагол уходит в конец в форме инфинитива.</p>
            <div class="bg-muted p-3 rounded-lg italic my-4">Ich <strong class="text-primary">kann</strong> gut Deutsch <strong class="text-accent">sprechen</strong>. (Я могу хорошо говорить по-немецки.)</div>
            
            <h3 class="font-headline text-xl font-semibold mt-6 mb-2">Шесть основных модальных глаголов:</h3>
            <ul class="list-disc list-inside space-y-2 mb-6">
              <li><strong>können:</strong> мочь, уметь (физическая возможность, навык)</li>
              <li><strong>müssen:</strong> быть должным (внутренняя необходимость, обязанность)</li>
              <li><strong>sollen:</strong> быть должным (совет, поручение, моральный долг)</li>
              <li><strong>dürfen:</strong> мочь (иметь разрешение)</li>
              <li><strong>wollen:</strong> хотеть (конкретное желание)</li>
              <li><strong>mögen / möchten:</strong> любить, нравиться / хотел бы (вежливое желание)</li>
            </ul>

             <h3 class="font-headline text-xl font-semibold mt-6 mb-2">Особенности спряжения</h3>
             <p class="mb-4">В единственном числе (<strong class="text-primary">ich, du, er/sie/es</strong>) многие модальные глаголы меняют корневую гласную. Формы для <strong class="text-primary">ich</strong> и <strong class="text-primary">er/sie/es</strong> совпадают!</p>
             <ul class="list-disc list-inside space-y-2 p-4 bg-muted rounded-lg">
              <li><strong>können:</strong> ich kann, du kannst, er/sie/es kann</li>
              <li><strong>müssen:</strong> ich muss, du musst, er/sie/es muss</li>
              <li><strong>dürfen:</strong> ich darf, du darfst, er/sie/es darf</li>
            </ul>
          `,
          vocabulary: [
             {
              theme: 'Возможности и обязанности',
              words: [
                { german: 'können', russian: 'мочь, уметь', example: 'Ich kann schwimmen.' },
                { german: 'müssen', russian: 'быть должным (необходимо)', example: 'Du musst die Hausaufgaben machen.' },
                { german: 'sollen', russian: 'быть должным (совет)', example: 'Du sollst nicht lügen.' },
                { german: 'dürfen', russian: 'мочь (иметь разрешение)', example: 'Hier darf man nicht parken.' },
                { german: 'wollen', russian: 'хотеть', example: 'Wir wollen ins Kino gehen.' },
                { german: 'möchten', russian: 'хотел бы', example: 'Ich möchte einen Kaffee, bitte.' },
                { german: 'die Hausaufgabe, -n', russian: 'домашнее задание', example: 'Er muss seine Hausaufgaben machen.' },
                { german: 'schwimmen', russian: 'плавать', example: 'Kannst du schwimmen?' },
                { german: 'rauchen', russian: 'курить', example: 'Man darf hier nicht rauchen.' },
                { german: 'reisen', russian: 'путешествовать', example: 'Sie will nach Italien reisen.' },
              ]
            }
          ]
        }
      ]
    },
    { 
      id: 'b1', 
      title: 'Уровень B1: Средний', 
      description: 'Выход на новый уровень. Вы сможете понимать основное содержание большинства разговоров, высказывать свое мнение и справляться с большинством ситуаций в путешествии.', 
      topics: [
        {
          id: 'prateritum',
          title: 'Прошедшее время Präteritum',
          explanation: `
            <h2 class="font-headline text-2xl font-bold mb-4">Präteritum: прошлое в повествовании</h2>
            <p class="mb-4">Präteritum — это простое прошедшее время. В отличие от Perfekt, оно используется в основном в <strong class="text-primary">письменной речи</strong> (книги, статьи, новости) для повествования.</p>
            <p class="mb-4">Для слабых глаголов оно образуется добавлением <strong class="text-accent">-te-</strong> к основе, для сильных — изменением корневой гласной (эти формы нужно учить).</p>
            <ul class="list-disc list-inside space-y-2 bg-muted p-4 rounded-lg">
              <li><strong class="text-primary">haben:</strong> ich hatte, du hattest, er hatte...</li>
              <li><strong class="text-primary">sein:</strong> ich war, du warst, er war...</li>
              <li><strong>sagen (слабый):</strong> ich sagte, du sagtest, er sagte...</li>
              <li><strong>gehen (сильный):</strong> ich ging, du gingst, er ging...</li>
            </ul>
          `,
          vocabulary: [
            {
              theme: 'Глаголы в Präteritum',
              words: [
                { german: 'hatte', russian: 'имел', example: 'Ich hatte keine Zeit.' },
                { german: 'war', russian: 'был', example: 'Er war gestern krank.' },
                { german: 'ging', russian: 'шел', example: 'Wir gingen ins Museum.' },
                { german: 'sagte', russian: 'сказал', example: 'Der Lehrer sagte nichts.' },
                { german: 'kam', russian: 'пришел', example: 'Sie kam zu spät.' },
                { german: 'sah', russian: 'видел', example: 'Ich sah einen interessanten Film.' },
                { german: 'wusste', russian: 'знал', example: 'Er wusste die Antwort nicht.' },
                { german: 'lebte', russian: 'жил', example: 'Meine Oma lebte in einem Dorf.' },
                { german: 'spielte', russian: 'играл', example: 'Als Kind spielte ich gern Fußball.' },
                { german: 'es gab', russian: 'было, имелось', example: 'Früher gab es hier keine Häuser.' },
              ]
            }
          ]
        },
        {
          id: 'genitiv',
          title: 'Падеж Genitiv',
          explanation: `
            <h2 class="font-headline text-2xl font-bold mb-4">Genitiv: падеж принадлежности</h2>
            <p class="mb-4">Genitiv отвечает на вопрос "Чей?" (<strong class="text-primary">Wessen?</strong>) и выражает принадлежность или отношение.</p>
            <p class="mb-4">В мужском и среднем роде к существительному добавляется окончание <strong class="text-accent">-(e)s</strong>.</p>
            <ul class="list-disc list-inside space-y-2 bg-muted p-4 rounded-lg">
              <li>Das Auto <strong class="text-primary">des Mannes</strong>. (Машина мужчины.)</li>
              <li>Die Farbe <strong class="text-primary">des Hauses</strong>. (Цвет дома.)</li>
            </ul>
            <p class="mt-4">В разговорной речи Genitiv часто заменяется конструкцией <strong class="text-primary">von + Dativ</strong>: Das Auto <strong class="text-accent">von dem Mann</strong>.</p>
          `,
          vocabulary: [
            {
              theme: 'Выражение принадлежности',
              words: [
                { german: 'wessen', russian: 'чей', example: 'Wessen Tasche ist das?' },
                { german: 'des Vaters', russian: 'отца', example: 'Das ist das Buch des Vaters.' },
                { german: 'der Mutter', russian: 'матери', example: 'Die Tasche der Mutter ist neu.' },
                { german: 'des Kindes', russian: 'ребенка', example: 'Das Spielzeug des Kindes ist kaputt.' },
                { german: 'der Direktor', russian: 'директор', example: 'Das Büro des Direktors ist im zweiten Stock.' },
                { german: 'wegen (+G)', russian: 'из-за, по причине', example: 'Wegen des schlechten Wetters bleiben wir zu Hause.' },
                { german: 'trotz (+G)', russian: 'несмотря на', example: 'Trotz des Regens gehen wir spazieren.' },
                { german: 'während (+G)', russian: 'во время, в течение', example: 'Während des Unterrichts soll man leise sein.' },
                { german: 'das Haus, "-er', russian: 'дом', example: 'Das Dach des Hauses ist rot.' },
                { german: 'das Auto, -s', russian: 'машина', example: 'Der Preis des Autos ist hoch.' },
              ]
            }
          ]
        },
        {
          id: 'konjunktiv2',
          title: 'Сослагательное наклонение (Konjunktiv II)',
          explanation: `
            <h2 class="font-headline text-2xl font-bold mb-4">Konjunktiv II: Мир "бы"</h2>
            <p class="mb-4">Konjunktiv II используется для выражения:</p>
            <ul class="list-disc list-inside space-y-2 mb-4 bg-muted p-4 rounded-lg">
              <li><strong>Нереальных желаний:</strong> <strong class="text-primary">Wenn ich Zeit hätte</strong>, würde ich reisen. (Если бы у меня было время, я бы путешествовал.)</li>
              <li><strong>Вежливых просьб:</strong> <strong class="text-primary">Könnten Sie</strong> mir bitte helfen? (Не могли бы Вы мне помочь?)</li>
              <li><strong>Советов:</strong> An deiner Stelle <strong class="text-primary">würde ich</strong> mehr lernen. (На твоем месте я бы больше учил.)</li>
            </ul>
            <p>Чаще всего образуется с помощью формы <strong class="text-primary">würden + Infinitiv</strong>, что является универсальным способом.</p>
          `,
          vocabulary: [
            {
              theme: 'Желания, просьбы, советы',
              words: [
                { german: 'würde', russian: 'бы (вспом. глагол)', example: 'Ich würde gern ein Eis essen.' },
                { german: 'hätte', russian: 'имел бы', example: 'Wenn ich Geld hätte, würde ich ein Haus kaufen.' },
                { german: 'wäre', russian: 'был бы', example: 'Wenn ich du wäre, würde ich das nicht tun.' },
                { german: 'könnte', russian: 'мог бы', example: 'Könnten Sie das Fenster schließen?' },
                { german: 'sollte', russian: 'следовало бы', example: 'Du solltest mehr schlafen.' },
                { german: 'der Wunsch, "-e', russian: 'желание', example: 'Ich habe einen großen Wunsch.' },
                { german: 'der Ratschlag, "-e', russian: 'совет', example: 'Er gab mir einen guten Ratschlag.' },
                { german: 'die Bitte, -n', russian: 'просьба', example: 'Könnten Sie mir eine Bitte erfüllen?' },
                { german: 'wenn', russian: 'если бы', example: 'Wenn das Wetter schön wäre...' },
                { german: 'an deiner Stelle', russian: 'на твоем месте', example: 'An deiner Stelle würde ich zum Arzt gehen.' },
              ]
            }
          ]
        },
        {
          id: 'nebensatze',
          title: 'Придаточные предложения',
          explanation: `
            <h2 class="font-headline text-2xl font-bold mb-4">Придаточные предложения: усложняем речь</h2>
            <p class="mb-4">Придаточные предложения зависят от главного и вводятся различными союзами. Главное правило: <strong class="text-primary">спрягаемый глагол в придаточном предложении всегда уходит в самый конец</strong>.</p>
            <ul class="list-disc list-inside space-y-2 bg-muted p-4 rounded-lg">
              <li><strong>dass (что):</strong> Ich weiß, <strong class="text-accent">dass du morgen kommst</strong>.</li>
              <li><strong>weil (потому что):</strong> Ich lerne Deutsch, <strong class="text-accent">weil ich in Deutschland arbeiten will</strong>.</li>
              <li><strong>obwohl (хотя):</strong> Er geht spazieren, <strong class="text-accent">obwohl es regnet</strong>.</li>
            </ul>
          `,
          vocabulary: [
             {
              theme: 'Союзы придаточных предложений',
              words: [
                { german: 'dass', russian: 'что, чтобы', example: 'Ich hoffe, dass du kommst.' },
                { german: 'weil', russian: 'потому что', example: 'Er bleibt zu Hause, weil er krank ist.' },
                { german: 'obwohl', russian: 'хотя', example: 'Sie geht arbeiten, obwohl sie müde ist.' },
                { german: 'wenn', russian: 'когда, если', example: 'Wenn es regnet, lese ich ein Buch.' },
                { german: 'als', russian: 'когда (однократно в прошлом)', example: 'Als ich ein Kind war, spielte ich oft hier.' },
                { german: 'damit', russian: 'чтобы (цель)', example: 'Ich lerne, damit ich die Prüfung bestehe.' },
                { german: 'ob', russian: 'ли (в косвенном вопросе)', example: 'Ich weiß nicht, ob er kommt.' },
                { german: 'bevor', russian: 'прежде чем', example: 'Bevor du gehst, ruf mich an.' },
                { german: 'nachdem', russian: 'после того как', example: 'Nachdem er gegessen hatte, ging er spazieren.' },
                { german: 'der Satz, "-e', russian: 'предложение', example: 'Dieser Satz ist zu lang.' },
              ]
            }
          ]
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
          ]
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
          ]
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
          ]
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
          ]
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
          ]
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
          ]
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
          ]
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
          ]
        }
      ] 
    },
    { 
      id: 'c2', 
      title: 'Уровень C2: Владение в совершенстве', 
      description: 'Владение на уровне носителя. Вы будете понимать практически все, выражая свои мысли спонтанно, точно и без усилий.', 
      topics: [
        {
          id: 'stilistik',
          title: 'Стилистика и оттенки значений',
          explanation: `
            <h2 class="font-headline text-2xl font-bold mb-4">Стилистика: искусство выбора слов</h2>
            <p class="mb-4">На этом уровне фокус смещается с "правильно" на "точно и уместно". Это включает:</p>
            <ul class="list-disc list-inside space-y-2 bg-muted p-4 rounded-lg">
              <li>Глубокое понимание <strong class="text-primary">синонимических рядов</strong> (z.B. sagen, äußern, behaupten, mitteilen).</li>
              <li>Свободное использование <strong class="text-primary">идиом и устойчивых выражений</strong>.</li>
              <li>Умение переключаться между <strong class="text-primary">разными регистрами речи</strong>: от формального до сленга.</li>
            </ul>
          `,
          vocabulary: [
            {
              theme: 'Синонимы и идиомы',
              words: [
                { german: 'sagen / äußern / behaupten', russian: 'сказать / высказать / утверждать', example: 'Er behauptete, die Erde sei eine Scheibe.' },
                { german: 'gehen / schlendern / eilen', russian: 'идти / бродить / спешить', example: 'Wir schlenderten durch die Altstadt.' },
                { german: 'schön / herrlich / atemberaubend', russian: 'красивый / великолепный / захватывающий дух', example: 'Die Aussicht war atemberaubend.' },
                { german: 'den Nagel auf den Kopf treffen', russian: 'попасть в яблочко (идиома)', example: 'Mit dieser Bemerkung hast du den Nagel auf den Kopf getroffen.' },
                { german: 'Tomaten auf den Augen haben', russian: 'не видеть очевидного (идиома)', example: 'Siehst du das nicht? Du hast wohl Tomaten auf den Augen.' },
                { german: 'aus einer Mücke einen Elefanten machen', russian: 'делать из мухи слона (идиома)', example: 'Reg dich nicht auf, du machst aus einer Mücke einen Elefanten.' },
                { german: 'gehoben (Stil)', russian: 'возвышенный, высокий (стиль)', example: 'In seiner Rede benutzte er einen gehobenen Stil.' },
                { german: 'umgangssprachlich', russian: 'разговорный', example: 'Das ist ein umgangssprachlicher Ausdruck.' },
                { german: 'die Nuance, -n', russian: 'нюанс, оттенок', example: 'Es gibt feine Nuancen in der Bedeutung.' },
                { german: 'der Kontext, -e', russian: 'контекст', example: 'Das Wort hat in diesem Kontext eine andere Bedeutung.' },
              ]
            }
          ]
        },
        {
          id: 'komplexe-satze',
          title: 'Сложные синтаксические структуры',
          explanation: `
            <h2 class="font-headline text-2xl font-bold mb-4">Сложный синтаксис</h2>
            <p class="mb-4">Свободное владение сложными и многоуровневыми предложениями, включая редкие грамматические конструкции, для выражения самых тонких нюансов мысли. Например, использование распространенных причастных оборотов, инфинитивных конструкций и сложных союзов.</p>
            <div class="bg-muted p-3 rounded-lg italic my-4">Пример: Der Mann, <strong class="text-primary">dessen Hund gestern entlaufen war</strong>, suchte ihn den ganzen Tag. (Мужчина, <strong class="text-accent">чья собака вчера убежала</strong>, искал ее весь день.)</div>
          `,
          vocabulary: [
            {
              theme: 'Продвинутые союзы и конструкции',
              words: [
                { german: 'je ... desto', russian: 'чем ... тем', example: 'Je mehr man lernt, desto mehr weiß man.' },
                { german: 'einerseits ... andererseits', russian: 'с одной стороны ... с другой стороны', example: 'Einerseits möchte ich reisen, andererseits habe ich wenig Geld.' },
                { german: 'sowohl ... als auch', russian: 'как ... так и', example: 'Er spricht sowohl Englisch als auch Deutsch.' },
                { german: 'weder ... noch', russian: 'ни ... ни', example: 'Sie isst weder Fleisch noch Fisch.' },
                { german: 'zwar ... aber', russian: 'хотя ... но', example: 'Er ist zwar reich, aber nicht glücklich.' },
                { german: 'um ... zu + Inf.', russian: 'для того, чтобы', example: 'Ich lerne Deutsch, um in Deutschland zu studieren.' },
                { german: 'ohne ... zu + Inf.', russian: 'не делая чего-либо', example: 'Er verließ das Haus, ohne ein Wort zu sagen.' },
                { german: 'anstatt ... zu + Inf.', russian: 'вместо того, чтобы', example: 'Anstatt zu arbeiten, schaut er fern.' },
                { german: 'der Satzbau', russian: 'построение предложения, синтаксис', example: 'Der deutsche Satzbau ist manchmal kompliziert.' },
                { german: 'das Satzgefüge, -', russian: 'сложноподчиненное предложение', example: 'Sie analysierte das komplexe Satzgefüge.' },
              ]
            }
          ]
        },
        {
          id: 'fachsprache',
          title: 'Язык для профессиональных целей (Fachsprache)',
          explanation: `
            <h2 class="font-headline text-2xl font-bold mb-4">Профессиональный язык (Fachsprache)</h2>
            <p class="mb-4">На уровне C2 ожидается способность осваивать и использовать терминологию и языковые конструкции, специфичные для определенной профессиональной области, будь то:</p>
            <ul class="list-disc list-inside space-y-2 bg-muted p-4 rounded-lg">
              <li>Медицина</li>
              <li>Юриспруденция</li>
              <li>Информационные технологии</li>
              <li>Наука и исследования</li>
            </ul>
            <p class="mt-4">Это подразумевает не только знание терминов, но и понимание стиля общения в данной сфере.</p>
          `,
          vocabulary: [
            {
              theme: 'Общая академическая и деловая лексика',
              words: [
                { german: 'die These, -n', russian: 'тезис', example: 'In seiner Dissertation stellt er eine kühne These auf.' },
                { german: 'die Hypothese, -n', russian: 'гипотеза', example: 'Die Hypothese muss durch Experimente bestätigt werden.' },
                { german: 'analysieren', russian: 'анализировать', example: 'Wir müssen die Ergebnisse sorgfältig analysieren.' },
                { german: 'implementieren', russian: 'внедрять, реализовывать', example: 'Die neue Software wurde erfolgreich implementiert.' },
                { german: 'der Aspekt, -e', russian: 'аспект', example: 'Wir sollten alle Aspekte des Problems berücksichtigen.' },
                { german: 'die Komponente, -n', russian: 'компонент, составляющая', example: 'Jede Komponente spielt eine wichtige Rolle.' },
                { german: 'die Struktur, -en', russian: 'структура', example: 'Die Struktur des Unternehmens wurde reorganisiert.' },
                { german: 'der Prozess, -e', russian: 'процесс', example: 'Der kreative Prozess ist oft unvorhersehbar.' },
                { german: 'die Ressource, -n', russian: 'ресурс', example: 'Wir müssen unsere Ressourcen effizient nutzen.' },
                { german: 'die Strategie, -n', russian: 'стратегия', example: 'Die Firma hat eine neue Marketingstrategie entwickelt.' },
              ]
            }
          ]
        }
      ] 
    }
  ]
};
