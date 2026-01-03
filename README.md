# Next.js Dashboard - Course Project

Ce projet est une application de tableau de bord complète réalisée dans le cadre du cours [Next.js App Router](https://nextjs.org/learn). Il démontre l'utilisation des fonctionnalités modernes de Next.js pour créer une application web performante et sécurisée.

## 🚀 Fonctionnalités

- **Dashboard** : Vue d'ensemble des revenus, des factures et des clients.
- **Authentification** : Gestion des sessions avec [Auth.js (NextAuth.js v5)](https://authjs.dev/).
- **Gestion des Factures** : Création, modification et suppression de factures (CRUD).
- **Recherche et Pagination** : Filtrage dynamique des données côté serveur.
- **Validation de formulaires** : Gestion des erreurs avec [Zod](https://zod.dev/).
- **Optimisation des performances** : Utilisation de Server Components, Streaming, et Partial Prerendering (PPR).
- **Base de données** : Intégration avec PostgreSQL via Vercel Postgres.
- **Stylisation** : Design moderne et responsive avec [Tailwind CSS](https://tailwindcss.com/).

## 🛠️ Installation

### 1. Cloner le projet

Si vous ne l'avez pas encore fait, clonez le dépôt et accédez au dossier :

```bash
cd nextjs-dashboard
```

### 2. Installer les dépendances

Le projet utilise `pnpm` comme gestionnaire de paquets :

```bash
pnpm install
```

### 3. Configuration de l'environnement

Renommez le fichier `.env.example` en `.env` à la racine du projet :

```bash
cp .env.example .env
```

Remplissez les variables d'environnement suivantes :

#### Base de données (Vercel Postgres)
1. Créez un projet sur [Vercel](https://vercel.com).
2. Dans l'onglet **Storage**, créez une base de données **Postgres** (Neon ou Supabase).
3. Copiez les informations de l'onglet `.env.local` de Vercel dans votre fichier `.env`.

#### Authentification
Générez une clé secrète pour `AUTH_SECRET` afin de sécuriser les sessions :

- **macOS / Linux** : `openssl rand -base64 32`
- **Windows** : Utilisez [generate-secret.vercel.app/32](https://generate-secret.vercel.app/32)

Ajoutez la clé générée dans votre `.env` :
```env
AUTH_SECRET=votre_cle_secrete_ici
```

### 4. Lancer le serveur de développement

```bash
pnpm dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir le résultat.

## 🔐 Identifiants de test

Pour tester l'application, vous pouvez utiliser le compte suivant :

- **Email** : `user@nextmail.com`
- **Mot de passe** : `123456`

## 📚 Ressources supplémentaires

Ce projet a été initialisé avec la commande :
```bash
npx create-next-app@latest nextjs-dashboard --example "https://github.com/vercel/next-learn/tree/main/dashboard/starter-example" --use-pnpm
```

Pour plus de détails sur l'implémentation, consultez le [curriculum du cours](https://nextjs.org/learn).

