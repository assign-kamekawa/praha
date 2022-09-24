# 課題１

![kadai_1](https://user-images.githubusercontent.com/94156280/192080108-29763fe5-c4d6-4660-810c-f033fb434599.png)

- 特記事項
    - MySQLなら例えばbodyの型をTEXT型を用いれば1000文字格納可能
    - 履歴を含めた全記事はarticlesテーブルに格納され、表示される最新状態の記事をdisplayed_articlesテーブルに格納
    - 特定の記事の一覧はdisplayed_articlesテーブルとarticleテーブルを、display_table_idで内部結合することで一覧表示可能
    - 履歴から過去状態に戻すには履歴を表示した後、対象の履歴をarticleテーブルのidで参照し、displayed_articlesをUPDATEする。その時のarticlesテーブルのidをdisplayed_articlesテーブルのarticle_idに格納
    - 最新状態の記事の表示を早めるため、displayed_articlesテーブルにもtitleとbodyカラムを持たせる

- 懸念事項
    - displayed_articlesテーブルのarticle_idは必要ないかもしれない（既にtitle,body,article_created_atがdisplayed_articlesテーブルに格納されているため、articlesテーブルを参照する必要がない。）

# 課題２
- 分析のみの用途の場合は、基本的にはDWHを用意して分析用にデータを蓄積しておくのが良いのではないか。ただ、小規模なデータの場合はコストや使いやすさを加味してDBに入れておく形で良いと思う。データの所在が分かれることで運用コストが高まる懸念もあるため。

![kadai_2](https://user-images.githubusercontent.com/94156280/192080335-54f497f7-8a21-449f-b1a8-41543693dee4.png)

- 上記、一つのテーブルで作成
- 履歴を含む全ての記事をarticlesテーブルに格納、どの記事の履歴かどうかはarticle_idで判断、最新状態の記事のみlatest_flagをTrueにする