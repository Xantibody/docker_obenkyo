# Docker 学習

## 構成
### Front
| 言語 | FW |
| --- | --- |
| TypeScript | [Nextjs](https://github.com/vercel/next.js/) |

#### 開発
ディレクトリ構成

```sh
.
├── src/
│   └── app/
│       ├── api/
│       │   └── route.ts  # ここにバックエンドとの接続を書く
│       ├── layout.tsx
│       ├── page.tsx
│       ├── components
│       ├── containers
│       └── features/
│           └── api/
│               └── index.ts # ここはバックエンドとの中間地点
│                            # app/api/route.ts → バックエンドへとつながる   
└── Dockerfile
```

起動
```sh
npm run dev
# localhost:3000
```

## Backend
| 言語 | FW | ORM |
| --- | --- | --- |
| Java 21 | [Spring boot](https://spring.io/) | [Spring Data JPA](https://spring.io/projects/spring-data-jpa/) |


#### 開発
ディレクトリ構成
```sh
.
└── src/
    ├── main/
    │   └── com.example.todotas/
    │       ├── TodoTaskApplication.java
    │       ├── controller/
    │       │   ├── dto                  # コントローラで使うDTO
    │       │   └── TaskController.java  # パスマッピング
    │       ├── domain/
    │       │   ├── entity               # DAO
    │       │   └── repository           # JPA Repository
    │       └── service                  # 実処理
    └── resources/
        └── application.properities      # データベースの定義が書かれている
```

[IntelliJ Idea](https://www.jetbrains.com/idea/download/)のコミニティエディションを使うこと  
起動は下記参照  
https://www.aruse.net/entry/2022/06/19/201523  
先にDBは立ち上げている必要あり

### DB
Dockerで配置済み  
`database/init`に初期データsqlがある。複数ファイル配置可能。

#### 開発
起動
```sh
docker compose up
``````