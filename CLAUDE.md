# Claude Code への指示

このリポジトリは Muse が統括し、Claude Code が実装を担当する。

## 役割
- Muse（統括）: タスクの分解、仕様の作成、レビュー、進捗管理、公開・デプロイの確認
- Claude Code（実装）: 仕様に沿ってコードを書き、テストし、プルリクエストを出す

## 作業ルール
- 作業は main から feature ブランチを切って行う。main への直接コミットはしない。
- 1つの変更で1つのことだけやる。小さく分けてコミットする。
- 公開設定やリポジトリ設定は変えない。秘密情報（APIキー、パスワード、トークン）はコミットしない。
- 作業前に `git pull` で最新化する。
- 変更後はブラウザで開いて動作確認する。

## アプリの概要
- index.html + app.js + style.css のシンプルなカウンターアプリ。
- main ブランチから GitHub Pages で公開中: https://takuyamiyashita.github.io/muse-minimal-app/
- 仕様は Muse が Issue または TASKS.md に書く。それに従うこと。仕様にない判断が必要な場合は、プルリクエストの説明に書く。
