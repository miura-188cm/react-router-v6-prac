# React Router v6 学習構成

## 全体構成

```
RootLayout
 ├─ Dashboard
 ├─ ProjectsLayout
 │   ├─ ProjectList (index)
 │   ├─ ProjectNew
 │   └─ ProjectDetailLayout
 │        ├─ ProjectOverview (index)
 │        ├─ ProjectEdit
 │        └─ TasksLayout
 │             ├─ TaskList (index)
 │             ├─ TaskDetail
 │             └─ TaskEdit
 ├─ Settings
 └─ NotFound
```

## ① トップ階層

`/`

`/projects`

`/settings`

`*（404）`

ここで学ぶ：

`index route`

`not found`

`layout共通化`

## ② プロジェクト階層

`/projects`

`/projects/new`

`/projects/:projectId`

`/projects/:projectId/edit`

ここで学ぶ：

`dynamic param`

`relative link`

`親レイアウト保持`

`詳細と編集の切り替え`

## ③ タスク階層（ネスト3段）

`/projects/:projectId/tasks`

`/projects/:projectId/tasks/:taskId`

`/projects/:projectId/tasks/:taskId/edit`

ここで学ぶ：

`深いネスト`

`複数param取得`

`Outletの重なり`

`relative navigation`

## 追加で必ず入れるもの

1. URLフィルタ  
`/projects/:projectId/tasks?status=done&sort=due`

学ぶ：

`useSearchParams`

`URLを状態源にする設計`

1. タブUIをルートで表現  
`/projects/:projectId`  
`　├ overview`  
`　├ analytics`  
`　└ settings`

学ぶ：

`index route`

`子ルートでタブ管理`

`相対リンク`

1. モーダルをルートで制御  
`/tasks/:taskId?modal=true`

または `background location` パターン。

これができればRouter理解は一段上です。

## この構成で習得できる範囲

`Nested Routes`

`Layout Route`

`Outlet`

`Dynamic Segment`

`Index Route`

`Relative Path`

`URL State`

`404処理`

`階層的UI設計`

## やるべき制約

`状態はできる限りURLに寄せる`

`親レイアウトは絶対崩さない`

`navigateは相対パス中心で使う`

`深さ3以上のネストを必ず作る`
