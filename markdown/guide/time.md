---
toc: content
order: 5
---

# 时间解析与格式化

核心主打`formatDate`和`parseDate`2个方法，功能强大，代码精简，加起来一共才30多行代码，参考：https://blog.haoji.me/js-date-format-parse.html

这里的2个方法是全网唯一一个支持`Java`风格的日期处理函数，无论是`dayjs`还是`monent`都是采用自己的一套`YYYY-MM-DD HH:mm:ss`语法，而这里采用和Java百分百兼容的`yyyy-MM-dd HH:mm:ss:SSS`语法，因为笔者曾经是`java`开发者，对这一套更熟悉。

另外还有`formatFriendlyDate`、`formatDuration`、`sleep`等方法；

## formatDate

`formatDate(date, fmt)`，其中`fmt`支持的格式有：

* y（年）
* M（月）
* d（日）
* q（季度）
* w（星期）
* H（24小时制的小时）
* h（12小时制的小时）
* m（分钟）
* s（秒）
* S（毫秒）

另外，字符的个数决定输出字符的长度，如，`yy`输出16，`yyyy`输出2016，`ww`输出周五，`www`输出星期五，等等。

```javascript
formatDate(); // ''
formatDate(new Date(), 'yyyy-MM-dd'); // 2016-09-02
// 2016-09-02 第3季度 星期五 13:19:15:792
formatDate(new Date(), 'yyyy-MM-dd 第q季度 www HH:mm:ss:SSS');
formatDate(1472793615764); // 2016-09-02 13:20:15
```

## parseDate

完整代码仅17行，`parseDate(str, fmt?)`，将字符串或者数字等解析成`Date`格式，支持手动传入`fmt`，如果不传`fmt`会尝试尽可能自动解析。其中`fmt`支持的格式有：

* y（年）
* M（月）
* d（日）
* H（24小时制的小时）
* h（12小时制的小时）
* m（分钟）
* s（秒）
* S（毫秒）

示例：

```javascript
parseDate('2016-08-11 13:28:43'); // 自动解析
parseDate('2016-08-11T13:28:43Z'); // 按照零时区解析
parseDate(1765438643600); // 时间戳解析
parseDate('2016-08-11 13:28:43:433', 'yyyy-MM-dd HH:mm:ss:SSS') // Thu Aug 11 2016 13:28:43 GMT+0800
```

## formatFriendlyDate

将日期格式化为更易读的“友好时间”：

* 1 分钟内返回“刚刚”
* 1 小时内返回“x分钟前”
* 当天返回“HH:mm”
* 当年返回“M月d日”
* 否则返回“yyyy年M月d”

示例：

```javascript
formatFriendlyDate(Date.now() - 30 * 1000); // 刚刚
formatFriendlyDate(Date.now() - 30 * 60 * 1000); // 30分钟前
formatFriendlyDate('2023-02-09T10:30:00Z'); // 18:30（示例，取决于当前时间）
formatFriendlyDate('2022-12-25'); // 2022年12月25
```

## formatDuration

`formatDuration(duration: number, fmt: string = 'd:hh:mm:ss')`：将以秒为单位的时长格式化为易读的字符串，默认格式`d:hh:mm:ss`，会自动忽略为 0 的天或小时前缀。

示例：

```javascript
formatDuration(100); // 01:40
formatDuration(3661); // 01:01:01
formatDuration(90000); // 1:01:00:00
formatDuration(3661, 'd天hh小时mm分钟ss秒'); // 01小时01分钟01秒
formatDuration(100, 'm:s'); // 1:40
```

## sleep

延迟若干毫秒，示例：

```javascript
await sleep(200); // 休眠 200ms
await sleep(); // 不传参数时默认 0ms
```
