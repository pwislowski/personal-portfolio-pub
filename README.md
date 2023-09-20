# Personal Portfiolio in Svelte

- [Personal Portfiolio in Svelte](#personal-portfiolio-in-svelte)
  - [Creating a project](#creating-a-project)
  - [Developing](#developing)
  - [Building](#building)
- [Personalization](#personalization)
- [Notes](#notes)
- [Acknowledgements](#acknowledgements)

---

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

# Personalization

If you want to set up the page as your own, you need to populate the `.env` file
as presented below:

```
API_KEY=/ Mailjet API /
SECRET=/ Mailjet Secret /
SENDER_EMAIL=/ Email to appear as sender /
SENDER_NAME=/ Name to appear as sender /
RECIEVER_NAME=/ Your personal email /
PUBLIC_GITHUB=/ Your GitHub Profile URL /
PUBLIC_LINKEDIN=/ Your LinkedIn Profile URL /
```

> This repo tracks `.env`, for best practices either rewirite git history or
start git anew.

Once done, you need to customize components' text accrodingly to your
circumstances; head to the `src` directory.

# Notes

Potential taglines

```
Weaving technology into the fabric of finance.
```

# Acknowledgements

I would like to express my gratitude to Zuzanna Filipiak for valuable insights
regarding the portfolio design. Please check out Zuza's work:
- [Instagram](https://www.instagram.com/zuz_filipiak/)
- [Portfolio](https://zfilipiak.myportfolio.com)
