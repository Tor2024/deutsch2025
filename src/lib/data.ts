import type { Curriculum } from './types';

export const curriculum: Curriculum = {
  levels: [
    {
      id: 'a0',
      title: 'Уровень A0',
      description: 'Знакомство с основами немецкого языка. Вы выучите алфавит, произношение и самые базовые фразы для приветствия и знакомства.',
      topics: [
        {
          id: 'alphabet',
          title: 'Алфавит и произношение',
          explanation: `
            <h2 class="text-xl font-bold mb-2 font-headline">Немецкий алфавит</h2>
            <p class="mb-4">Немецкий алфавит основан на латинице и содержит 26 стандартных букв, 3 умлаута (ä, ö, ü) и эсцет (ß).</p>
            <ul class="list-disc pl-5 mb-4">
              <li><strong>Умлауты (Umlaute):</strong> Ä/ä, Ö/ö, Ü/ü. Они обозначают измененные звуки гласных. 'ä' произносится как [ɛ], 'ö' как [ø], 'ü' как [y].</li>
              <li><strong>Эсцет (Eszett):</strong> ß. Используется после длинных гласных и дифтонгов, произносится как глухой звук [s]. Соответствует "ss". Например, "Straße" (улица).</li>
            </ul>
            <h3 class="text-lg font-bold mb-2 font-headline">Основы произношения</h3>
            <p><strong>W</strong> произносится как русский [в] ("Wasser" - вода). <strong>V</strong> в большинстве слов произносится как [ф] ("Vater" - отец), но в заимствованных - как [в] ("Vase" - ваза). <strong>Z</strong> произносится как [ц] ("Zeit" - время).</p>
          `,
          exercises: [],
          vocabulary: []
        },
        {
          id: 'greetings',
          title: 'Приветствия и прощания',
          explanation: `
            <h2 class="text-xl font-bold mb-2 font-headline">Как приветствовать и прощаться</h2>
            <p class="mb-4">В немецком языке есть формальные и неформальные способы приветствия.</p>
            <h3 class="text-lg font-bold mb-2 font-headline">Приветствия (Grüße)</h3>
            <ul class="list-disc pl-5 mb-4">
              <li><strong>Hallo!</strong> - Привет! (Универсально)</li>
              <li><strong>Guten Morgen!</strong> - Доброе утро! (до 11-12 часов)</li>
              <li><strong>Guten Tag!</strong> - Добрый день! (с 11-12 до 18 часов)</li>
              <li><strong>Guten Abend!</strong> - Добрый вечер! (после 18 часов)</li>
            </ul>
            <h3 class="text-lg font-bold mb-2 font-headline">Прощания (Abschied)</h3>
            <ul class="list-disc pl-5 mb-4">
              <li><strong>Tschüss!</strong> - Пока! (Неформально)</li>
              <li><strong>Auf Wiedersehen!</strong> - До свидания! (Формально)</li>
              <li><strong>Bis bald!</strong> - До скорого!</li>
            </ul>
          `,
          exercises: [],
          vocabulary: []
        }
      ]
    },
    {
      id: 'a1',
      title: 'Уровень A1',
      description: 'Основы для начинающих. Вы научитесь рассказывать о себе, своей семье и работе, задавать простые вопросы и понимать ответы на них.',
      topics: [
        {
          id: 'nominativ',
          title: 'Именительный падеж (Nominativ)',
          explanation: `
            <h2 class="text-xl font-bold mb-2 font-headline">Именительный падеж (Nominativ)</h2>
            <p class="mb-4">Именительный падеж отвечает на вопросы "Кто?" (Wer?) и "Что?" (Was?). Он используется для обозначения подлежащего в предложении — того, кто или что совершает действие.</p>
            <h3 class="text-lg font-bold mb-2 font-headline">Артикли в Nominativ</h3>
            <p class="mb-2">У каждого существительного в немецком есть род: мужской (maskulin), женский (feminin) или средний (neutral). В именительном падеже артикли выглядят так:</p>
            <ul class="list-disc pl-5 mb-4">
              <li>Мужской род: <strong>der</strong> (определенный), <strong>ein</strong> (неопределенный). Пример: <strong>Der Mann</strong> liest. (Мужчина читает.)</li>
              <li>Женский род: <strong>die</strong>, <strong>eine</strong>. Пример: <strong>Die Frau</strong> singt. (Женщина поет.)</li>
              <li>Средний род: <strong>das</strong>, <strong>ein</strong>. Пример: <strong>Das Kind</strong> spielt. (Ребенок играет.)</li>
              <li>Множественное число: <strong>die</strong> (неопределенного артикля нет). Пример: <strong>Die Kinder</strong> spielen. (Дети играют.)</li>
            </ul>
            <p><strong>Важно:</strong> Неопределенный артикль "ein" используется для мужского и среднего рода, а "eine" — для женского.</p>
          `,
          exercises: [
            {
              type: 'fill-in-the-blank',
              question: '___ Hund ist klein.',
              answer: 'Der'
            },
            {
              type: 'multiple-choice',
              question: 'Выберите правильный артикль: ___ Katze schläft.',
              options: ['Der', 'Die', 'Das'],
              answer: 'Die'
            }
          ],
          vocabulary: [
            {
              theme: 'Семья',
              words: [
                { german: 'der Vater', russian: 'отец', example: 'Mein Vater ist Arzt.' },
                { german: 'die Mutter', russian: 'мать', example: 'Meine Mutter ist Lehrerin.' },
                { german: 'das Kind', russian: 'ребенок', example: 'Das Kind spielt im Garten.' },
              ]
            }
          ]
        },
        {
          id: 'prasens',
          title: 'Настоящее время (Präsens)',
          explanation: `
            <h2 class="text-xl font-bold mb-2 font-headline">Настоящее время (Präsens)</h2>
            <p class="mb-4">Präsens используется для описания действий, происходящих в настоящий момент, регулярных действий, а также будущих действий (с указанием времени).</p>
            <h3 class="text-lg font-bold mb-2 font-headline">Спряжение слабых глаголов</h3>
            <p class="mb-2">У слабых глаголов (regelmäßige Verben) основа не меняется, а окончания добавляются по стандартной схеме. Пример с глаголом <strong>machen</strong> (делать):</p>
            <ul class="list-disc pl-5 mb-4">
              <li>ich mach<strong>e</strong> (я делаю)</li>
              <li>du mach<strong>st</strong> (ты делаешь)</li>
              <li>er/sie/es mach<strong>t</strong> (он/она/оно делает)</li>
              <li>wir mach<strong>en</strong> (мы делаем)</li>
              <li>ihr mach<strong>t</strong> (вы делаете)</li>
              <li>sie/Sie mach<strong>en</strong> (они/Вы делаете)</li>
            </ul>
            <h3 class="text-lg font-bold mb-2 font-headline">Спряжение сильных глаголов</h3>
            <p>У сильных глаголов (unregelmäßige Verben) во 2-м и 3-м лице единственного числа (du, er/sie/es) может меняться корневая гласная. Пример с глаголом <strong>sprechen</strong> (говорить):</p>
            <ul class="list-disc pl-5 mb-4">
                <li>ich spreche</li>
                <li>du <strong>sprichst</strong></li>
                <li>er/sie/es <strong>spricht</strong></li>
                <li>wir sprechen</li>
                <li>ihr sprecht</li>
                <li>sie/Sie sprechen</li>
            </ul>
          `,
          exercises: [
             {
              type: 'fill-in-the-blank',
              question: 'Ich ___ Deutsch.',
              answer: 'lerne'
            },
            {
              type: 'fill-in-the-blank',
              question: 'Er ___ ein Buch.',
              options: ['liest', 'lese', 'lest'],
              answer: 'liest'
            }
          ],
          vocabulary: [
             {
              theme: 'Действия',
              words: [
                { german: 'lernen', russian: 'учить', example: 'Wir lernen Deutsch.' },
                { german: 'arbeiten', russian: 'работать', example: 'Er arbeitet in Berlin.' },
                { german: 'wohnen', russian: 'жить/проживать', example: 'Ich wohne in einer Wohnung.' },
              ]
            }
          ]
        }
      ]
    },
    { id: 'a2', title: 'Уровень A2', description: 'Расширение базовых знаний. Вы сможете участвовать в простых диалогах на бытовые темы, описывать события в прошлом.', topics: [] },
    { id: 'b1', title: 'Уровень B1', description: 'Самостоятельное владение. Вы сможете понимать основное содержание четких сообщений на знакомые темы и объяснять свою точку зрения.', topics: [] },
    { id: 'b2', title: 'Уровень B2', description: 'Продвинутый уровень. Вы сможете понимать сложные тексты на конкретные и абстрактные темы, говорить достаточно бегло и спонтанно.', topics: [] },
    { id: 'c1', title: 'Уровень C1', description: 'Профессиональное владение. Вы сможете понимать широкий спектр сложных текстов, гибко и эффективно использовать язык в социальной, научной и профессиональной деятельности.', topics: [] },
    { id: 'c2', title: 'Уровень C2', description: 'Владение на уровне носителя. Вы сможете понимать практически все услышанное и прочитанное, говорить спонтанно с высоким темпом и точностью.', topics: [] }
  ]
};
