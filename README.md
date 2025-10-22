# substans-ai

Ett Vite-baserat frontend-projekt.

## 🚀 Kom igång

```bash
# Installera
npm install

# Starta dev-server
npm run dev

# Bygg för produktion
npm run build

# Linta & formatera
npm run lint
npm run format
```

## 🔑 Miljövariabler

Skapa en `.env` i projektroten, t.ex.:

```
VITE_API_BASE_URL=https://api.example.com
```

Alla variabler som ska vara tillgängliga i klienten måste börja med `VITE_` (Vite-krav).

## 🧱 Struktur (förslag)

```
src/
  components/
  pages/
  lib/          # API-klienter, helpers
  hooks/
  styles/
```

## 🧪 Kvalitet

- ESLint + Prettier (pre-commit via husky + lint-staged)
- Felhantering via Error Boundary
- Centraliserad fetch i `src/lib/api.js`

## 🔧 CI (förslag)

Lägg till GitHub Actions workflow som kör `install → build → lint` på PRs.
