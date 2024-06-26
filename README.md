# <a href='https://main--boisterous-kitsune-d64bce.netlify.app/'>Приложение для фильтрации курсов</a>

Это React-приложение, которое позволяет пользователям фильтровать список образовательных курсов на основе связанных с ними тегов (тем). Приложение получает данные о курсах из конечной точки API и динамически отображает курсы с возможностью фильтрации по тегам.

## Используемые технологии

<ol>
  <li><b>React</b>: Библиотека JavaScript для построения пользовательских интерфейсов.</li>
  <li><b>TypeScript</b>: Надмножество JavaScript, добавляющее статическую типизацию к языку.</li>
  <li><b>Redux Toolkit</b>: Инструментарий для эффективной разработки с использованием Redux, включая функции createAsyncThunk и createApi.</li>
  <li><b>RTK Query</b>: Инструмент для получения и кэширования данных, являющийся частью Redux Toolkit, используется для второй реализации.</li>
  <li><b>SCSS</b>: Препроцессор CSS, добавляющий возможности, такие как переменные, вложенность и миксины.</li>
</ol>

## Возможности

- Отображает список образовательных курсов, полученных из конечной точки API.
- Позволяет пользователям фильтровать курсы, выбирая теги (темы) из бокового меню.
- Обеспечивает оптимизацию производительности приложения, используя такие функции, как мемоизация, для предотвращения ненужных перерендеров.
- Поддерживает адаптивный дизайн, при котором список курсов подстраивается под различные размеры экрана.

## Реализации

Это приложение имеет две реализации: одну с использованием createAsyncThunk из Redux Toolkit и другую с использованием createApi из RTK Query.

## Оптимизации

Приложение включает в себя следующие оптимизации:

- Мемоизация: Функции useAppSelector и handlePickCategory мемоизированы с помощью useCallback для предотвращения ненужных перерендеров.
- React.memo: Компонент Card обернут в React.memo для предотвращения повторного рендеринга, когда его входные данные не изменились.
