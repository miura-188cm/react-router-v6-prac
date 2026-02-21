# my-app

Bun + Hono + Prisma (PostgreSQL) による Projects / Todos CRUD API。

---

## 前提

- Docker / Docker Compose がインストールされていること
- ローカルに Bun は不要（コンテナ内で実行）

---

## 環境変数

`.env` を作成する（初回のみ）:

```sh
cp .env.example .env
```

コンテナ内から DB コンテナへ接続するため、`DATABASE_URL` のホスト部分は **サービス名 `db`** を使う:

```env
DATABASE_URL=postgresql://dev:dev@db:5342/dev_db
```

---

## 起動手順

### 1. コンテナを起動

```sh
docker compose up -d
```

### 2. app コンテナに入る

```sh
docker compose exec app sh
```

### 3. 依存パッケージをインストール

```sh
bun install
```

### 4. Prisma クライアントを生成

```sh
bun run db:generate
```

### 5. マイグレーションを実行（初回 / スキーマ変更時）

```sh
bun run db:migrate
```

プロンプトが出たらマイグレーション名を入力（例: `init`）。

### 6. 開発サーバーを起動

```sh
bun run dev
```

`http://localhost:3000` でアクセス可能。

---

## API エンドポイント

### Projects

| Method | Path | 説明 |
| ------ | ---- | ---- |
| GET | `/projects` | 一覧取得 |
| POST | `/projects` | 作成 |
| GET | `/projects/:projectId` | 1件取得 |
| PATCH | `/projects/:projectId` | 更新 |
| DELETE | `/projects/:projectId` | 削除 |

### Todos

| Method | Path | 説明 |
| ------ | ---- | ---- |
| GET | `/projects/:projectId/todos` | 一覧取得 |
| POST | `/projects/:projectId/todos` | 作成 |
| GET | `/projects/:projectId/todos/:todoId` | 1件取得 |
| PATCH | `/projects/:projectId/todos/:todoId` | 更新 |
| DELETE | `/projects/:projectId/todos/:todoId` | 削除 |

### リクエスト例

```sh
# Project 作成
curl -X POST http://localhost:3000/projects \
  -H "Content-Type: application/json" \
  -d '{"title": "My Project"}'

# Todo 作成
curl -X POST http://localhost:3000/projects/<projectId>/todos \
  -H "Content-Type: application/json" \
  -d '{"title": "Task 1", "due": "2025-12-31T00:00:00.000Z"}'
```

---

## ディレクトリ構成

```text
my-app/
├── prisma/
│   └── schema.prisma   # DB スキーマ
├── src/
│   ├── index.ts        # エントリーポイント
│   ├── lib/
│   │   └── prisma.ts   # Prisma クライアント
│   └── routes/
│       ├── projects.ts # Projects CRUD
│       └── todos.ts    # Todos CRUD
├── .env                # 環境変数（git 管理外）
└── package.json
```
