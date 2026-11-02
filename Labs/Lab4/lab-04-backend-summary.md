# Lab 04 - Backend: Summary

Moves the to-do app from Lab 03 (plain React) to Next.js, with the data now stored on the server.

Source: [Lab 04 - Backend](https://ocw.cs.pub.ro/courses/se/labs/04)

## Summary

- **SPAs:** the browser renders everything with JS. This is fast to navigate, but bad for SEO.
- **Pre-rendering:** the HTML is generated in advance, then hydrated with JS to make it interactive.
  - **SSR:** generated on each request.
  - **SSG:** generated at build time, which suits static content.
- **Server vs Client Components:** in Next.js 15, components are Server Components by default. Add `'use client'` only if you need interactivity, such as `useState` or `useEffect`.
- **Routing:** routes are based on files, e.g. `app/about/page.tsx`. Dynamic routes use brackets, e.g. `app/article/[article-id]/page.tsx`.
- **Navigation and layouts:** use `<Link>` for links, `useRouter` for navigating from code in client components, and `layout.tsx` for shared UI.
- **Data fetching:** use `fetch` directly in Server Components. In Client Components, a library like SWR is recommended.
- **Server Actions:** these are async functions marked `'use server'` that run on the server. Use them for forms and data changes.

## Requirements

1. Download the project archive from the lab page, then run `npm install` and `npm run dev`.
2. Read `app/components/ToDoList.tsx` and compare it with your Lab 03 version.
3. Read `app/page.tsx` and note how `ToDoList` is pre-initialized with data, so it renders on the server on first load.
4. **Main task:** implement the mutations marked `TODO` in the actions file, so the app does everything your React version did. The list is kept in memory on the server.

