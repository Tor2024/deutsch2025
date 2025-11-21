import type { Curriculum } from './types';

export const curriculum: Curriculum = {
  levels: [
    {
      id: 'a1',
      title: 'Уровень A1: Начинающий',
      description: 'Основы для уверенного старта. Вы научитесь представляться, вести простые диалоги, понимать базовые фразы и строить предложения в настоящем времени.',
      topics: [
        {
          id: 'personal-info',
          title: 'Знакомство и личная информация',
          explanation: `
            <h3 class="font-headline text-xl font-bold mb-4">Представление себя</h3>
            <p class="mb-4">Это самые первые и важные фразы, которые вам понадобятся для знакомства. Обратите внимание на формальное (<strong class="text-primary">Sie</strong>) и неформальное (<strong class="text-primary">du</strong>) обращение.</p>
            <ul class="list-disc list-inside space-y-2 mb-6">
              <li><strong>Wie heißen Sie?</strong> - Как Вас зовут? (Формально)</li>
              <li><strong>Wie heißt du?</strong> - Как тебя зовут? (Неформально)</li>
              <li><strong>Ich heiße...</strong> - Меня зовут...</li>
              <li><strong>Mein Name ist...</strong> - Моё имя...</li>
            </ul>
            <h3 class="font-headline text-xl font-bold mb-4">Происхождение и место жительства</h3>
            <p class="mb-4">Учимся говорить, откуда мы и где живем.</p>
            <ul class="list-disc list-inside space-y-2">
                <li><strong>Woher kommen Sie? / Woher kommst du?</strong> - Откуда Вы? / Откуда ты?</li>
                <li><strong>Ich komme aus...</strong> - Я из... (страна/город)</li>
                <li><strong>Wo wohnen Sie? / Wo wohnst du?</strong> - Где Вы живете? / Где ты живешь?</li>
                <li><strong>Ich wohne in...</strong> - Я живу в... (город/улица)</li>
            </ul>
          `,
          exercises: [],
          vocabulary: [
            {
              theme: 'Личная информация',
              words: [
                { german: 'der Name, -n', russian: 'имя', example: 'Mein Name ist Klaus.' },
                { german: 'heißen', russian: 'называться', example: 'Ich heiße Anna.' },
                { german: 'kommen', russian: 'приходить, быть родом', example: 'Ich komme aus Deutschland.' },
                { german: 'wohnen', russian: 'жить, проживать', example: 'Er wohnt in Berlin.' },
                { german: 'das Land, "-er', russian: 'страна', example: 'Aus welchem Land kommst du?' },
                { german: 'die Stadt, "-e', russian: 'город', example: 'Ich wohne in der Stadt München.' },
                { german: 'die Adresse, -n', russian: 'адрес', example: 'Was ist deine Adresse?' },
                { german: 'die Telefonnummer, -n', russian: 'номер телефона', example: 'Meine Telefonnummer ist ...' },
                { german: 'sprechen', russian: 'говорить', example: 'Welche Sprachen sprichst du?' },
                { german: 'die Sprache, -n', russian: 'язык', example: 'Ich lerne die deutsche Sprache.' },
              ]
            }
          ]
        },
        {
          id: 'nominativ-akkusativ',
          title: 'Падежи: Nominativ и Akkusativ',
          explanation: `
            <h3 class="font-headline text-xl font-bold mb-4">Nominativ (Именительный падеж)</h3>
            <p class="mb-4">Это падеж <strong class="text-primary">подлежащего</strong>. Он отвечает на вопросы "Кто?" (<strong class="text-primary">Wer?</strong>) и "Что?" (<strong class="text-primary">Was?</strong>). В предложении это главный герой, который выполняет действие.</p>
            <p class="italic bg-muted p-2 rounded-md"><strong>Der Hund</strong> schläft. (<strong>Собака</strong> спит.) - Кто спит? Собака.</p>

            <h3 class="font-headline text-xl font-bold mt-6 mb-4">Akkusativ (Винительный падеж)</h3>
            <p class="mb-4">Это падеж <strong class="text-primary">прямого дополнения</strong>. Он отвечает на вопросы "Кого?" (<strong class="text-primary">Wen?</strong>) и "Что?" (<strong class="text-primary">Was?</strong>). Это объект, над которым совершается действие.</p>
            <p class="italic bg-muted p-2 rounded-md">Ich sehe <strong>den Hund</strong>. (Я вижу <strong>собаку</strong>.) - Кого я вижу? Собаку.</p>
            
            <h3 class="font-headline text-xl font-bold mt-6 mb-4">Артикли в Nominativ и Akkusativ</h3>
            <p class="mb-4">Самое важное правило на этом этапе: <strong class="text-primary">в Akkusativ меняется только артикль мужского рода</strong>. Остальные остаются такими же, как в Nominativ.</p>
            <div class="overflow-x-auto">
              <table class="w-full text-left border-collapse">
                <thead>
                  <tr class="bg-muted/50">
                    <th class="border p-3">Падеж</th>
                    <th class="border p-3">Мужской род (m)</th>
                    <th class="border p-3">Женский род (f)</th>
                    <th class="border p-3">Средний род (n)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border p-3 font-medium">Nominativ</td>
                    <td class="border p-3">der / ein</td>
                    <td class="border p-3">die / eine</td>
                    <td class="border p-3">das / ein</td>
                  </tr>
                  <tr>
                    <td class="border p-3 font-medium">Akkusativ</td>
                    <td class="border p-3"><strong class="text-primary">den / einen</strong></td>
                    <td class="border p-3">die / eine</td>
                    <td class="border p-3">das / ein</td>
                  </tr>
                </tbody>
              </table>
            </div>
          `,
          exercises: [],
          vocabulary: [
             {
              theme: 'Артикли и существительные',
              words: [
                { german: 'der Tisch, -e', russian: 'стол', example: 'Ich sehe den Tisch.' },
                { german: 'das Buch, "-er', russian: 'книга', example: 'Sie liest ein Buch.' },
                { german: 'die Tasche, -n', russian: 'сумка', example: 'Er kauft eine Tasche.' },
                { german: 'der Stuhl, "-e', russian: 'стул', example: 'Der Stuhl ist alt.' },
                { german: 'haben', russian: 'иметь', example: 'Ich habe einen Hund.' },
                { german: 'sehen', russian: 'видеть', example: 'Siehst du den Vogel?' },
                { german: 'kaufen', russian: 'покупать', example: 'Wir kaufen das Brot.' },
                { german: 'lesen', russian: 'читать', example: 'Er liest eine Zeitung.' },
                { german: 'brauchen', russian: 'нуждаться', example: 'Ich brauche einen Stift.' },
                { german: 'suchen', russian: 'искать', example: 'Sie sucht den Schlüssel.' },
              ]
            }
          ]
        },
        {
          id: 'prasens',
          title: 'Настоящее время (Präsens)',
          explanation: `
            <h3 class="font-headline text-xl font-bold mb-4">Спряжение глаголов в настоящем времени</h3>
            <p class="mb-4">В немецком языке глаголы меняют свои окончания в зависимости от того, кто выполняет действие (т.е. спрягаются). Это основа для построения любого предложения.</p>
            
            <h4 class="font-headline text-lg font-semibold mt-6 mb-2">Слабые (правильные) глаголы</h4>
            <p class="mb-4">Это самая простая группа. Они спрягаются по стандартным правилам, добавляя к основе глагола определенные окончания. Возьмем глагол <strong class="text-primary">machen</strong> (делать).</p>
            <ul class="list-disc list-inside space-y-2 mb-6 p-4 bg-muted rounded-md">
              <li>ich mach<strong class="text-primary">e</strong> (я делаю)</li>
              <li>du mach<strong class="text-primary">st</strong> (ты делаешь)</li>
              <li>er/sie/es mach<strong class="text-primary">t</strong> (он/она/оно делает)</li>
              <li>wir mach<strong class="text-primary">en</strong> (мы делаем)</li>
              <li>ihr mach<strong class="text-primary">t</strong> (вы делаете)</li>
              <li>sie/Sie mach<strong class="text-primary">en</strong> (они/Вы делаете)</li>
            </ul>

            <h4 class="font-headline text-lg font-semibold mt-6 mb-2">Сильные (неправильные) глаголы</h4>
            <p class="mb-4">У этих глаголов во 2-м и 3-м лице единственного числа (<strong class="text-primary">du, er/sie/es</strong>) меняется корневая гласная. Например, <strong>e → i/ie</strong>, <strong>a → ä</strong>. Окончания при этом такие же, как у слабых глаголов. Рассмотрим <strong class="text-primary">sprechen</strong> (говорить).</p>
            <ul class="list-disc list-inside space-y-2 p-4 bg-muted rounded-md">
                <li>ich spreche</li>
                <li>du <strong class="text-primary">sprichst</strong></li>
                <li>er/sie/es <strong class="text-primary">spricht</strong></li>
                <li>wir sprechen</li>
                <li>ihr sprecht</li>
                <li>sie/Sie sprechen</li>
            </ul>
          `,
          exercises: [],
          vocabulary: [
             {
              theme: 'Часто используемые глаголы',
              words: [
                { german: 'machen', russian: 'делать', example: 'Was machst du?' },
                { german: 'lernen', russian: 'учить', example: 'Wir lernen Deutsch.' },
                { german: 'gehen', russian: 'идти', example: 'Ich gehe ins Kino.' },
                { german: 'essen', russian: 'есть, кушать', example: 'Er isst einen Apfel.' },
                { german_highlight: 'trinken', russian: 'пить', example: 'Was trinkst du?' },
                { german: 'schlafen', russian: 'спать', example: 'Das Baby schläft.' },
                { german: 'fahren', russian: 'ехать', example: 'Sie fährt mit dem Bus.' },
                { german: 'geben', russian: 'давать', example: 'Gib mir bitte das Buch.' },
                { german: 'helfen', russian: 'помогать', example: 'Er hilft seiner Mutter.' },
                { german: 'nehmen', russian: 'брать', example: 'Ich nehme den Kaffee.' },
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
            <h3 class="font-headline text-xl font-bold mb-4">Время Perfekt: Рассказываем о прошлом</h3>
            <p class="mb-4">Perfekt — это основное время для разговоров о прошедших событиях. Оно образуется с помощью вспомогательного глагола (<strong class="text-primary">haben</strong> или <strong class="text-primary">sein</strong>) и причастия прошедшего времени (<strong>Partizip II</strong>).</p>
            <p class="italic bg-muted p-2 rounded-md">Формула: <strong>Подлежащее + haben/sein + ... + Partizip II.</strong></p>
            
            <h4 class="font-headline text-lg font-semibold mt-6 mb-2">Когда haben, а когда sein?</h4>
            <ul class="list-disc list-inside space-y-2 mb-6">
              <li><strong class="text-primary">Sein</strong> используется с глаголами, обозначающими <strong>движение</strong> (gehen, fahren, fliegen) или <strong>смену состояния</strong> (einschlafen, aufwachen, sterben).<br><em>Пример: Ich <strong class="text-primary">bin</strong> nach Hause <strong class="text-primary">gegangen</strong>. (Я ушел домой.)</em></li>
              <li><strong class="text-primary">Haben</strong> используется во всех остальных случаях, что составляет большинство глаголов.<br><em>Пример: Ich <strong class="text-primary">habe</strong> ein Buch <strong class="text-primary">gelesen</strong>. (Я прочитал книгу.)</em></li>
            </ul>

            <h4 class="font-headline text-lg font-semibold mt-6 mb-2">Как образовать Partizip II?</h4>
            <ul class="list-disc list-inside space-y-2">
              <li><strong>Слабые глаголы:</strong> <strong class="text-primary">ge</strong> + основа + <strong class="text-primary">(e)t</strong>. Пример: machen → <strong class="text-primary">ge</strong>mach<strong class="text-primary">t</strong>.</li>
              <li><strong>Сильные глаголы:</strong> <strong class="text-primary">ge</strong> + (часто измененная) основа + <strong class="text-primary">en</strong>. Пример: sprechen → <strong class="text-primary">ge</strong>sproch<strong class="text-primary">en</strong>. Формы сильных глаголов нужно запоминать.</li>
            </ul>
          `,
          exercises: [],
          vocabulary: []
        },
        {
          id: 'dativ',
          title: 'Падеж Dativ',
          explanation: `
            <h3 class="font-headline text-xl font-bold mb-4">Дательный падеж (Dativ)</h3>
            <p class="mb-4">Dativ отвечает на вопросы "Кому?" (<strong class="text-primary">Wem?</strong>), "Где?" (<strong class="text-primary">Wo?</strong>). Он указывает на <strong class="text-primary">косвенное дополнение</strong> (адресата действия) или на местоположение.</p>
            <ul class="list-disc list-inside space-y-2 mb-6">
              <li><strong>Косвенное дополнение:</strong> Ich gebe <strong class="text-primary">dem Mann</strong> ein Buch. (Я даю <strong class="text-primary">мужчине</strong> книгу.) - Кому я даю книгу?</li>
              <li><strong>Местоположение:</strong> Das Buch liegt auf <strong class="text-primary">dem Tisch</strong>. (Книга лежит на <strong class="text-primary">столе</strong>.) - Где лежит книга?</li>
            </ul>
            
            <h4 class="font-headline text-lg font-semibold mt-6 mb-2">Артикли и местоимения в Dativ</h4>
             <div class="overflow-x-auto">
              <table class="w-full text-left border-collapse">
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
          exercises: [],
          vocabulary: []
        },
        {
          id: 'modalverben',
          title: 'Модальные глаголы',
          explanation: `
            <h3 class="font-headline text-xl font-bold mb-4">Модальные глаголы</h3>
            <p class="mb-4">Модальные глаголы выражают отношение к действию: возможность, необходимость, желание. В предложении модальный глагол спрягается и стоит на втором месте, а основной глагол уходит в конец в форме инфинитива.</p>
            <p class="italic bg-muted p-2 rounded-md">Ich <strong class="text-primary">kann</strong> gut Deutsch <strong class="text-primary">sprechen</strong>. (Я могу хорошо говорить по-немецки.)</p>
            
            <h4 class="font-headline text-lg font-semibold mt-6 mb-2">Шесть основных модальных глаголов:</h4>
            <ul class="list-disc list-inside space-y-2 mb-6">
              <li><strong>können:</strong> мочь, уметь (физическая возможность, навык)</li>
              <li><strong>müssen:</strong> быть должным (внутренняя необходимость, обязанность)</li>
              <li><strong>sollen:</strong> быть должным (совет, поручение, моральный долг)</li>
              <li><strong>dürfen:</strong> мочь (иметь разрешение)</li>
              <li><strong>wollen:</strong> хотеть (конкретное желание)</li>
              <li><strong>mögen / möchten:</strong> любить, нравиться / хотел бы (вежливое желание)</li>
            </ul>

             <h4 class="font-headline text-lg font-semibold mt-6 mb-2">Особенности спряжения</h4>
             <p class="mb-4">В единственном числе (<strong class="text-primary">ich, du, er/sie/es</strong>) многие модальные глаголы меняют корневую гласную. Формы для <strong class="text-primary">ich</strong> и <strong class="text-primary">er/sie/es</strong> совпадают!</p>
             <ul class="list-disc list-inside space-y-2 p-4 bg-muted rounded-md">
              <li><strong>können:</strong> ich kann, du kannst, er/sie/es kann</li>
              <li><strong>müssen:</strong> ich muss, du musst, er/sie/es muss</li>
              <li><strong>dürfen:</strong> ich darf, du darfst, er/sie/es darf</li>
            </ul>
          `,
          exercises: [],
          vocabulary: []
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
            <h3 class="font-headline text-xl font-bold mb-4">Präteritum: прошлое в повествовании</h3>
            <p class="mb-4">Präteritum — это простое прошедшее время. В отличие от Perfekt, оно используется в основном в <strong class="text-primary">письменной речи</strong> (книги, статьи, новости) для повествования.</p>
            <p class="mb-4">Для слабых глаголов оно образуется добавлением <strong class="text-primary">-te-</strong> к основе, для сильных — изменением корневой гласной (эти формы нужно учить).</p>
            <ul class="list-disc list-inside space-y-2">
              <li><strong class="text-primary">haben:</strong> ich hatte, du hattest, er hatte...</li>
              <li><strong class="text-primary">sein:</strong> ich war, du warst, er war...</li>
              <li><strong>sagen (слабый):</strong> ich sagte, du sagtest, er sagte...</li>
              <li><strong>gehen (сильный):</strong> ich ging, du gingst, er ging...</li>
            </ul>
          `,
          exercises: [],
          vocabulary: []
        },
        {
          id: 'genitiv',
          title: 'Падеж Genitiv',
          explanation: `
            <h3 class="font-headline text-xl font-bold mb-4">Genitiv: падеж принадлежности</h3>
            <p class="mb-4">Genitiv отвечает на вопрос "Чей?" (<strong class="text-primary">Wessen?</strong>) и выражает принадлежность или отношение.</p>
            <p class="mb-4">В мужском и среднем роде к существительному добавляется окончание <strong class="text-primary">-(e)s</strong>.</p>
            <ul class="list-disc list-inside space-y-2">
              <li>Das Auto <strong class="text-primary">des Mannes</strong>. (Машина мужчины.)</li>
              <li>Die Farbe <strong class="text-primary">des Hauses</strong>. (Цвет дома.)</li>
            </ul>
            <p class="mt-4">В разговорной речи Genitiv часто заменяется конструкцией <strong class="text-primary">von + Dativ</strong>: Das Auto <strong class="text-primary">von dem Mann</strong>.</p>
          `,
          exercises: [],
          vocabulary: []
        },
        {
          id: 'konjunktiv2',
          title: 'Сослагательное наклонение (Konjunktiv II)',
          explanation: `
            <h3 class="font-headline text-xl font-bold mb-4">Konjunktiv II: Мир "бы"</h3>
            <p class="mb-4">Konjunktiv II используется для выражения:</p>
            <ul class="list-disc list-inside space-y-2 mb-4">
              <li><strong>Нереальных желаний:</strong> <strong class="text-primary">Wenn ich Zeit hätte</strong>, würde ich reisen. (Если бы у меня было время, я бы путешествовал.)</li>
              <li><strong>Вежливых просьб:</strong> <strong class="text-primary">Könnten Sie</strong> mir bitte helfen? (Не могли бы Вы мне помочь?)</li>
              <li><strong>Советов:</strong> An deiner Stelle <strong class="text-primary">würde ich</strong> mehr lernen. (На твоем месте я бы больше учил.)</li>
            </ul>
            <p>Чаще всего образуется с помощью формы <strong class="text-primary">würden + Infinitiv</strong>, что является универсальным способом.</p>
          `,
          exercises: [],
          vocabulary: []
        },
        {
          id: 'nebensatze',
          title: 'Придаточные предложения',
          explanation: `
            <h3 class="font-headline text-xl font-bold mb-4">Придаточные предложения: усложняем речь</h3>
            <p class="mb-4">Придаточные предложения зависят от главного и вводятся различными союзами. Главное правило: <strong class="text-primary">спрягаемый глагол в придаточном предложении всегда уходит в самый конец</strong>.</p>
            <ul class="list-disc list-inside space-y-2">
              <li><strong>dass (что):</strong> Ich weiß, <strong class="text-primary">dass du morgen kommst</strong>.</li>
              <li><strong>weil (потому что):</strong> Ich lerne Deutsch, <strong class="text-primary">weil ich in Deutschland arbeiten will</strong>.</li>
              <li><strong>obwohl (хотя):</strong> Er geht spazieren, <strong class="text-primary">obwohl es regnet</strong>.</li>
            </ul>
          `,
          exercises: [],
          vocabulary: []
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
            <h3 class="font-headline text-xl font-bold mb-4">Plusquamperfekt: прошлое до прошлого</h3>
            <p class="mb-4">Это время используется для описания действия, которое произошло <strong class="text-primary">раньше</strong> другого действия в прошлом. Оно образуется с помощью вспомогательных глаголов <strong class="text-primary">hatten</strong> или <strong class="text-primary">waren</strong> (формы Präteritum от haben/sein) + Partizip II.</p>
            <p class="italic bg-muted p-2 rounded-md">Nachdem ich die Hausaufgaben <strong class="text-primary">gemacht hatte</strong>, ging ich ins Kino. (После того как я сделал домашнее задание, я пошел в кино.)</p>
            <p class="mt-2">Действие "сделал ДЗ" произошло раньше, чем "пошел в кино".</p>
          `,
          exercises: [],
          vocabulary: []
        },
        {
          id: 'passiv',
          title: 'Пассивный залог (Passiv)',
          explanation: `
            <h3 class="font-headline text-xl font-bold mb-4">Пассивный залог (Passiv): фокус на действии</h3>
            <p class="mb-4">Пассив используется, когда важно само действие, а не тот, кто его выполняет. Образуется с помощью глагола <strong class="text-primary">werden</strong> + Partizip II.</p>
            <ul class="list-disc list-inside space-y-2">
              <li><strong>Präsens Passiv:</strong> Das Auto <strong class="text-primary">wird repariert</strong>. (Машину ремонтируют / Машина ремонтируется.)</li>
              <li><strong>Präteritum Passiv:</strong> Das Auto <strong class="text-primary">wurde repariert</strong>. (Машину ремонтировали.)</li>
              <li><strong>Perfekt Passiv:</strong> Das Auto <strong class="text-primary">ist repariert worden</strong>. (Машина была отремонтирована.)</li>
            </ul>
          `,
          exercises: [],
          vocabulary: []
        },
        {
          id: 'relativsatze',
          title: 'Относительные придаточные предложения',
          explanation: `
            <h3 class="font-headline text-xl font-bold mb-4">Relativsätze: добавляем детали</h3>
            <p class="mb-4">Эти предложения дают дополнительную информацию о существительном из главного предложения. Они вводятся относительными местоимениями (<strong class="text-primary">der, die, das</strong> и т.д.), которые согласуются в роде и числе с существительным, к которому относятся.</p>
            <p class="italic bg-muted p-2 rounded-md">Das ist der Mann, <strong class="text-primary">der mir geholfen hat</strong>. (Это тот мужчина, <strong class="text-primary">который мне помог</strong>.)</p>
             <p class="mt-2">Глагол в Relativsatz, как и в других придаточных, стоит на последнем месте.</p>
          `,
          exercises: [],
          vocabulary: []
        },
        {
          id: 'n-deklination',
          title: 'N-склонение существительных',
          explanation: `
            <h3 class="font-headline text-xl font-bold mb-4">N-Deklination: "слабое" склонение</h3>
            <p class="mb-4">Это особая группа существительных мужского рода (и одного среднего - das Herz), которые получают окончание <strong class="text-primary">-(e)n</strong> во всех падежах, кроме Nominativ единственного числа.</p>
            <p class="mb-4">К этой группе относятся многие одушевленные существительные на -e (der Junge, der Kollege), а также некоторые другие (der Herr, der Mensch, der Präsident).</p>
            <div class="overflow-x-auto">
              <table class="w-full text-left border-collapse">
                  <tr class="bg-muted/50"><th class="border p-3">Падеж</th><th class="border p-3">Пример (der Kollege)</th></tr>
                  <tr><td class="border p-3">Nominativ</td><td class="border p-3">der Kollege</td></tr>
                  <tr><td class="border p-3">Akkusativ</td><td class="border p-3">den Kollege<strong class="text-primary">n</strong></td></tr>
                  <tr><td class="border p-3">Dativ</td><td class="border p-3">dem Kollege<strong class="text-primary">n</strong></td></tr>
                  <tr><td class="border p-3">Genitiv</td><td class="border p-3">des Kollege<strong class="text-primary">n</strong></td></tr>
              </table>
            </div>
          `,
          exercises: [],
          vocabulary: []
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
            <h3 class="font-headline text-xl font-bold mb-4">Konjunktiv I: язык новостей и отчетов</h3>
            <p class="mb-4">Konjunktiv I используется для <strong class="text-primary">нейтральной передачи чужих слов</strong> (косвенной речи), не выражая своего мнения. Чаще всего встречается в официальных текстах, новостях.</p>
            <p class="mb-4">Образуется от основы инфинитива с добавлением особых окончаний. Самая узнаваемая форма — 3-е лицо ед.ч. (er/sie/es), где к основе добавляется <strong class="text-primary">-e</strong>.</p>
            <p class="italic bg-muted p-2 rounded-md">Er sagt, er <strong class="text-primary">komme</strong> später. (Он говорит, что придет позже.)</p>
            <p class="mt-2">Сравните с обычным Präsens: Er kommt. Konjunktiv I показывает, что это не наши слова, а пересказ.</p>
          `,
          exercises: [],
          vocabulary: []
        },
        {
          id: 'futur2',
          title: 'Будущее совершенное (Futur II)',
          explanation: `
            <h3 class="font-headline text-xl font-bold mb-4">Futur II: предположения о будущем и прошлом</h3>
            <p class="mb-4">Futur II имеет два основных значения:</p>
            <ul class="list-disc list-inside space-y-2 mb-4">
              <li><strong>Предположение о завершенном действии в прошлом:</strong> Er wird das Buch schon <strong class="text-primary">gelesen haben</strong>. (Он, <strong class="text-primary">должно быть</strong>, уже прочитал книгу.)</li>
              <li><strong>Действие, которое завершится к моменту в будущем:</strong> Bis morgen <strong class="text-primary">werde</strong> ich die Arbeit <strong class="text-primary">beendet haben</strong>. (К завтрашнему дню я закончу работу.)</li>
            </ul>
            <p>Формула: <strong class="text-primary">werden (спряг.) + Partizip II + haben/sein (Infinitiv)</strong>.</p>
          `,
          exercises: [],
          vocabulary: []
        },
        {
          id: 'nominalisierung',
          title: 'Номинализация',
          explanation: `
            <h3 class="font-headline text-xl font-bold mb-4">Номинализация: от глагола к существительному</h3>
            <p class="mb-4">Номинализация — это превращение глаголов или прилагательных в существительные. Это делает язык более формальным, абстрактным и "книжным", что характерно для уровня C1.</p>
            <ul class="list-disc list-inside space-y-2">
              <li><strong class="text-primary">Глагол → Существительное:</strong> hoffen (надеяться) → <strong class="text-primary">die Hoffnung</strong> (надежда)</li>
              <li><strong class="text-primary">Прилагательное → Существительное:</strong> schön (красивый) → <strong class="text-primary">die Schönheit</strong> (красота)</li>
            </ul>
            <p class="mt-4">Это позволяет выражать мысли более сжато и в научном стиле.</p>
          `,
          exercises: [],
          vocabulary: []
        },
        {
          id: 'partizipialkonstruktionen',
          title: 'Причастные обороты',
          explanation: `
            <h3 class="font-headline text-xl font-bold mb-4">Причастные обороты: элегантные сокращения</h3>
            <p class="mb-4">Конструкции с Partizip I (причастие настоящего времени) и Partizip II (причастие прошедшего времени) позволяют заменять целые придаточные предложения, делая речь более лаконичной и элегантной.</p>
            <ul class="list-disc list-inside space-y-2">
              <li><strong>Partizip I (активное, одновременное действие):</strong> Das <strong class="text-primary">weinende</strong> Kind (плачущий ребенок) = Das Kind, <strong class="text-primary">das weint</strong>.</li>
              <li><strong>Partizip II (пассивное, предшествующее действие):</strong> Die <strong class="text-primary">geschlossene</strong> Tür (закрытая дверь) = Die Tür, <strong class="text-primary">die geschlossen wurde</strong>.</li>
            </ul>
          `,
          exercises: [],
          vocabulary: []
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
            <h3 class="font-headline text-xl font-bold mb-4">Стилистика: искусство выбора слов</h3>
            <p class="mb-4">На этом уровне фокус смещается с "правильно" на "точно и уместно". Это включает:</p>
            <ul class="list-disc list-inside space-y-2">
              <li>Глубокое понимание <strong class="text-primary">синонимических рядов</strong> (z.B. sagen, äußern, behaupten, mitteilen).</li>
              <li>Свободное использование <strong class="text-primary">идиом и устойчивых выражений</strong>.</li>
              <li>Умение переключаться между <strong class="text-primary">разными регистрами речи</strong>: от формального до сленга.</li>
            </ul>
          `,
          exercises: [],
          vocabulary: []
        },
        {
          id: 'komplexe-satze',
          title: 'Сложные синтаксические структуры',
          explanation: `
            <h3 class="font-headline text-xl font-bold mb-4">Сложный синтаксис</h3>
            <p class="mb-4">Свободное владение сложными и многоуровневыми предложениями, включая редкие грамматические конструкции, для выражения самых тонких нюансов мысли. Например, использование распространенных причастных оборотов, инфинитивных конструкций и сложных союзов.</p>
            <p class="italic bg-muted p-2 rounded-md">Пример: Der Mann, <strong class="text-primary">dessen Hund gestern entlaufen war</strong>, suchte ihn den ganzen Tag. (Мужчина, <strong class="text-primary">чья собака вчера убежала</strong>, искал ее весь день.)</p>
          `,
          exercises: [],
          vocabulary: []
        },
        {
          id: 'fachsprache',
          title: 'Язык для профессиональных целей (Fachsprache)',
          explanation: `
            <h3 class="font-headline text-xl font-bold mb-4">Профессиональный язык (Fachsprache)</h3>
            <p class="mb-4">На уровне C2 ожидается способность осваивать и использовать терминологию и языковые конструкции, специфичные для определенной профессиональной области, будь то:</p>
            <ul class="list-disc list-inside space-y-2">
              <li>Медицина</li>
              <li>Юриспруденция</li>
              <li>Информационные технологии</li>
              <li>Наука и исследования</li>
            </ul>
            <p class="mt-4">Это подразумевает не только знание терминов, но и понимание стиля общения в данной сфере.</p>
          `,
          exercises: [],
          vocabulary: []
        }
      ] 
    }
  ]
};
