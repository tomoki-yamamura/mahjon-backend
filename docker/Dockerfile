# ベースイメージとしてNode.jsを使用
FROM node:18

# アプリケーションディレクトリを作成
WORKDIR /usr/src/app

# package.jsonとpackage-lock.jsonをコピー
COPY package*.json ./

# 依存関係をインストール
RUN npm install

# TypeScriptコンパイラをグローバルにインストール
RUN npm install -g typescript

# プロジェクト全体をコピー
COPY . .

# TypeScriptコードをコンパイル
RUN tsc

# アプリケーションがリッスンするポートを指定
EXPOSE 8080

# アプリケーションを起動
# CMD [ "node", "build/index.js" ]
