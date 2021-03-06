# Sunameri

[ゲームキューブコントローラー](https://github.com/mizuyoukanao/WHALE)とキャプチャデバイスを使用した自動化を、JavaScript(V8)で記述するプロジェクト

## Usage

```ps1
.\Sunameri.exe scriptfile.js
```

## Samples

Aボタン押下

```js
const controller = new Controller({
    portName: 'COM3',
    baudRate: 4800
});
controller.execute([
    { type: 'KeyDown', key: 'A', wait: 200 },
    { type: 'KeyUp', key: 'A', wait: 200 }
]);
```

5秒間画面を表示

```js
const capture = new VideoCapture({
    index: 1,
    width: 1600,
    height: 1200,
    visible: true
});
new Timer().sleep(5000);
```

より実用的なサンプルは[こちら](https://github.com/mukai1011/xd-adjust-seed)を確認してください。

## Note

SampleAppは現在ビルドできませんが、有用なので後ほど移行する予定です。
