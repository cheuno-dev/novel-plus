<a href="https://novel.sh">
  <img alt="Novel-plus is a fork of [Novel](https://github.com/steven-tey/novel), which is Notion-style WYSIWYG editor with AI-powered autocompletions." src="https://novel.sh/opengraph-image.png">
  <h1 align="center">Novel-plus</h1>
</a>

<p align="center">
  Novel-plus is a modified version of Novel, a WYSIWYG editor, with enhanced extensibility.. 
</p>

<p align="center">
  <a href="https://news.ycombinator.com/item?id=36360789"><img src="https://img.shields.io/badge/Hacker%20News-369-%23FF6600" alt="Hacker News"></a>
  <a href="https://github.com/cheuno-dev/novel-plus/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/cheuno-dev/novel-plus?label=license&logo=github&color=f80&logoColor=fff" alt="License" />
  </a>
  <a href="https://github.com/cheuno-dev/novel-plus"><img src="https://img.shields.io/github/stars/cheuno-dev/novel-plus?style=social" alt="Novel.sh's GitHub repo"></a>
</p>

<p align="center">
  <a href="#introduction"><strong>Introduction</strong></a> ·
  <a href="#installation"><strong>Installation</strong></a> ·
  <a href="#deploy-your-own"><strong>Deploy Your Own</strong></a> ·
  <a href="#setting-up-locally"><strong>Setting Up Locally</strong></a> ·
  <a href="#tech-stack"><strong>Tech Stack</strong></a> ·
  <a href="#contributing"><strong>Contributing</strong></a> ·
  <a href="#license"><strong>License</strong></a>
</p>
<br/>

## Introduction

[Novel](https://novel.sh/) is a Notion-style WYSIWYG editor with AI-powered autocompletions.

https://github.com/cheuno-dev/novel-plus/assets/28986134/2099877f-4f2b-4b1c-8782-5d803d63be5c

<br />

## Installation

To use Novel in a project, you can run the following command to install the `novel` [NPM package](https://www.npmjs.com/package/novel):

```
npm i novel-plus
```

Then, you can use it in your code like this:

```jsx
import { Editor } from "novel-plus";

export default function App() {
  return <Editor />;
}
```

The `Editor` is a React component that takes in the following props:

| Prop                  | Type                        | Description                                                                                                                                                                                     | Default                                                                                                                             |
| --------------------- | --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `completionApi`       | `string`                    | The API route to use for the OpenAI completion API.                                                                                                                                             | `/api/generate`                                                                                                                     |
| `className`           | `string`                    | Editor container classname.                                                                                                                                                                     | `"relative min-h-[500px] w-full max-w-screen-lg border-stone-200 bg-white sm:mb-[calc(20vh)] sm:rounded-lg sm:border sm:shadow-lg"` |
| `defaultValue`        | `JSONContent` or `string`   | The default value to use for the editor.                                                                                                                                                        | [`defaultEditorContent`](https://github.com/cheuno-dev/novel-plus/blob/main/packages/core/src/ui/editor/default-content.tsx)        |
| `extensions`          | `Extension[]`               | A list of extensions to use for the editor, in addition to the [default Novel extensions](https://github.com/cheuno-dev/novel-plus/blob/main/packages/core/src/ui/editor/extensions/index.tsx). | `[]`                                                                                                                                |
| `editorProps`         | `EditorProps`               | Props to pass to the underlying Tiptap editor, in addition to the [default Novel editor props](https://github.com/cheuno-dev/novel-plus/blob/main/packages/core/src/ui/editor/props.ts).        | `{}`                                                                                                                                |
| `onUpdate`            | `(editor?: Editor) => void` | A callback function that is called whenever the editor is updated.                                                                                                                              | `() => {}`                                                                                                                          |
| `onDebouncedUpdate`   | `(editor?: Editor) => void` | A callback function that is called whenever the editor is updated, but only after the defined debounce duration.                                                                                | `() => {}`                                                                                                                          |
| `debounceDuration`    | `number`                    | The duration (in milliseconds) to debounce the `onDebouncedUpdate` callback.                                                                                                                    | `750`                                                                                                                               |
| `storageKey`          | `string`                    | The key to use for storing the editor's value in local storage.                                                                                                                                 | `novel__content`                                                                                                                    |
| `disableLocalStorage` | `boolean`                   | Enabling this option will prevent read/write content from/to local storage.                                                                                                                     | `false`                                                                                                                             |

> **Note**: Make sure to define an API endpoint that matches the `completionApi` prop (default is `/api/generate`). This is needed for the AI autocompletions to work. Here's an example: https://github.com/cheuno-dev/novel-plus/blob/main/apps/web/app/api/generate/route.ts

## Setting Up Locally

To set up Novel locally, you'll need to clone the repository and set up the following environment variables:

- `OPENAI_API_KEY` – your OpenAI API key (you can get one [here](https://platform.openai.com/account/api-keys))
- `BLOB_READ_WRITE_TOKEN` – your Vercel Blob read/write token (currently [still in beta](https://vercel.com/docs/storage/vercel-blob/quickstart#quickstart), but feel free to [sign up on this form](https://vercel.fyi/blob-beta) for access)

If you've deployed this to Vercel, you can also use [`vc env pull`](https://vercel.com/docs/cli/env#exporting-development-environment-variables) to pull the environment variables from your Vercel project.

To run the app locally, you can run the following commands:

```
pnpm i
pnpm build
pnpm dev
```

## Tech Stack

Novel is built on the following stack:

- [Next.js](https://nextjs.org/) – framework
- [Tiptap](https://tiptap.dev/) – text editor
- [OpenAI](https://openai.com/) - AI completions
- [Vercel AI SDK](https://sdk.vercel.ai/docs) – AI library
- [Vercel](https://vercel.com) – deployments
- [TailwindCSS](https://tailwindcss.com/) – styles
- [Cal Sans](https://github.com/calcom/font) – font
