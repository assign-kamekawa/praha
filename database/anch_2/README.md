# 課題１

- 例えば新しいタグが増える度にカラムを追加しないといけなく、カラム数が膨大になりクエリを修正する手間が増える
- カラムに入るデータをnullまたはtag_idに制限する必要があるが、そのような制限が難しい気がする（データの整合性が取れなくなる可能性あり）


# 課題２
![kadai_2](https://user-images.githubusercontent.com/94156280/192083660-0ca4e959-14bb-4fce-b707-4a4a1985068e.png)

# 課題３
- 企業情報管理ツールを開発していると仮定する
    - 「company」テーブルを作成して、「担当者id」をカラムとして保持している
        - 当初は5名の担当者で管理していたが、社員数の増加により10名で管理する必要になったため、各担当ごとのカラムをさらに5つ追加したときにアンチパターンに陥る