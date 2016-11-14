### 说明

给项目中每个html引入防劫持js

### 安装

```javascript
   npm install fis-postpackager-hijacked -g
```

### 使用

```javascript
       
    //fis3配置
    fis.match('::package', {
    postpackager:[
        fis.plugin('hijacked',{
            ignoreFile: []
        })
	]
});