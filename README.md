# 🎨 Loading background images with just one tiny hook!
[![Build Status](https://travis-ci.org/daphnesmit/use-background-image.svg?branch=master)](https://travis-ci.org/daphnesmit/use-background-image)
![GitHub issues](https://img.shields.io/github/issues/daphnesmit/use-background-image)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

Working with full-screen background images can be difficult, they are slow to load and especially when you have a hero image you want them to display immediatly or show a placeholder instead.
Of course you can lazy load them using one of the many lazy loading utils out there on NPM. 
But I - sometimes - like to keep things small when I just need *one* thing.
That's why I created this tiny hook!


This small hook provides the very basic functionality of:

- adding a placeholder to show while loading the (background) image
- checking when your image has been loaded
- if there is an error when trying to load the image


## 🎉 How to use the hook

Check out the `/example` directory for a full fletched example of the hook.

```typescript
const { src, isLoading, hasError } = useBackgroundImage({
  src: 'https://source.unsplash.com/weekly?water',
  placeholder: '[[ insert smaller version or placeholder here ]]'
});
```
