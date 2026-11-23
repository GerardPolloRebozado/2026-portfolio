FROM node:24-alpine3.23 AS runtime
WORKDIR /app

RUN npm install -g pnpm@11.1.2
COPY package.json pnpm-lock.yaml* pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
ARG GITHUB_PAT
ENV GITHUB_PAT=$GITHUB_PAT
ENV CI=true
RUN pnpm run build

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321

CMD ["node", "./dist/server/entry.mjs"]
