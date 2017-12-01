# 広島コンピュータ専門学校 学生作品展2018
Link: https://fes.hsc.ac.jp/


## ディレクトリ
- src :開発データを格納。  
ここで作成したSassやjsファイルを自動的に結合してdocsへ保存しています
- docs :公開データを格納。

## 使用技術
- SASS
- React.js
- Gulp
- Webpack

### SASS
FLOCSSでの記述を心掛けました。  
ベースとなるものを除き、全てのスタイルをclassで管理しています。

### React.js
個人的な興味と勉強の為に導入。React-routerも試しています。  
各テーマのページ構造は同じなので、コンポーネント化して記述を抑えたかった。  
propとstateのやり取りに苦戦して今回は断念しました。

### Gulp
SASSのコンパイル。

### Webpack
javascriptのコンパイル。Babel導入。

### その他
server.jsはテスト環境で表示するために作成。Expressを使用。  
サーバー設定等に関しては対応していないので説明できません。  
画像、ロゴデータは入れてないです。
