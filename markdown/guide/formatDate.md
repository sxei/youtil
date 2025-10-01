---
toc: content
order: 5
---

# 日期格式化与解析

包含`formatDate`和`parseDate`2个方法，功能强大，代码精简，加起来一共才30多行代码，参考：https://blog.haoji.me/js-date-format-parse.html

这里的2个方法是全网唯一一个支持`Java`风格的日期处理函数，无论是`dayjs`还是`monent`都是采用自己的一套`YYYY-MM-DD HH:mm:ss`语法，而这里采用和Java百分百兼容的`yyyy-MM-dd HH:mm:ss:SSS`语法，因为笔者曾经是`java`开发者，对这一套更熟悉。

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

# 日期解析

完整代码仅17行，`parseDate(str, fmt)`，其中`fmt`支持的格式有：

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
parseDate('2016-08-11'); // Thu Aug 11 2016 00:00:00 GMT+0800
parseDate('2016-08-11 13:28:43', 'yyyy-MM-dd HH:mm:ss') // Thu Aug 11 2016 13:28:43 GMT+0800
```
