# Reddit on React.js

## Requirements

- Node.js 14+
- npm 6+
- Reddit API access (more info: https://www.reddit.com/wiki/api)

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Decisions made
- Use Next.js due to its support for server-side rendering and the ease to use for a mock project
- Material UI components to ease components development and bring a well-known UI. This needed some extra changes over Next.js to properly handle SSR/SSG cases
- Make use of React-Redux store to ease state manipulation across the app
- Use date-fns as dates helper, as it's always hard to handle those in any programming language 😰
- Mocked Reddit API per lack of time as it needed to create an account, fill a form with the usage that you'd do of the API and handle OAuth authentication. I prefered to get the app working and with a good UX before that.

## Changelog
Jan 19
- Initialized the project with Next.js
- Use a basic Reddit mock to start with the UI work

Jan 20
- Added Redux to handle app state

Jan 21
- Remove root user on VS Code dev container

Jan 22
- Added Material UI dependency
- Added date-fns to handle dates
- Added eslint & prettier support to enhance developer experience
- Created the first React elements to display data in a list

Jan 25
- Added Material UI icons

Feb 4
- A major refactor was done, making use of Material UI components and its way to handle styling. Started create some Redux actions.

Feb 5
- React-redux has been connected

Feb 6
- Added Redux localStorage support to enable app state preservation/restoration
- Made some styling adjusments
- Deployed to Vercel
- Drawer is now opened by default to ease content discovery

Feb 7
- Use Redux hooks instead of `connect()`
- Added read status support
- Added delete action for single posts
- Added delete all action
- Added ES2020 support for Node
- Minor styling adjustments
- Improve API mock

Feb 8
- Added post detail view
- Added post dismissal animations
- Added pagination support
- Minor fixes
