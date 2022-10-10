# 課題１

![kadai_1](https://user-images.githubusercontent.com/94156280/188132136-c064b8b6-b10e-480d-9190-50521bc55f77.png)

- 特記事項
    - usersテーブルとremindersテーブルの中間テーブルを用意することで、複数のユーザ宛のリマインド設定が可能
    - 頻度はremind_timingカラムで[Amazon EventBridgeで使われているCron式](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-create-rule-schedule.html#eb-cron-expressions)で格納(1時間置きのため分単位はなし)
    - バッチ起動時には起動タイミングの西暦、月、日にち、時刻、曜日を元に、リマインドする必要があるレコードを実行する


- 懸念事項
    - バッチのアプリ側の記述が複雑になりそうだが、バッチであることも考慮すると多少複雑でも問題なさそう
    - Cron式のデータを保持するために西暦、月、日にち、時刻、曜日のカラムを設けた方がSQLのみで対象のリマインダーをクエリできる気がする