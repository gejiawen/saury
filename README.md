saury
=====

A light message tip tool.


### APIs

- `saury.show`

Show a saury message tips.

The parameters as follows,

    - `message` default: 'Saury Message!'
    - `timeout` default: 4000
    - `type`    default: 'success'

this parameters all have default value, and you can pass by these ways,

```javascript
saury.show('your message');

saury.show('your message', 4000,);

saury.show('your message', 4000, 'success');

saury.show({
    message: 'your message',
    timeout： 4000,
    type: 'success'
});
```


- `saury.hide`

Just hide a saury message tips.


### Features

If you call `saury.show` when a saury tips is already appeared, the previous saury will hide fast itself and the next saury will fade in.

- `index.js` this is a node module supported file.
- `browser.js` this is a browser runtime supported file.
