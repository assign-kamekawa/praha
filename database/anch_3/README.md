# 課題１

- 外部キー制約がつかえなくなり、整合性が取れなくなる
- ある漫画、または小説に紐づくコメントを一覧表示させたい時に、単純なbelongs_to_idの結合では取得できずにクエリが複雑になる

# 課題2

- Manga, Novelを一つのテーブルにまとめることで、Commentの参照先を一つのテーブルに限定

# 課題3

- ニュースメディア兼SNSを開発していると仮定し、ニュースとそのコメントに対するお気に入りを管理するとき、「ニュース」「コメント」「お気に入り」テーブルが生まれ、「お気に入り」テーブルにtypeやbelongs_to_idカラムが生まれるとアンチパターンに陥る