# 課題１

![kadai_1](https://user-images.githubusercontent.com/94156280/184901493-9add8f84-eb9b-46f2-b511-ddb9d2ad1547.png)

- 特記事項
    - 必要な要件を満たす最低限のもので設計
    - チャネル要件はusersテーブルからchannel_users, channelsを内部結合することで所属チャネルのユーザしかmessages, thread_messagesにたどり着けないようにする
    - ユーザ要件はworkspace_users, channel_usersにinsertまたはdeleteすることで参加・脱退ができるようにする
    - 横断機能要件はusersテーブルからchannel_users, channelsを内部結合することで所属チャネルのユーザしかmessages, thread_messagesにたどり着けないようにし、messagesテーブルのmessageとthread_messagesのmessageのどちらかに入力検索データが含まれるレコードのみ返すようにする

- 懸念事項
    - メッセージ、スレッドメッセージが増えていった際に、明らかに現状のSlack同様の検索スピードが担保できない気がするが、良さそうな方法が思いつかない
    - 要件にはないかusersのパスワード管理はどのように実現したらよいのか、usersテーブルにカラムとして用意するのはセキュリティ的によくなさそう
    - ワークスペース、チャネルの所属履歴も残しておいた方が良いのか？