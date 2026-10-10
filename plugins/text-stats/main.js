// Плагин-образец StarVibe (формат 1). Код работает в Worker без сети; всё, что он может, — в объекте starvibe.
// Команда «/» возвращает Markdown — его вставляет HQ (видно сразу, отменяется Ctrl+Z).
const L = {
  ru: { title: 'Статистика страницы', words: 'Слов', chars: 'Знаков', read: 'Читать', min: 'мин' },
  en: { title: 'Page stats', words: 'Words', chars: 'Characters', read: 'Reading time', min: 'min' },
  fr: { title: 'Statistiques de la page', words: 'Mots', chars: 'Caractères', read: 'Lecture', min: 'min' },
};

starvibe.slash('stats', async (ctx) => {
  const t = L[ctx.lang] || L.en;
  const page = await starvibe.page.read();           // нужно право page:read из манифеста
  const text = (page && page.markdown || '')
    .replace(/```[\s\S]*?```/g, ' ')                 // код не считаем
    .replace(/[#>*_`~|[\]()-]/g, ' ');
  const words = (text.match(/[\p{L}\p{N}]+(?:['’-][\p{L}\p{N}]+)*/gu) || []).length;
  const chars = text.replace(/\s+/g, '').length;
  const minutes = Math.max(1, Math.round(words / 200));
  // «> 📏 …» — выноска HQ с иконкой
  return `> 📏 **${t.title}** · ${t.words}: ${words} · ${t.chars}: ${chars} · ${t.read}: ${minutes} ${t.min}`;
});

starvibe.slash('today', (ctx) => {                   // без прав: только язык из ctx
  const loc = { ru: 'ru-RU', en: 'en-GB', fr: 'fr-FR' }[ctx.lang] || 'en-GB';
  return new Date().toLocaleDateString(loc, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
});
