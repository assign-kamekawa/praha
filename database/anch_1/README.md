# 課題１

- 例えばtagAというタグが付いているPostを取り出したい時に全レコードのtagsにおいて全文一致で検索するか、カンマ区切りで再度テーブルを生成して検索しなければならないため、検索に時間がかかる
- 例えばtagAの名前を変更したい際に、変更させるのが難しい

# 課題２
![kadai_2](https://user-images.githubusercontent.com/94156280/192083660-0ca4e959-14bb-4fce-b707-4a4a1985068e.png)

# 課題３
- 顧客管理ツールを開発していると仮定したとき、顧客「Customers」テーブルにメールアドレス「Email」テーブルを追加して、そこにカンマ区切りでカテゴリ名を入れるようにしたらアンチパターンとなる
- 企業情報サイトを開発していると仮定したとき、企業「Company」テーブルに業界「Industry」テーブルを追加して、そこにカンマ区切りで業界名を入れるようにしたら、アンチパターンになる（SIer, SES, SaaSなど）