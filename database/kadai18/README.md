# 課題１

- SELECT NULL = 0;NULL
- NULL = NULL;NULL
- NULL <> NULL;NULL
- NULL AND TRUE;NULL
- NULL AND FALSE;0
- NULL OR TRUE;1
- NULL IS NULL;1
- NULL IS NOT NULL;0

# 課題2
![kadai_2](https://user-images.githubusercontent.com/94156280/209515711-a1208a34-b04d-402c-8edd-c8cb1e8a96f3.png)
- Assigneeに担当者なし用のレコードを用意して、それにissueを紐づければよいのでは？

# 課題3
- DefaultでFALSEや0を指定した場合、データがFALSEなのか何も定義されていないのか判断することができないため。0も同様。その場合、例えば0がNULLを差し示すような定義をあらかじめしておく必要がある。

# 課題4
- テーブルに新たにNOT NULLのカラムを追加したいときにどのようにSQLを生成すればよいか。