
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
            <h2 class="text-xl font-bold mb-2 font-headline">Представление себя</h2>
            <p class="mb-4">Вы научитесь базовым фразам для знакомства.</p>
            <ul class="list-disc pl-5 mb-4">
              <li><strong>Wie heißen Sie?</strong> - Как Вас зовут? (Формально)</li>
              <li><strong>Wie heißt du?</strong> - Как тебя зовут? (Неформально)</li>
              <li><strong>Ich heiße...</strong> - Меня зовут...</li>
              <li><strong>Mein Name ist...</strong> - Моё имя...</li>
            </ul>
            <h3 class="text-lg font-bold mb-2 font-headline">Происхождение и место жительства</h3>
            <ul class="list-disc pl-5 mb-4">
                <li><strong>Woher kommen Sie?</strong> - Откуда Вы?</li>
                <li><strong>Ich komme aus...</strong> - Я из...</li>
                <li><strong>Wo wohnen Sie?</strong> - Где Вы живете?</li>
                <li><strong>Ich wohne in...</strong> - Я живу в...</li>
            </ul>
          `,
          exercises: [],
          vocabulary: [
            {
              theme: 'Личная информация',
              words: [
                { german: 'der Name', russian: 'имя', example: 'Mein Name ist Klaus.' },
                { german: 'das Land', russian: 'страна', example: 'Aus welchem Land kommst du?' },
                { german: 'die Stadt', russian: 'город', example: 'Ich wohne in der Stadt Berlin.' },
                { german: 'die Adresse', russian: 'адрес', example: 'Wie ist deine Adresse?' },
              ]
            }
          ]
        },
        {
          id: 'nominativ-akkusativ',
          title: 'Падежи: Nominativ и Akkusativ',
          explanation: `
            <h2 class="text-xl font-bold mb-2 font-headline">Nominativ (Именительный падеж)</h2>
            <p class="mb-4">Отвечает на вопросы "Кто?" (Wer?) и "Что?" (Was?). Используется для подлежащего. <strong>Der Hund</strong> schläft. (Собака спит.)</p>
            <h2 class="text-xl font-bold mb-2 font-headline">Akkusativ (Винительный падеж)</h2>
            <p class="mb-4">Отвечает на вопрос "Кого?" (Wen?) и "Что?" (Was?). Используется для прямого дополнения. Ich sehe <strong>den Hund</strong>. (Я вижу собаку.)</p>
            <h3 class="text-lg font-bold mb-2 font-headline">Артикли</h3>
            <table class="w-full text-left border-collapse">
              <thead>
                <tr><th class="border p-2">Падеж</th><th class="border p-2">Муж.р. (m)</th><th class="border p-2">Жен.р. (f)</th><th class="border p-2">Сред.р. (n)</th></tr>
              </thead>
              <tbody>
                <tr><td class="border p-2">Nominativ</td><td class="border p-2">der/ein</td><td class="border p-2">die/eine</td><td class="border p-2">das/ein</td></tr>
                <tr><td class="border p-2">Akkusativ</td><td class="border p-2"><strong>den</strong>/<strong>einen</strong></td><td class="border p-2">die/eine</td><td class="border p-2">das/ein</td></tr>
              </tbody>
            </table>
            <p class="mt-4">Как видите, изменяется только артикль мужского рода.</p>
          `,
          exercises: [],
          vocabulary: []
        },
        {
          id: 'prasens',
          title: 'Настоящее время (Präsens)',
          explanation: `
            <h2 class="text-xl font-bold mb-2 font-headline">Спряжение глаголов в настоящем времени</h2>
            <p class="mb-4">В немецком языке глаголы спрягаются, то есть их окончания меняются в зависимости от того, кто выполняет действие. Это основа для построения практически любого предложения.</p>
            <h3 class="text-lg font-bold mb-2 font-headline">Слабые глаголы (на примере "machen" - делать)</h3>
            <ul class="list-disc pl-5 mb-4">
              <li>ich mach<strong>e</strong> (я делаю)</li>
              <li>du mach<strong>st</strong> (ты делаешь)</li>
              <li>er/sie/es mach<strong>t</strong> (он/она/оно делает)</li>
              <li>wir mach<strong>en</strong> (мы делаем)</li>
              <li>ihr mach<strong>t</strong> (вы делаете)</li>
              <li>sie/Sie mach<strong>en</strong> (они/Вы делаете)</li>
            </ul>
            <h3 class="text-lg font-bold mb-2 font-headline">Сильные глаголы (на примере "sprechen" - говорить)</h3>
            <p>У сильных глаголов во 2-м и 3-м лице единственного числа (du, er/sie/es) меняется корневая гласная (e → i/ie, a → ä).</p>
            <ul class="list-disc pl-5 mb-4">
                <li>ich spreche</li>
                <li>du <strong>sprichst</strong></li>
                <li>er/sie/es <strong>spricht</strong></li>
                <li>wir sprechen</li>
                <li>ihr sprecht</li>
                <li>sie/Sie sprechen</li>
            </ul>
          `,
          exercises: [],
          vocabulary: []
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
            <h2 class="text-xl font-bold mb-2 font-headline">Время Perfekt</h2>
            <p class="mb-4">Perfekt используется для описания завершенных действий в прошлом, особенно в разговорной речи. Оно образуется с помощью вспомогательного глагола <strong>haben</strong> или <strong>sein</strong> в настоящем времени и причастия прошедшего времени (Partizip II).</p>
            <h3 class="text-lg font-bold mb-2 font-headline">Haben или Sein?</h3>
            <ul class="list-disc pl-5 mb-4">
              <li><strong>Sein</strong> используется с глаголами движения (gehen, fahren) и смены состояния (einschlafen, aufwachen). Пример: Ich <strong>bin</strong> nach Hause <strong>gegangen</strong>. (Я ушел домой.)</li>
              <li><strong>Haben</strong> используется во всех остальных случаях. Пример: Ich <strong>habe</strong> ein Buch <strong>gelesen</strong>. (Я прочитал книгу.)</li>
            </ul>
            <h3 class="text-lg font-bold mb-2 font-headline">Образование Partizip II</h3>
            <ul class="list-disc pl-5 mb-4">
              <li>Слабые глаголы: <strong>ge</strong> + основа + <strong>(e)t</strong>. (gemacht, gearbeitet)</li>
              <li>Сильные глаголы: <strong>ge</strong> + измененная основа + <strong>en</strong>. (gesprochen, gesehen, gegangen) - их нужно запоминать!</li>
            </ul>
          `,
          exercises: [],
          vocabulary: []
        },
        {
          id: 'dativ',
          title: 'Падеж Dativ',
          explanation: `
            <h2 class="text-xl font-bold mb-2 font-headline">Дательный падеж (Dativ)</h2>
            <p class="mb-4">Dativ отвечает на вопросы "Кому?" (Wem?), "Где?" (Wo?). Он используется для обозначения косвенного дополнения или местоположения.</p>
            <p class="mb-4">Пример: Ich gebe <strong>dem Mann</strong> ein Buch. (Я даю мужчине книгу.) - "dem Mann" это Dativ.</p>
            <h3 class="text-lg font-bold mb-2 font-headline">Артикли в Dativ</h3>
             <table class="w-full text-left border-collapse">
              <thead>
                <tr><th class="border p-2">Падеж</th><th class="border p-2">Муж.р. (m)</th><th class="border p-2">Жен.р. (f)</th><th class="border p-2">Сред.р. (n)</th><th class="border p-2">Мн.ч. (pl)</th></tr>
              </thead>
              <tbody>
                <tr><td class="border p-2">Nominativ</td><td class="border p-2">der</td><td class="border p-2">die</td><td class="border p-2">das</td><td class="border p-2">die</td></tr>
                <tr><td class="border p-2">Dativ</td><td class="border p-2"><strong>dem</strong></td><td class="border p-2"><strong>der</strong></td><td class="border p-2"><strong>dem</strong></td><td class="border p-2"><strong>den ...n</strong></td></tr>
              </tbody>
            </table>
            <p class="mt-4">Во множественном числе к существительному часто добавляется окончание <strong>-n</strong> (кроме тех, что уже заканчиваются на -n или -s).</p>
          `,
          exercises: [],
          vocabulary: []
        },
        {
          id: 'modalverben',
          title: 'Модальные глаголы',
          explanation: `
            <h2 class="text-xl font-bold mb-2 font-headline">Модальные глаголы</h2>
            <p class="mb-4">Модальные глаголы изменяют значение основного глагола, выражая возможность, необходимость, желание и т.д. В предложении модальный глагол стоит на втором месте (спрягается), а основной глагол уходит в конец в инфинитиве.</p>
            <p class="mb-4">Пример: Ich <strong>kann</strong> gut Deutsch <strong>sprechen</strong>. (Я могу хорошо говорить по-немецки.)</p>
            <ul class="list-disc pl-5 mb-4">
              <li><strong>können:</strong> мочь, уметь</li>
              <li><strong>müssen:</strong> быть должным (необходимость)</li>
              <li><strong>wollen:</strong> хотеть</li>
              <li><strong>sollen:</strong> быть должным (совет, поручение)</li>
              <li><strong>dürfen:</strong> мочь (иметь разрешение)</li>
              <li><strong>mögen:</strong> нравиться, любить</li>
            </ul>
             <h3 class="text-lg font-bold mb-2 font-headline">Спряжение (ich, du, er/sie/es одинаковы)</h3>
             <ul class="list-disc pl-5 mb-4">
              <li><strong>können:</strong> ich kann, du kannst, er kann</li>
              <li><strong>müssen:</strong> ich muss, du musst, er muss</li>
              <li><strong>wollen:</strong> ich will, du willst, er will</li>
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
          explanation: '<h2 class="text-xl font-bold mb-2 font-headline">Präteritum</h2><p>Используется для повествования в прошлом, в основном в письменной речи (книги, статьи). Образуется изменением основы глагола. Пример: ich <strong>sagte</strong> (я сказал), er <strong>ging</strong> (он шел).</p>',
          exercises: [],
          vocabulary: []
        },
        {
          id: 'genitiv',
          title: 'Падеж Genitiv',
          explanation: '<h2 class="text-xl font-bold mb-2 font-headline">Genitiv</h2><p>Отвечает на вопрос "Чей?" (Wessen?). Выражает принадлежность. Пример: Das Auto <strong>des Mannes</strong> (машина мужчины). Часто заменяется конструкцией von + Dativ в разговорной речи.</p>',
          exercises: [],
          vocabulary: []
        },
        {
          id: 'konjunktiv2',
          title: 'Сослагательное наклонение (Konjunktiv II)',
          explanation: '<h2 class="text-xl font-bold mb-2 font-headline">Konjunktiv II</h2><p>Используется для выражения нереальных желаний, вежливых просьб, предположений. Образуется с помощью вспомогательного глагола <strong>würden</strong> + инфинитив или от формы Präteritum сильных глаголов. Пример: Ich <strong>würde</strong> gern einen Kaffee <strong>trinken</strong> (Я бы хотел выпить кофе).</p>',
          exercises: [],
          vocabulary: []
        },
        {
          id: 'nebensatze',
          title: 'Придаточные предложения',
          explanation: '<h2 class="text-xl font-bold mb-2 font-headline">Придаточные предложения</h2><p>Сложные предложения с союзами типа <strong>dass</strong> (что), <strong>weil</strong> (потому что), <strong>obwohl</strong> (хотя). Спрягаемый глагол в придаточном предложении уходит в самый конец. Пример: Ich weiß, <strong>dass du kommst</strong> (Я знаю, что ты придешь).</p>',
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
          explanation: '<h2 class="text-xl font-bold mb-2 font-headline">Plusquamperfekt</h2><p>Используется для обозначения действия, которое произошло в прошлом до другого действия в прошлом. Образуется с помощью <strong>hatten/waren</strong> + Partizip II. Пример: Nachdem ich gegessen <strong>hatte</strong>, ging ich spazieren (После того как я поел, я пошел гулять).</p>',
          exercises: [],
          vocabulary: []
        },
        {
          id: 'passiv',
          title: 'Пассивный залог (Passiv)',
          explanation: '<h2 class="text-xl font-bold mb-2 font-headline">Passiv</h2><p>Используется, когда важно само действие, а не тот, кто его выполняет. Образуется с помощью глагола <strong>werden</strong> + Partizip II. Пример: Das Auto <strong>wird repariert</strong> (Машину ремонтируют).</p>',
          exercises: [],
          vocabulary: []
        },
        {
          id: 'relativsatze',
          title: 'Относительные придаточные предложения',
          explanation: '<h2 class="text-xl font-bold mb-2 font-headline">Relativsätze</h2><p>Уточняют существительное из главного предложения. Начинаются с относительных местоимений (der, die, das и др.). Пример: Das ist der Mann, <strong>der mir geholfen hat</strong> (Это тот мужчина, который мне помог).</p>',
          exercises: [],
          vocabulary: []
        },
        {
          id: 'n-deklination',
          title: 'N-склонение существительных',
          explanation: '<h2 class="text-xl font-bold mb-2 font-headline">N-Deklination</h2><p>Группа существительных мужского рода (в основном одушевленных), которые получают окончание <strong>-(e)n</strong> во всех падежах, кроме Nominativ единственного числа. Пример: der Junge, den Junge<strong>n</strong>, dem Junge<strong>n</strong>, des Junge<strong>n</strong>.</p>',
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
          explanation: '<h2 class="text-xl font-bold mb-2 font-headline">Konjunktiv I</h2><p>Используется для передачи чужих слов (косвенная речь), в основном в официальных текстах, новостях. Образуется от основы инфинитива. Пример: Er sagt, er <strong>komme</strong> später (Он говорит, что придет позже).</p>',
          exercises: [],
          vocabulary: []
        },
        {
          id: 'futur2',
          title: 'Будущее совершенное (Futur II)',
          explanation: '<h2 class="text-xl font-bold mb-2 font-headline">Futur II</h2><p>Выражает предположение о завершенном действии в прошлом или действие, которое завершится к определенному моменту в будущем. Образуется: <strong>werden</strong> + Partizip II + <strong>haben/sein</strong>. Пример: Er <strong>wird</strong> das Buch schon <strong>gelesen haben</strong> (Он, должно быть, уже прочитал книгу).</p>',
          exercises: [],
          vocabulary: []
        },
        {
          id: 'nominalisierung',
          title: 'Номинализация',
          explanation: '<h2 class="text-xl font-bold mb-2 font-headline">Nominalisierung</h2><p>Преобразование глаголов и прилагательных в существительные. Это делает речь более формальной и "академической". Пример: hoffen (надеяться) -> die Hoffnung (надежда).</p>',
          exercises: [],
          vocabulary: []
        },
        {
          id: 'partizipialkonstruktionen',
          title: 'Причастные обороты',
          explanation: '<h2 class="text-xl font-bold mb-2 font-headline">Partizipialkonstruktionen</h2><p>Конструкции с Partizip I и Partizip II, которые заменяют придаточные предложения, делая речь более лаконичной. Пример: Das <strong>weinende</strong> Kind (плачущий ребенок).</p>',
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
          explanation: '<h2 class="text-xl font-bold mb-2 font-headline">Stilistik</h2><p>Глубокое понимание стилистических различий между синонимами, использование идиом, формального и неформального языка. Выбор наиболее точных и выразительных слов в зависимости от контекста.</p>',
          exercises: [],
          vocabulary: []
        },
        {
          id: 'komplexe-satze',
          title: 'Сложные синтаксические структуры',
          explanation: '<h2 class="text-xl font-bold mb-2 font-headline">Komplexe Satzstrukturen</h2><p>Свободное владение сложными и многоуровневыми предложениями, включая редкие грамматические конструкции, для выражения самых тонких нюансов мысли.</p>',
          exercises: [],
          vocabulary: []
        },
        {
          id: 'fachsprache',
          title: 'Язык для профессиональных целей (Fachsprache)',
          explanation: '<h2 class="text-xl font-bold mb-2 font-headline">Fachsprache</h2><p>Освоение терминологии и языковых конструкций, специфичных для определенной профессиональной области (медицина, юриспруденция, техника и т.д.).</p>',
          exercises: [],
          vocabulary: []
        }
      ] 
    }
  ]
};

    