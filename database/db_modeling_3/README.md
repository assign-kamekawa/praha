# 課題１

![kadai_1](https://user-images.githubusercontent.com/94156280/186475002-f1e1d715-84a0-41b4-8c7d-dc5dcc699125.png)

- 特記事項
    - directoriesテーブルのみでディレクトリ構造を定義する
    - 子ディレクトリを作成する際は、親ディレクトリのidをparent_idに保持し、階層を表すことで無制限にサブディレクトを持つことが可能
    - ディレクトリ構造を変更する際には、変更先のディレクトリのidをparent_idに書き換えることで、対処のディレクトリに紐づく全てのディレクトリ、ドキュメントを移動させることが可能
    - document_historyテーブルを用意することで変更履歴の保持が可能
    - ドキュメントを作成時には、documentsとdocument_historiesテーブルにレコードを追加する
    - ドキュメント更新時にはdocument_historiesテーブルにレコードを追加し、documentsテーブルのlatest_document_idを更新時に追加したdocument_historiesテーブルのidに書き換える
    - documentsテーブルにlatest_document_idを持つことで最新のcontentを取得するスピード向上を図る
    - documentsテーブルにorderカラムを用意することでドキュメントの順番を表すことができる

- 懸念事項
    - contentの中身の変更箇所まで特定できた方が良さそうだが、かなり複雑なDB設計になりそうで良い方法が思いつかない（更新した行番号、開始文字位置、終了文字位置、内容など保持しておく必要がありそう）
    - ドキュメントの更新が入るたびにdocument_historyが膨れ上がっていくため、最新版のcontentを早く参照できるようにlatest_document_idを用意したが、これで本当に早くなるのか心配。そもそも、contentの内容を更新する度に保持しておくのは変更履歴の確認と復元のユースケースのためだが、変更箇所だけ特定して保持させて、最新版のcontentをdocumentsテーブルに持たせるようにすればどちらのユースケースも対応することができるのでは？
    - ドキュメントの更新時にlatest_document_idも書き換える運用となるが、document_historiesに追加したレコードのidが追加したタイミングでは取れない気がする。下記の順番になりそうで、1と2の間に他ユーザーの操作によりドキュメントが作られた場合正しいdocument_historiesのidが取れなくなる気がする。
        1. document_historiesにinsert
        1. document_historiesの最大のIDを取得
        1. documentsのレコードをupdate
    - CRUDの要件を満たしているかどうか疑問（CRUDの正しい理解ができてない）
    - trelloのAPIリクエストを眺めてみたが、どこで順番を表しているのかよくわからなかった