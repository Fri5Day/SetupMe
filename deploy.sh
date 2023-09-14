// .github/workflows/deploy.yaml
name: deploy
on:
  push:
    branches:
      - master
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v1
      - uses: actions/setup-node@v1
        with:
          node-version: '12'
      - name: setup git auth
        env:
          email: 'victoramaral951@outlook.com'
          username: 'Fri5Day'
          access_token: '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'
        run: |
          git config --global credential.helper store
          echo "https://${access_token}:x-oauth-basic@github.com" > ~/.git-credentials
          git config --global user.email $email
          git config --global user.name $username
      - name: deploy to gh-pages
        run: |
          npm i
          NODE_ENV=production npm run build
          cd dist
          git init
          git add -A
          git commit -m "🚀 Deploy id ${GITHUB_RUN_ID}"
          git push -f "https://github.com/${GITHUB_REPOSITORY}.git" master:gh-pages