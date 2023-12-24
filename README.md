# Shakhriyor Ergashev’s Personal Website 🌊

Welcome to my personal website, where I share my thoughts, experiences, and projects. Explore the world through my blog, get to know me on the about page, and dive into my coding ventures on the projects page.

## About this Website 🫠

This site is crafted using Next.js, TypeScript, Tailwind CSS, MDX Bundler, Prisma, and SWR. It serves as a digital canvas for expressing my ideas, showcasing my projects, and connecting with a wider audience.

## Acknowledgements 🤝

Special thanks to [Theodorus Clarence](https://github.com/theodorusclarence) for providing the source code of their own website. This project is inspired by and built upon their work. You can find the original source code at [theodorusclarence/theodorusclarence.com](https://github.com/theodorusclarence/theodorusclarence.com).

## Project Setup 🔧

To set up the project locally, follow these steps:

1. Fork the repo.
2. Clone your fork:

   ```bash
    git clone <your-fork>
    cd ./shaxriyor.live
    # Copy the .env.example to .env.local
    #   most features are turned off by default
    #   so you won't need to add any envs
    cp .env.example .env.local
    
    # Install the dependencies
    yarn
    
    # Run the development server
    yarn dev
    ```

You can now open up `http://localhost:3000` and start writing code!

## Feature Flag 🚩

Major features are feature flagged in [constants/env.ts](https://github.com/sherryuser/shaxriyor.live/blob/main/src/constants/env.ts)

For example:

```ts
/**
 * Show command service on contents
 * @see Comment.tsx
 */
export const commentFlag = isProd;
```

you can change the `isProd` into `true` to turn the feature on, but expect some error because you don't have any access to the environment variable. I'm not planning to mock them for any time soon, so you can simply leave an issue for these specific features.

## Format 💅

When writing your code, please try to follow the existing code style.

Your code will be automatically linted and formatted before each commit. However, if you want to manually lint and format, use the provided yarn scripts.

```sh
yarn lint:fix
yarn format
```
## Feedback and Contributions 📨

If you have any feedback, suggestions, or issues, please feel free to open an [issue](https://github.com/yourusername/your-repo/issues). Contributions are also welcome; fork the repository and create a pull request.


## License 📝

This project is licensed under the [GPL-3.0 license](LICENSE). Feel free to use, modify, and distribute the code as per the license terms.

Thank you for exploring my personal website. Happy coding! 🚀
