# RegnskapsAktuelt (regnskapsaktuelt.no)

Fagstoff og analyser om regnskap, skatt, MVA, lønn, årsoppgjør og økonomisystemer.

RegnskapsAktuelt gir norske bedrifter, regnskapsførere og økonomiansvarlige oppdaterte fagartikler om regnskap, skatt, merverdiavgift, lønn og årsoppgjør.

## Redaksjonelle kategorier

- Regnskap
- Skatt & MVA
- Lønn & HR
- Årsoppgjør
- Økonomisystemer

## Teknologi

Prosjektet er bygget med Next.js App Router, TypeScript, Tailwind CSS og Prisma ORM mot PostgreSQL.

- **Server-Side Rendering (SSR):** Forsiden (`/`), artikkelsider (`/artikkel/[id]`), personvernerklæring (`/personvern`), `sitemap.xml` og `robots.txt` rendres på serveren med full metadata og JSON-LD.
- **Konfigurasjon:** Nettstedets visuelle profil, kategorier og kontaktinformasjon ligger i `src/config/site.ts`, og aktivt domene styres via `NEXT_PUBLIC_DOMAIN`.

## Komme i gang

1. Installer avhengigheter:
   ```bash
   npm ci
   ```
2. Kopier `.env.example` til `.env` og fyll inn `DATABASE_URL` og `NEXT_PUBLIC_DOMAIN="regnskapsaktuelt.no"`.
3. Generer Prisma-klient og start utviklingsserver:
   ```bash
   npx prisma generate
   npm run dev
   ```

## Produksjonsbygg

```bash
npm run typecheck
npm run build
npm start
```
