Creation steps:

1.npx create-nx-workspace with express server

√ Where would you like to create your workspace? · date-mode
√ Which stack do you want to use? · node
√ What framework should be used? · express
√ Standalone project or integrated monorepo? · integrated
√ Application name · express-server
√ Would you like to generate a Dockerfile? [https://docs.docker.com/] · No
√ Enable distributed caching to make your CI faster · No

- run express server:
  nx run express-server:serve

creating a nextjs app:
nx g @nx/next:app next-app

config in vercel:
![test](./readme_images/vercel_next_settings.png)
