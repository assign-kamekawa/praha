# 課題１

- 外部キー制約を付けないことで、データの整合性が取れない状況になる可能性がある。例えば存在しないauthor_idをbookテーブルで持っているなど。
- 一方外部キー制約を定義することで、authorテーブルのレコードを削除する際、Bookテーブルに存在している該当のauthor_idのレコードをすべて削除しなければならない

# 課題2

- RESTRICT
    - UPDATE:エラー
    - DELETE:エラー
    - ユースケース：基本的に完全に変更がなされない場合に使用
- CASCADE
    - UPDATE:参照先の変更に追従する
    - DELETE:参照先がなくなると削除される
    - ユースケース：参照先の変更を許容する場合かつ削除はなされない場合に使用
- SET NULL
    - UPDATE:NULLになる
    - DELETE:NULLになる
    - ユースケース：使うケースはなさそう
- NO ACTION
    - UPDATE:エラー
    - DELETE:エラー
    - ユースケース：基本的に完全に変更がなされない場合に使用

- 従業員サービス
    - 部署を新規に作り、全員異動させるなどの時に、部署を削除してしまうと従業員情報がすべて消えてしまう

- プロジェクトマネジメントツール
    - 担当者の退職などで削除してしまうと、担当者のいないIssueが発生してしまう

- Prisma
    - UPDATE:CASCADE
    - DELETE:SET NULL(ただしNOT NULLに場合はRESTRICT)
    - Deleteすることで参照先がなくなっても削除されない（NULLまたはエラーになる）

- TypeORM
    - DEFAULTではCASCADEはfalse、おそらくRESTRICT

# 課題3
- 上記、従業員サービスにおける参照アクションのベストプラクティスは？
- 上記、プロジェクトマネジメントツールにおける参照アクションのベストプラクティスは？
- RESTRICTとNO ACTIONの使い分けは？