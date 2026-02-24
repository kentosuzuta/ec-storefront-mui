## 概要

Figma MCP を用いたUIレイアウトの自動生成検証

Cursorとの連携によるフロントエンド初期実装の効率化検討

ECサイトUIを題材に、デザイン→コード変換フローを試験的に構築

---

## 目的

- ECサイトにおける基本的なユーザー購買体験のUIを再現する
- React + TypeScript を用いたコンポーネント設計の実装
- MUIのThemeを用いたデザインの統一
- API接続を想定したデータ構造設計
- レスポンシブデザインの実装（SP / TB / PC）

---

## 使用技術

| 技術            | 内容                       |
| --------------- | -------------------------- |
| Next.js         | App Router                 |
| React           | UI構築                     |
| TypeScript      | 型安全な実装               |
| Material UI     | UIコンポーネントライブラリ |
| React Hook Form | フォーム管理               |
| Context API     | カート状態管理             |
| Figma           | UIデザイン設計             |

---

## 画面一覧

| 画面名         | ルート               | 内容                         |
| -------------- | -------------------- | ---------------------------- |
| TOP            | `/`                  | おすすめ商品、カテゴリ表示   |
| 商品一覧       | `/products`          | 商品検索、絞り込み、並び替え |
| 商品詳細       | `/products/[id]`     | 商品情報表示、カート追加     |
| カート         | `/cart`              | 商品数量変更、削除、合計表示 |
| チェックアウト | `/checkout`          | 配送先入力フォーム           |
| 注文完了       | `/checkout/complete` | 完了画面                     |

---

## 実装機能

### 商品一覧

- 商品の一覧表示
- キーワード検索（商品名）
- カテゴリによる絞り込み
- 価格帯によるフィルタリング
- 並び替え（新着 / 価格昇順 / 価格降順）
- ページング表示
- URLクエリパラメータとの同期

---

### 商品詳細

- 商品画像表示
- 商品説明
- 価格表示
- 在庫状況表示
- 数量選択
- カートへの追加

---

### カート機能

- 商品追加
- 数量変更
- 商品削除
- 小計表示
- 合計金額表示
- Snackbarによる操作通知

---

### チェックアウト機能

- ユーザー情報入力フォーム
- バリデーション（必須入力 / 入力形式）
- 注文完了画面への遷移

---

## データ構造

### Product

id: string  
name: string  
description: string  
price: number  
images: string[]  
categoryId: string  
stock: number  
rating?: number  
createdAt: string

### Category

id: string  
name: string

### CartItem

productId: string  
quantity: number  
unitPrice: number  
name: string  
image: string

---

## ディレクトリ構成

src/  
 ├ app/  
 │ ├ page.tsx  
 │ ├ products/  
 │ │ ├ page.tsx  
 │ │ └ [id]/page.tsx  
 │ ├ cart/page.tsx  
 │ └ checkout/  
 │ ├ page.tsx  
 │ └ complete/page.tsx  
 ├ components/  
 │ ├ layout/  
 │ └ ui/  
 ├ features/  
 │ ├ products/  
 │ ├ cart/  
 │ └ checkout/  
 ├ lib/  
 │ └ mock/  
 ├ types/

---

## 非機能要件

- TypeScriptによる型安全な設計
- MUI ThemeによるUIの統一
- next/imageを使用した画像最適化
- レスポンシブ対応（SP / TB / PC）
- アクセシビリティを考慮したUI設計
