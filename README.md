# How to use
## How to start
```
npm run dev
```

## endpoint

```
GET /sheets/{SheetID}?startDate={YYYY-MM-DD}&endDate={YYYY-MM-DD}
```
SheetID = 0   三人用麻雀のgoogle spread sheetを指定
SheetID = 1   三人用麻雀のgoogle spread sheetを指定

## response
```json
{
    "id": "0",
    "rows": [
        {
            "ID": "1",
            "Date": "2024/04/01",
            "Timestamp": "21:03",
            "Users": {
                "PlayerA": "-5",
                "PlayerB": "40",
                "PlayerC": "-35",
                "PlayerD": "0",
            }
        }
    ]
}
```